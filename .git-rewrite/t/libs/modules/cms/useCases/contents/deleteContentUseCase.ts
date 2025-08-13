import { ContentRepository } from "../../repositories/contentRepository";

export class DeleteContentUseCase {
  constructor(private contentRepository: ContentRepository) {}

  async execute(id: string) {
    try {
      if (!id) {
        throw new Error('Content ID is required');
      }

      await this.contentRepository.deleteContent(id);
    } catch (error: any) {
      console.error('Error in DeleteContentUseCase:', error);
      throw new Error(`Failed to delete content: ${error.message}`);
    }
  }
} 