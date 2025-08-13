import { WorkflowStageStatus } from "components/ContentList";
import { WorkflowStageRepository } from "libs/modules/cms/repositories/workflowStageRepository";

export class GetAllWorkflowStageStatusesUseCase {
  constructor(private workflowStageRepository: WorkflowStageRepository) {}

  async execute(): Promise<WorkflowStageStatus[]> {
    return this.workflowStageRepository.getAllWorkflowStageStatuses();
  }
}