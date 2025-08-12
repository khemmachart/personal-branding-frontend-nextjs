import { Content } from "components/ContentList";
import { ContentRepository } from "../../repositories/contentRepository";

export class CreateContentUseCase {
  constructor(private contentRepository: ContentRepository) {}

  async execute(content: Content) {
    try {
      if (!content.name || !content.name.trim()) {
        throw new Error('Content name is required.');
      }
      const newContent = await this.contentRepository.createContent(content);
      return await this.contentRepository.getContentById(newContent.id);
    } catch (error: any) {
      console.error('Error in CreateContentUseCase:', error);
      throw new Error(`Failed to create content: ${error.message}`);
    }
  }
} 