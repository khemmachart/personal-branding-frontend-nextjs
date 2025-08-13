import { ContentRepository } from "../../repositories/contentRepository";

export class GetContentByIdUseCase {
  constructor(private contentRepository: ContentRepository) {}

  async execute(id: string) {
    try {
      return await this.contentRepository.getContentById(id);
    } catch (error: any) {
      console.error('Error in GetContentByIdUseCase:', error);
      throw new Error(`Failed to get content: ${error.message}`);
    }
  }
} 