import { TargetAudience } from "components/ContentList";
import { TargetAudienceRepository } from "libs/modules/backOffices/repositories/targetAudienceRepository";

export class GetAllTargetAudiencesUseCase {
  constructor(private targetAudienceRepository: TargetAudienceRepository) {}

  async execute(): Promise<TargetAudience[]> {
    return this.targetAudienceRepository.getTargetAudiences();
  }
}
