import React, { useState } from 'react';
import { Project } from 'libs/model';
import { areas } from 'libs/service';
import { GetServerSidePropsContext } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { Breadcrumb, BreadcrumbItem } from 'components/Breadcrumb';
import { useRouter } from 'next/router';

interface TaskListProps {
  tasks: (Project & { parentName?: string })[];
  onTaskToggle: (taskId: string) => void;
  showParent?: boolean;
  defaultExpanded?: boolean;
}

export function TaskList({ tasks, onTaskToggle, showParent, defaultExpanded = true }: TaskListProps) {
  const [expanded, setExpanded] = useState<string[]>(defaultExpanded ? tasks?.map(t => t.id) : []);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Project>>({
    id: uuidv4(),
    title: '',
    isCompleted: false
  });
  
  // Add this ref for the input
  const titleInputRef = React.useRef<HTMLInputElement>(null);

  // Add ref for the form container
  const formRef = React.useRef<HTMLDivElement>(null);

  // Add effect to handle outside clicks
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsAddingTask(false);
        setNewTask({ id: uuidv4(), title: '', details: '', isCompleted: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Modify the existing click handler
  const handleAddTaskClick = () => {
    setIsAddingTask(true);
    // Use setTimeout to ensure the input exists when we try to focus it
    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 0);
  };

  const handleAddTask = (continuousAdding: boolean = false) => {
    if (newTask.title) {
      onTaskToggle(newTask.id);
      setNewTask({ id: uuidv4(), title: '', details: '', isCompleted: false });
      
      if (!continuousAdding) {
        setIsAddingTask(false);
      } else {
        setTimeout(() => {
          titleInputRef.current?.focus();
        }, 0);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddTask(true);
    } else if (e.key === 'Escape') {
      // Add escape key to close the input field
      setIsAddingTask(false);
      setNewTask({ id: uuidv4(), title: '', details: '', isCompleted: false });
    }
  };

  const toggleTask = (taskId: string) => {
    setExpanded(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="task-list">
      {tasks?.map((task) => (
        <div key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
          <div className="task-header" onClick={() => toggleTask(task.id)}>
            <div className="task-main-row">
              <div className="task-left">
                <div className="custom-checkbox" onClick={(e) => {
                  e.stopPropagation();
                  onTaskToggle(task.id);
                }}>
                  {task.isCompleted && <span className="checkmark">✓</span>}
                </div>
                <span className="task-title">
                  {task.title}
                  {showParent && task.parentName && (
                    <span className="parent-info">
                      {task.parentName}
                    </span>
                  )}
                </span>
              </div>
              <div className="task-right">
                {task.dates?.scheduledDate && (
                  <span className="due-date">
                    Scheduled: {new Date(task.dates.scheduledDate).toLocaleString('en-GB', {
                      day: '2-digit',
                      month: 'short', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                )}
                <span className={`expand-icon ${expanded.includes(task.id) ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
            </div>
          </div>
          <div className={`task-detail ${expanded.includes(task.id) ? 'expanded' : ''}`}>
            <div dangerouslySetInnerHTML={{ __html: task.details || '' }}></div>
          </div>
        </div>
      ))}
      
      {isAddingTask ? (
        <div className="new-task-form" ref={formRef}>
          <div className="task-input-row">
            <input
              ref={titleInputRef}
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onKeyDown={handleKeyPress}
              onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
              className="task-input"
            />
            <button onClick={() => handleAddTask(false)} className="save-button">Save</button>
          </div>
        </div>
      ) : (
        <button 
          className="add-task-button" 
          onClick={handleAddTaskClick}
        >
          <span className="plus-icon">+</span>
          Add Task
        </button>
      )}

      <style jsx>{`
        .task-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .task-item {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          background: white;
          transition: all 0.2s ease;
          font-size: 18px;
        }

        .task-item:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .task-header {
          padding: 12px 16px;
          cursor: pointer;
        }

        .task-main-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          flex-wrap: wrap;
        }

        .task-left {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }

        .task-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
          min-width: 0;
        }

        .custom-checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid #666;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .custom-checkbox:hover {
          border-color: #4CAF50;
        }

        .completed .custom-checkbox {
          background: #4CAF50;
          border-color: #4CAF50;
        }

        .checkmark {
          color: white;
          font-size: 16px;
        }

        .task-title {
          font-size: 18px;
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
          flex: 1;
        }

        .completed .task-title {
          color: #888;
        }

        .due-date {
          color: #666;
          font-size: 16px;
          white-space: nowrap;
        }

        .expand-icon {
          font-size: 14px;
          color: #666;
          transition: transform 0.2s ease;
        }

        .expand-icon.expanded {
          transform: rotate(180deg);
        }

        .task-detail {
          padding: 12px 16px;
          border-top: 1px solid #e0e0e0;
          color: #666;
          font-size: 18px;
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          transition: opacity 0.3s ease-out, padding 0.3s ease-out;
          opacity: 0;
          padding: 0 16px;
        }

        .task-item .task-detail {
          max-height: 0;
          padding: 0 16px;
          opacity: 0;
        }

        .task-item .task-detail.expanded {
          max-height: none;
          padding: 12px 16px;
          opacity: 1;
        }

        .add-task-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: transparent;
          border: 2px dashed #ccc;
          border-radius: 4px;
          color: #666;
          cursor: pointer;
          width: 100%;
          font-size: 18px;
          transition: all 0.2s ease;
        }

        .add-task-button:hover {
          border-color: #4CAF50;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.05);
        }

        .plus-icon {
          font-size: 24px;
          font-weight: bold;
        }

        .new-task-form {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 16px;
          background: white;
        }

        .task-input-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .task-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 2px;
          font-size: 18px;
        }

        .save-button {
          padding: 8px 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          font-size: 18px;
        }

        .save-button:hover {
          background: #45a049;
        }

        .task-item.completed {
          opacity: 0.5;
        }

        .completed .task-title {
          color: #999;
        }

        .completed .task-detail {
          color: #999;
        }

        .completed .due-date {
          color: #999;
        }

        .parent-info {
          margin-left: 8px;
          font-size: 16px;
          color: #666;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .task-header {
            padding: 8px 12px;
          }

          .task-main-row {
            gap: 4px;
          }

          .task-right {
            width: 100%;
            justify-content: space-between;
            margin-top: 4px;
          }

          .custom-checkbox {
            width: 22px;
            height: 22px;
          }

          .due-date {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

// Add a helper function to calculate progress
const calculateProgress = (tasks: Project[]) => {
  const completedTasks = tasks?.filter(task => task?.isCompleted).length;
  return tasks?.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;
};

interface BreadcrumbParams {
  areaId?: string;
  areaName?: string;
  topicId?: string;
  topicName?: string;
  parentId?: string;
  parentTitle?: string;
  projectId: string;
  projectTitle: string;
  isTask?: boolean;
}

const getBreadcrumbItems = (params: BreadcrumbParams): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [];
  
  // Always start with Home
  items.push({
    label: 'Home',
    path: '/',
    prefix: ''
  });
  
  if (params.areaName) {
    items.push({
      label: params.areaName,
      path: `/areas/${params.areaId}`,
      prefix: 'Area'
    });
  }

  if (params.topicName) {
    items.push({
      label: params.topicName,
      path: `/areas/${params.areaId}/topics/${params.topicId}`,
      prefix: 'Topic'
    });
  }

  if (params.parentTitle) {
    items.push({
      label: params.parentTitle,
      path: `/areas/${params.areaId}/topics/${params.topicId}/projects/${params.parentId}`,
      prefix: 'Project'
    });
  }

  items.push({
    label: params.projectTitle,
    path: `/areas/${params.areaId}/topics/${params.topicId}/projects/${params.projectId}`,
    prefix: params.isTask ? 'Task' : 'Project'
  });

  return items;
};

// Updated NoteTakingPage component
export default function NoteTakingPage({ project }: { project: Project }) {
  const router = useRouter();
  const [data, setData] = useState<Project>(project);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    details: '',
    tasks: []
  });

  const handleGeneralTaskToggle = async (taskId: string, newTask?: Project) => {
    // Optimistically update the UI
    setData(prev => ({
      ...prev,
      tasks: taskId === 'new' && newTask
        ? [...prev.tasks, newTask]
        : prev.tasks.map(task => 
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
          )
    }));

    // Send update to the server
    try {
      const response = await fetch(`/api/tasks/${taskId}/toggle`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert the optimistic update on error
      setData(prev => ({
        ...prev,
        tasks: prev.tasks.map(task => 
          task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        )
      }));
    }
  };

  const handleProjectTaskToggle = async (projectIndex: number, taskId: string, newTask?: Project) => {
    // Optimistically update the UI
    setData(prev => ({
      ...prev,
      subProjects: prev.subProjects?.map((project, i) => 
        i === projectIndex ? {
          ...project,
          tasks: taskId === 'new' && newTask
            ? [...project.tasks, newTask]
            : project.tasks.map(task => 
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
              )
        } : project
      )
    }));

    // Send update to the server
    try {
      const response = await fetch(`/api/tasks/${taskId}/toggle`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert the optimistic update on error
      setData(prev => ({
        ...prev,
        subProjects: prev.subProjects?.map((project, i) => 
          i === projectIndex ? {
            ...project,
            tasks: project.tasks.map(task => 
              task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
          } : project
        )
      }));
    }
  };

  const toggleProject = (projectIndex: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectIndex) 
        ? prev.filter(i => i !== projectIndex)
        : [...prev, projectIndex]
    );
  };

  const handleAddProject = () => {
    if (newProject.title) {
      setData(prev => ({
        ...prev,
        subProjects: [...prev.subProjects, { ...newProject as Project, tasks: [] }]
      }));
      setNewProject({ title: '', details: '', tasks: [] });
      setIsAddingProject(false);
    }
  };

  return (
    <div className="container">
      <Breadcrumb items={getBreadcrumbItems({
        areaId: router.query.areaId as string,
        areaName: areas.find(area => area.id === router.query.areaId)?.title,
        topicId: router.query.topicId as string,
        topicName: project.title,
        // topicId: project.topic?.id,
        // topicName: project.topic?.name,
        // parentId: project.parent?.id,
        // parentTitle: project.parent?.title,
        projectId: router.query.projectId as string,
        projectTitle: project.title,
      })} />
      <h1>{data.title}</h1>
      <div className="description">
        {data.dates?.scheduledDate && (
          <p>Scheduled for {new Date(data.dates.scheduledDate).toLocaleDateString()}</p>
        )}
        {data.dates?.dueDate && (
          <p>Due for {new Date(data.dates.dueDate).toLocaleDateString()}</p>
        )}
        <p>Detail</p>
        <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
      </div>

      <h2>Tasks</h2>
      <TaskList 
        tasks={data.tasks}
        onTaskToggle={handleGeneralTaskToggle}
      />

      <h2>Projects</h2>
      <div className="accordion-container">
        {data.subProjects?.map((project, index) => (
          <div key={index} className="accordion">
            <div 
              className="accordion-header"
              onClick={() => toggleProject(index)}
            >
              <div className="project-header">
                <div className="project-title-row">
                  <div className="title-with-icon">
                    <span className={`toggle-icon ${expandedProjects.includes(index) ? 'expanded' : ''}`}>
                      ▶
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="progress-text">{calculateProgress(project.tasks)}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateProgress(project.tasks)}%` }}
                  />
                </div>
                {project.dates?.dueDate && (
                  <div className="due-date">Due: {new Date(project.dates.dueDate).toLocaleDateString()}</div>
                )}
              </div>
            </div>
            <p className={`secondary-text ${expandedProjects.includes(index) ? 'expanded' : ''}`}
               dangerouslySetInnerHTML={{ __html: project.details }}>
            </p>
            <div className={`accordion-content ${expandedProjects.includes(index) ? 'expanded' : ''}`}>
              <h4>Tasks</h4>
              <TaskList 
                tasks={project.tasks} 
                onTaskToggle={(taskId) => handleProjectTaskToggle(index, taskId)}
              />
            </div>
          </div>
        ))}
      </div>

      {isAddingProject ? (
        <div className="new-project-form">
          <input
            type="text"
            placeholder="Project title"
            value={newProject.title}
            onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
            className="project-input"
          />
          <textarea
            placeholder="Project details (optional)"
            value={newProject.details}
            onChange={(e) => setNewProject(prev => ({ ...prev, detail: e.target.value }))}
            className="project-input"
            rows={4}
          />
          <div className="project-form-buttons">
            <button onClick={handleAddProject} className="save-button">Save</button>
            <button onClick={() => setIsAddingProject(false)} className="cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <button className="add-project-button" onClick={() => setIsAddingProject(true)}>
          <span className="plus-icon">+</span>
          Add Project
        </button>
      )}

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
        }

        h3 {
          font-size: 1.2rem;
          margin: 0;
        }

        .description {
          margin-bottom: 2rem;
          color: #666;
        }

        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .accordion {
          border: 1px solid #ddd;
          border-radius: 2px;
          background: white;
          width: 100%;
        }

        .accordion-header {
          padding: 1rem;
          cursor: pointer;
          user-select: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .accordion-header:hover {
          background: #f5f5f5;
        }

        .accordion-content {
          padding: 0 1rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
          opacity: 0;
        }

        .accordion-content.expanded {
          max-height: 2000px;
          padding: 1rem;
          opacity: 1;
        }

        .secondary-text {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
          opacity: 0;
        }

        .secondary-text.expanded {
          max-height: none;
          padding: 0 1rem;
          opacity: 1;
        }

        .secondary-text h3 {
          margin: 1rem 0;
          color: #333;
        }

        .secondary-text h4 {
          margin: 1rem 0;
          color: #444;
        }

        .secondary-text p {
          margin: 0.75rem 0;
          line-height: 1.5;
        }

        .secondary-text ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        .secondary-text li {
          margin: 0.25rem 0;
          line-height: 1.4;
        }

        .due-date {
          font-size: 0.9rem;
          color: #666;
        }

        .task-category {
          margin-bottom: 1.5rem;
        }

        .category-chip {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #eee;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        ul {
          margin: 0;
          padding-left: 1.5rem;
        }

        li {
          margin: 0.5rem 0;
        }

        .task-list {
          list-style: none;
          padding: 0;
        }

        .task-item {
          margin: 0.5rem 0;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .completed {
          text-decoration: line-through;
          color: #888;
        }

        .project-title-row, .task-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background-color: #eee;
          border-radius: 2px;
          margin: 8px 0;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #4CAF50;
          transition: width 0.3s ease;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-icon {
          display: inline-block;
          transition: transform 0.2s ease;
          font-size: 0.8rem;
          color: #666;
        }

        .toggle-icon.expanded {
          transform: rotate(90deg);
        }

        .accordion-header {
          cursor: pointer;
          user-select: none;
        }

        .accordion-header:hover {
          background: #f5f5f5;
        }

        .new-project-form {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: white;
        }

        .project-input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 2px;
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .project-input:focus {
          outline: none;
          border-color: #4CAF50;
        }

        .project-form-buttons {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .add-project-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: transparent;
          border: 2px dashed #ccc;
          border-radius: 4px;
          color: #666;
          cursor: pointer;
          width: 100%;
          font-size: 15px;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .add-project-button:hover {
          border-color: #4CAF50;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.05);
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { areaId, topicId, projectId } = context.query;

  if (!areaId || typeof areaId !== 'string' || !topicId || typeof topicId !== 'string' || !projectId || typeof projectId !== 'string') {
    return {
      notFound: true
    };
  }
  console.log('areas', areas.find(area => area.id === areaId));
  const initialProject = areas.find(area => area.id === areaId)?.subProjects.find(project => project.id === projectId);
  
  return {
    props: { project: initialProject }
  };
};
