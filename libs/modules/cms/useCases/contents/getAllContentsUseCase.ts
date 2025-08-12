import { ContentRepository } from "../../repositories/contentRepository";

export class GetAllContentsUseCase {
  constructor(private contentRepository: ContentRepository) {}

  async execute(filter: {
    workflowStageStatusCodes?: string;
  }) {
    try {
      if (filter.workflowStageStatusCodes) {
        const statusCodesArray = filter.workflowStageStatusCodes.split(',').map(status => status.trim().toUpperCase());
        return await this.contentRepository.getContentsByWorkflowStageStatusCodes(statusCodesArray);
      } else {
        return await this.contentRepository.getAllContents();
      }
    } catch (error: any) {
      console.error('Error in GetAllContentsUseCase:', error);
      throw new Error(`Failed to get contents: ${error.message}`);
    }
  }
} 
