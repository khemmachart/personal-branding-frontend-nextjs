import { 
  selfImprovementData,
  relationshipGirlfriendData,
  relationshipFamilyData,
  relationshipWorkData,
  relationshipEventsData,
  relationshipFriendData,
  relationshipGeneralData,
  technicalSelfLearningProject,
  financialFreedomPlanningProject,
  weddingPlanningData,
  houseRenovationTopic,
  travellingData
} from 'libs/service';

const allProjects = [
  selfImprovementData,
  relationshipGirlfriendData,
  relationshipFamilyData,
  relationshipWorkData,
  relationshipEventsData,
  relationshipFriendData,
  relationshipGeneralData,
  technicalSelfLearningProject,
  financialFreedomPlanningProject,
  weddingPlanningData,
  houseRenovationTopic,
  travellingData
];

export default function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { taskId } = req.query;

  // Helper function to find and update task
  const updateTaskInProject = (project) => {
    // Check tasks in the current project
    if (project.tasks) {
      const taskIndex = project.tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        project.tasks[taskIndex].isCompleted = !project.tasks[taskIndex].isCompleted;
        return true;
      }
    }

    // Check tasks in subprojects
    if (project.subProjects) {
      for (const subProject of project.subProjects) {
        if (updateTaskInProject(subProject)) {
          return true;
        }
      }
    }

    return false;
  };

  // Search through all projects
  let taskFound = false;
  for (const project of allProjects) {
    if (updateTaskInProject(project)) {
      taskFound = true;
      break;
    }
  }

  if (!taskFound) {
    return res.status(404).json({ message: 'Task not found' });
  }

  return res.status(200).json({ message: 'Task updated successfully' });
} 