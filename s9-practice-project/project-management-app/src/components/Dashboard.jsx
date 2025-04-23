import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project }) =>
{
    return (
        <main className="flex flex-col max-w-screen m-auto">
            {!project && <NoProjectSelected />}
            {project && <ProjectLayout project={project} />}
        </main>
    )
}
