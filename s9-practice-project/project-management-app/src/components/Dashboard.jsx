import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project }) =>
{
    // console.log("Dashboard", ref)
    return (
        <main className="grid justify-center w-full mt-4">
            {!project && <NoProjectSelected />}
            {project && <ProjectLayout project={project} />}
        </main>
    )
}
