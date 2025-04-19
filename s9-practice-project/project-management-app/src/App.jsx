import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectLayout } from "./components/Project/ProjectLayout";
import { Sidebar } from "./components/Sidebar";

function App()
{
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <main className="flex flex-1 items-center justify-center">
        {/* <NoProjectSelected /> */}
        <ProjectLayout />
      </main>
    </div>
  );
}

export default App;
