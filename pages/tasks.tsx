import React, { useState, useEffect } from 'react';
import { Project } from 'libs/model';
import { areas } from 'libs/service';
import { TaskList } from './areas/[areaId]/topics/[topicId]/projects/[projectId]';

// Helper function to get all tasks from the data structure
const getAllTasks = () => {
  const tasks: (Project & { parentName?: string })[] = [];
  
  // Helper function to process tasks recursively
  const processTasks = (project: Project, parentPath: string) => {
    // Process tasks at current level
    if (project.tasks) {
      tasks.push(...project.tasks.map(task => ({
        ...task,
        parentName: parentPath
      })));

      // Process nested tasks
      project.tasks.forEach(task => {
        if (task.tasks) {
          processTasks(task, `${parentPath} > ${task.title}`);
        }
      });
    }
    
    // Process subProjects recursively
    project.subProjects?.forEach(subProject => {
      const newPath = parentPath ? `${parentPath} > ${subProject.title}` : subProject.title;
      processTasks(subProject, newPath);
    });
  };

  // Process each area as the top level
  areas.forEach(area => {
    // Add area-level tasks
    if (area.tasks) {
      tasks.push(...area.tasks.map(task => ({
        ...task,
        parentName: area.title
      })));
      
      // Process nested tasks within area's tasks
      area.tasks.forEach(task => {
        if (task.tasks) {
          processTasks(task, area.title);
        }
      });
    }
    
    // Process all nested projects starting at level 1
    area.subProjects?.forEach(project => {
      processTasks(project, `${area.title} > ${project.title}`);
    });
  });
  
  return tasks;
};

// Helper function to group tasks by their due date status
const groupTasksByDueDate = (tasks: Project[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  return {
    overdue: tasks?.filter(task => {
      const dueDate = new Date(task?.dates?.scheduledDate || '');
      return dueDate < yesterday;
    }).sort((a, b) => {
      const dateA = new Date(a?.dates?.scheduledDate || '');
      const dateB = new Date(b?.dates?.scheduledDate || '');
      return dateA.getTime() - dateB.getTime();
    }),
    yesterday: tasks?.filter(task => {
      const dueDate = new Date(task?.dates?.scheduledDate || '');
      return dueDate.getTime() === yesterday.getTime();
    }).sort((a, b) => {
      const dateA = new Date(a?.dates?.scheduledDate || '');
      const dateB = new Date(b?.dates?.scheduledDate || '');
      return dateA.getTime() - dateB.getTime();
    }),
    today: tasks?.filter(task => {
      const dueDate = new Date(task?.dates?.scheduledDate || '');
      return dueDate.getTime() === today.getTime();
    }).sort((a, b) => {
      const dateA = new Date(a?.dates?.scheduledDate || '');
      const dateB = new Date(b?.dates?.scheduledDate || '');
      return dateA.getTime() - dateB.getTime();
    }),
    tomorrow: tasks?.filter(task => {
      const dueDate = new Date(task?.dates?.scheduledDate || '');
      return dueDate.getTime() === tomorrow.getTime();
    }).sort((a, b) => {
      const dateA = new Date(a?.dates?.scheduledDate || '');
      const dateB = new Date(b?.dates?.scheduledDate || '');
      return dateA.getTime() - dateB.getTime();
    }),
    nextWeek: tasks?.filter(task => {
      const dueDate = new Date(task?.dates?.scheduledDate || '');
      return dueDate > tomorrow && dueDate <= nextWeek;
    }).sort((a, b) => {
      const dateA = new Date(a?.dates?.scheduledDate || '');
      const dateB = new Date(b?.dates?.scheduledDate || '');
      return dateA.getTime() - dateB.getTime();
    }),
  };
};

export default function TasksPage() {
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  
  // Replace single parentFilter with separate filters for each level
  const [areaFilter, setAreaFilter] = useState<string>('all');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [projectFilter, setProjectFilter] = useState<string>('all');
  
  // Separate states for options in each dropdown
  const [areas, setAreas] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [projects, setProjects] = useState<string[]>([]);

  const [groupedTasks, setGroupedTasks] = useState<{
    overdue: (Project & { parentName?: string })[];
    yesterday: (Project & { parentName?: string })[];
    today: (Project & { parentName?: string })[];
    tomorrow: (Project & { parentName?: string })[];
    nextWeek: (Project & { parentName?: string })[];
  }>({
    overdue: [],
    yesterday: [],
    today: [],
    tomorrow: [],
    nextWeek: [],
  });

  // Add state for collapsed sections
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    overdue: true,
    yesterday: false,
    today: false,
    tomorrow: false,
    nextWeek: true,
  });

  // Add toggle handler
  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Add clearAllFilters handler
  const clearAllFilters = () => {
    setFilterText('');
    setStatusFilter('all');
    setAreaFilter('all');
    setTopicFilter('all');
    setProjectFilter('all');
  };

  // Add state for filters panel collapse
  const [isFiltersPanelCollapsed, setIsFiltersPanelCollapsed] = useState(true);

  // Add function to count active filters
  const getActiveFiltersCount = () => {
    let count = 0;
    if (statusFilter !== 'all') count++;
    if (areaFilter !== 'all') count++;
    if (topicFilter !== 'all') count++;
    if (projectFilter !== 'all') count++;
    return count;
  };

  useEffect(() => {
    const tasks = getAllTasks();
    
    // Extract unique paths and split them into levels
    const uniquePaths = tasks
      .filter(task => task?.parentName)
      .map(task => task?.parentName?.split(' > ') || []);

    // Get unique values for each level
    setAreas(Array.from(new Set(uniquePaths.map(path => path[0]))).sort());
    setTopics(Array.from(new Set(uniquePaths.map(path => path[1]).filter(Boolean))).sort());
    setProjects(Array.from(new Set(uniquePaths.map(path => path[2]).filter(Boolean))).sort());

    // Filter tasks before grouping
    const filteredTasks = tasks?.filter(task => {
      // Apply status filter
      if (statusFilter === 'completed' && !task?.isCompleted) return false;
      if (statusFilter === 'incomplete' && task?.isCompleted) return false;

      // Apply hierarchical filters
      const pathParts = task?.parentName?.split(' > ') || [];
      if (areaFilter !== 'all' && pathParts[0] !== areaFilter) return false;
      if (topicFilter !== 'all' && pathParts[1] !== topicFilter) return false;
      if (projectFilter !== 'all' && pathParts[2] !== projectFilter) return false;

      // Apply text filter
      if (filterText) {
        return (
          task?.title?.toLowerCase().includes(filterText.toLowerCase()) ||
          task?.details?.toLowerCase().includes(filterText.toLowerCase())
        );
      }
      return true;
    });
    
    setGroupedTasks(groupTasksByDueDate(filteredTasks));
  }, [filterText, statusFilter, areaFilter, topicFilter, projectFilter]);

  // Reset dependent filters when parent filter changes
  const handleAreaChange = (value: string) => {
    setAreaFilter(value);
    setTopicFilter('all');
    setProjectFilter('all');
  };

  const handleTopicChange = (value: string) => {
    setTopicFilter(value);
    setProjectFilter('all');
  };

  const handleTaskToggle = (taskId: string) => {
    // Update task completion status across all groups
    setGroupedTasks(prev => {
      const updateTasks = (tasks: Project[]) =>
        tasks.map(task =>
          task.id === taskId ? { ...task, isCompleted: !task?.isCompleted } : task
        );

      return {
        overdue: updateTasks(prev.overdue),
        yesterday: updateTasks(prev.yesterday),
        today: updateTasks(prev.today),
        tomorrow: updateTasks(prev.tomorrow),
        nextWeek: updateTasks(prev.nextWeek),
      };
    });
  };

  return (
    <div className="container">
      <h1>Tasks</h1>

      {/* Search moved outside filters */}
      <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Search tasks..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filters-panel">
        <div className="filters-header">
          <div 
            className="filters-title"
            onClick={() => setIsFiltersPanelCollapsed(!isFiltersPanelCollapsed)}
          >
            <h2>Filters</h2>
            {getActiveFiltersCount() > 0 && (
              <span className="active-filters-badge">
                {getActiveFiltersCount()}
              </span>
            )}
            <span className="collapse-icon">{isFiltersPanelCollapsed ? '▼' : '▲'}</span>
          </div>
          {getActiveFiltersCount() > 0 && (
            <button 
              onClick={clearAllFilters}
              className="clear-filters-btn"
            >
              Clear Filters
            </button>
          )}
        </div>

        {!isFiltersPanelCollapsed && (
          <div className="filters-grid">
            {/* Status filter */}
            <div className="filter-group">
              <label>Status</label>
              <div className="status-options">
                <label className="status-option">
                  <input
                    type="radio"
                    name="status"
                    value="all"
                    checked={statusFilter === 'all'}
                    onChange={() => setStatusFilter('all')}
                  />
                  <span>All</span>
                </label>
                <label className="status-option">
                  <input
                    type="radio"
                    name="status"
                    value="completed"
                    checked={statusFilter === 'completed'}
                    onChange={() => setStatusFilter('completed')}
                  />
                  <span>Completed</span>
                </label>
                <label className="status-option">
                  <input
                    type="radio"
                    name="status"
                    value="incomplete"
                    checked={statusFilter === 'incomplete'}
                    onChange={() => setStatusFilter('incomplete')}
                  />
                  <span>Incomplete</span>
                </label>
              </div>
            </div>

            {/* Hierarchical filters */}
            <div className="filter-group">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                value={areaFilter}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Areas</option>
                {areas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="topic">Topic</label>
              <select
                id="topic"
                value={topicFilter}
                onChange={(e) => handleTopicChange(e.target.value)}
                className="filter-select"
                disabled={areaFilter === 'all'}
              >
                <option value="all">All Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="project">Project</label>
              <select
                id="project"
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
                className="filter-select"
                disabled={topicFilter === 'all'}
              >
                <option value="all">All Projects</option>
                {projects.map((project) => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {groupedTasks.overdue.length > 0 && (
        <section>
          <h2 
            className="section-header overdue" 
            onClick={() => toggleSection('overdue')}
            style={{ cursor: 'pointer' }}
          >
            Overdue ({groupedTasks.overdue.length}) {collapsedSections.overdue ? '▼' : '▲'}
          </h2>
          {!collapsedSections.overdue && (
            <TaskList
              tasks={groupedTasks.overdue}
              onTaskToggle={handleTaskToggle}
              showParent={true}
              defaultExpanded={false}
            />
          )}
        </section>
      )}

      {groupedTasks.yesterday.length > 0 && (
        <section>
          <h2 className="section-header">Yesterday ({groupedTasks.yesterday.length})</h2>
          <TaskList
            tasks={groupedTasks.yesterday}
            onTaskToggle={handleTaskToggle}
            showParent={true}
            defaultExpanded={false}
          />
        </section>
      )}

      {groupedTasks.today.length > 0 && (
        <section>
          <h2 className="section-header today">Today ({groupedTasks.today.length})</h2>
          <TaskList
            tasks={groupedTasks.today}
            onTaskToggle={handleTaskToggle}
            showParent={true}
            defaultExpanded={true}
          />
        </section>
      )}

      {groupedTasks.tomorrow.length > 0 && (
        <section>
          <h2 className="section-header">Tomorrow ({groupedTasks.tomorrow.length})</h2>
          <TaskList
            tasks={groupedTasks.tomorrow}
            onTaskToggle={handleTaskToggle}
            showParent={true}
            defaultExpanded={false}
          />
        </section>
      )}

      {groupedTasks.nextWeek.length > 0 && (
        <section>
          <h2
            className="section-header"
            onClick={() => setCollapsedSections({
              ...collapsedSections,
              nextWeek: !collapsedSections.nextWeek
            })}
          >
            Next 7 Days ({groupedTasks.nextWeek.length}) {collapsedSections.nextWeek ? '▼' : '▲'}
          </h2>
          {!collapsedSections.nextWeek && (
            <TaskList
              tasks={groupedTasks.nextWeek}
              onTaskToggle={handleTaskToggle}
              showParent={true}
              defaultExpanded={false}
            />
          )}
        </section>
      )}

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 24px;
          font-size: 16px;
        }

        h1 {
          margin-bottom: 32px;
          font-size: 2.5rem;
        }

        section {
          margin-bottom: 32px;
        }

        .section-header {
          font-size: 2rem;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #eee;
          user-select: none; /* Prevent text selection when clicking */
          display: flex;
          justify-content: space-between;
        }

        .section-header.overdue {
          color: #dc3545;
        }

        .section-header.today {
          color: #28a745;
        }

        .search-container {
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 1rem;
          border: 2px solid #dee2e6;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
        }

        .filters-panel {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 32px;
        }

        .filters-header {
          cursor: pointer;
          user-select: none;
        }

        .filters-title {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .active-filters-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #007bff;
          color: white;
          border-radius: 999px;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .collapse-icon {
          font-size: 0.875rem;
          color: #6c757d;
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: ${isFiltersPanelCollapsed ? '0' : '20px'};
        }

        .clear-filters-btn {
          padding: 6px 12px;
          background-color: white;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clear-filters-btn:hover {
          background-color: #e9ecef;
        }

        .filters-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .filter-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #495057;
        }

        .filter-input,
        .filter-select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.875rem;
          background-color: white;
          transition: border-color 0.15s ease-in-out;
        }

        .filter-input:focus,
        .filter-select:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 0 1px rgba(0,123,255,0.25);
        }

        .filter-select:disabled {
          background-color: #e9ecef;
          cursor: not-allowed;
        }

        .status-options {
          display: flex;
          gap: 16px;
          padding: 8px;
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 4px;
        }

        .status-option {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .status-option input {
          margin: 0;
        }

        @media (max-width: 768px) {
          .filters-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
