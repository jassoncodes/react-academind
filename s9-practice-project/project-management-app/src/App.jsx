import { useEffect, useRef, useState } from "react";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectLayout } from "./components/Project/ProjectLayout";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";

const projectItems = [
  {
    "id": 1,
    "title": "Project 1",
    "description": "Lorem, ",
    "dueDate": "04/30/2025",
    "tasks": ["task 1", "task 2", "task 3", "task 1", "task 2", "task 3", "task 1", "task 2", "task 3"]
  },
  {
    "id": 2,
    "title": "Project 2",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos qui blanditiis, ut voluptatum obcaecati repudiandae nostrum reprehenderit, fugiat suscipit quod non porro? Blanditiis libero, pariatur nemo quaerat accusantium quo accusamus!",
    "dueDate": "04/30/2025",
    "tasks": ["task 1", "task 2", "task 3"]
  },
  {
    "id": 3,
    "title": "Project 3",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos qui blanditiis, ut voluptatum obcaecati repudiandae nostrum reprehenderit, fugiat suscipit quod non porro? Blanditiis libero, pariatur nemo quaerat accusantium quo accusamus!",
    "dueDate": "04/30/2025",
    "tasks": ["task 1", "task 2", "task 3"]
  },
]

function App()
{

  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState();

  const projectRef = useRef();

  /**
   * Open New Project form
   */
  function handleClickCreateNewProjectButton()
  {
    setProject({
      title: "",
      description: "",
      dueDate: "",
      tasks: [],
    });
    projectRef.current = (project);
  }

  function handleClickOnProject(project)
  {
    projectRef.current = project;
    setProject(project)
  };

  function handleCancel()
  {
    setProject();
  }

  function handleAddProject(project)
  {
    setProject(project)
    setProjectList((prev) => [project, ...projectList])
    projectRef.current = project
  }

  function handleAddTask(task)
  {
    const updatedProject = { ...project, tasks: [task, ...project.tasks] }
    setProject((prev) => updatedProject);
    setProjectList(
      projectList.map((p) =>
      {
        if (p.title === project.title && p.description === project.description)
        {
          return { ...p, tasks: [task, ...p.tasks] };
        }
        return p;
      }));
  }

  function handleClearTask(task)
  {
    const updatedTaskList = project.tasks.filter((t) => t !== task)

    const updatedProject = { ...project, tasks: updatedTaskList }
    setProject((prev) => updatedProject);
    setProjectList(
      projectList.map((p) =>
      {
        if (p.title === project.title && p.description === project.description)
        {
          return { ...p, tasks: [task, ...p.tasks] };
        }
        return p;
      }));

  }

  function handleDelete(project) 
  {
    const projectListUpdated = projectList.filter((p) => p.title != project.title)
    setProjectList((prev) => projectListUpdated)
    setProject();
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projectList}
        onClickOnProject={handleClickOnProject}
        onCreateNewProjectButton={handleClickCreateNewProjectButton}
        onHome={handleCancel}
      />
      <Dashboard
        project={project}
        onAddProject={handleAddProject}
        onAddTask={handleAddTask}
        onClearTask={handleClearTask}
        onCreateNewProjectButton={handleClickCreateNewProjectButton}
        onCancel={handleCancel}
        onDelete={handleDelete}
        ref={projectRef}
      />
    </div>
  );
}

export default App;
