import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

function App()
{
  return (
    <>
      {/* <Sidebar /> */}
      <div className="h-96">
        <NoProjectSelected />
      </div>
    </>
  );
}

export default App;
