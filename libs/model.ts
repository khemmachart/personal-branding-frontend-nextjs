import { v4 as uuidv4 } from 'uuid';

export interface Project {
  id: string;
  parent_id?: string;
  title: string;
  details?: string;
  dates?: {
    scheduledDate?: string;
    startDate?: string;
    dueDate?: string;
  }
  tasks?: Project[];
  subProjects?: Project[];
  isCompleted?: boolean;
}
