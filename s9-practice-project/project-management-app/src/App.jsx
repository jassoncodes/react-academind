import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { NewProject } from "./components/Project/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Project } from "./components/Project/Project";
import { SAMPLE_DATA } from "./data";
import { newId } from "./utils";

function App()
{

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [...SAMPLE_DATA]
  });

  function handleCreateNewProjectButton()
  {
    setProjectState((prev) =>
    {
      return {
        ...prev,
        selectedProjectId: null
      };
    });
  };

  function handleClickOnProject(projectId)
  {
    setProjectState((prev) =>
    {
      return {
        ...prev,
        selectedProjectId: projectId
      }
    })
  };

  function handleCancel()
  {
    setProjectState((prev) =>
    {
      return {
        ...prev,
        selectedProjectId: undefined
      };
    });
  };

  function handleSaveProject(project)
  {
    setProjectState((prev) =>
    {
      // generating newProjectId
      const newProjectId = newId()

      // spreading projectData and including projectId
      const newProject = {
        ...project,
        id: newProjectId
      };

      // updating state
      return {
        selectedProjectId: newProjectId,
        projects: [
          newProject,
          ...prev.projects
        ]
      };
    });

  };

  function handleDeleteProject() 
  {
    setProjectState((prev) =>
    {
      return {
        selectedProjectId: undefined,
        projects: prev.projects.filter((p) => p.id != prev.selectedProjectId)
      };
    });
  };

  function handleAddTask(task)
  {
    const newTask = {

      id: newId(),
      ...task
    }

    setProjectState((prev) =>
    {
      return {
        ...prev,
        projects: prev.projects.map((p) =>
        {
          return {
            ...p,
            tasks: [newTask, ...p.tasks]
          };
        })
      };
    });
  };

  function handleClearTask(taskId)
  {
    setProjectState((prev) =>
    {
      return {
        ...prev,
        projects: prev.projects.map((project) =>
        {
          if (project.id === prev.selectedProjectId)
          {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId)
            }
          }
          return project
        })
      }
    })
  };


  return (
    <div className="flex min-h-screen">
      <Sidebar
        projects={projectState.projects}
        selectedProject={projectState.selectedProjectId}
        onClickOnProject={handleClickOnProject}
        onCreateNewProjectButton={handleCreateNewProjectButton}
        onHome={handleCancel}
      />
      {
        projectState.selectedProjectId === undefined && <NoProjectSelected onCreateNewProjectButton={handleCreateNewProjectButton} />
      }
      {
        projectState.selectedProjectId === null && <NewProject onCancel={handleCancel} onSave={handleSaveProject} />
      }
      {
        (projectState.selectedProjectId !== undefined && projectState.selectedProjectId !== null) &&
        <Project
          project={projectState.projects.find(p => p.id === projectState.selectedProjectId)}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onClearTask={handleClearTask}
        />
      }
    </div>
  );
};

export default App;
