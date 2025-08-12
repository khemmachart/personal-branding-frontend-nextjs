import { ContentRepository } from "../../repositories/contentRepository";
import { FileRepository } from "../../repositories/fileRepository";
import { Content } from "components/ContentList";
import { WorkflowStageStatus } from "components/ContentList";

export class UpdateContentUseCase {
  constructor(private contentRepository: ContentRepository, private fileRepository: FileRepository) {}

  async execute(id: string, content: Content) {
    try {

      const { id: contentId, name: contentName, title: contentTitle, description: contentDescription, status: contentStatus, images: contentImages } = content;

      if (!contentName || !contentTitle) {
        throw new Error('Name and Title are required');
      }
      
      if (id !== contentId) {
        console.error('Content ID mismatch', id, contentId);
        throw new Error('Content ID mismatch');
      }

      // Get current status history, before updating the content
      const currentContent = await this.contentRepository.getContentStatusHistory(contentId);
      const fromStatus = { id: currentContent.workflow_stage_status_id } as WorkflowStageStatus
      const toStatus = { id: contentStatus?.id } as WorkflowStageStatus;

      // Update content
      const updatedContent = await this.contentRepository.updateContent(contentId, content);

      // Update images
      const newImages = contentImages?.filter(image => !image.id && !image.deleted_date); // New images are those that have no id and no deleted_date
      const pendingRemoveImages = contentImages?.filter(image => image.deleted_date);

      // Add new images
      if (newImages && newImages.length > 0) {
        await this.contentRepository.updateContentImages(newImages);
      }

      // Remove deleted images
      if (pendingRemoveImages && pendingRemoveImages.length > 0) {
        const contentImageIds = pendingRemoveImages.map(image => image.id);
        const deleteFileRecordIds = pendingRemoveImages.map(image => image.file.id);

        // Move files to archive folder
        const imageThumbnailPaths = pendingRemoveImages.map(image => image.file.file_thumbnail_url);
        const imageOriginalPaths = pendingRemoveImages.map(image => image.file.image_original_url);
        const imageWebpPaths = pendingRemoveImages.map(image => image.file.image_webp_url);
        const allImagePaths = [...imageThumbnailPaths, ...imageOriginalPaths, ...imageWebpPaths];
        
        const [deletedImageIds, movedFilesToArchiveFolder, deletedFileRecords] = await Promise.all([
          this.contentRepository.deleteContentImages(contentImageIds),
          this.fileRepository.moveBulkFilesToArchiveFolder(allImagePaths),
          this.fileRepository.deleteBulkFileRecords(deleteFileRecordIds)
        ]);
      }

      // Create status history if the status has changed
      if (fromStatus.id !== toStatus.id) {
        await this.contentRepository.createContentStatusHistory(contentId, fromStatus, toStatus);
      }
      
      return updatedContent;
    } catch (error: any) {
      console.error('Error in UpdateContentUseCase:', error);
      throw new Error(`Failed to update content: ${error.message}`);
    }
  }
} 