import { useEffect, useRef, useState } from "react";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectLayout } from "./components/Project/ProjectLayout";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";

const projectItems = [
  {
    "id": 1,
    "title": "Project 1",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos qui blanditiis, ut voluptatum obcaecati repudiandae nostrum reprehenderit, fugiat suscipit quod non porro? Blanditiis libero, pariatur nemo quaerat accusantium quo accusamus!",
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

  const [projectList, setProjectList] = useState(projectItems);
  const [projectView, setProjectView] = useState();

  const projectRef = useRef();

  function handleClickAddButton()
  {
    setProjectView({
      title: "",
      description: "",
      dueDate: "",
      tasks: [],
    });
  }

  function handleClickOnProject(project)
  {
    setProjectView(project)
  };


  return (
    <div className="h-screen flex">
      <Sidebar projects={projectList} onClick={handleClickOnProject} onAddButton={handleClickAddButton} />
      <Dashboard project={projectView} />
    </div>
  );
}

export default App;
