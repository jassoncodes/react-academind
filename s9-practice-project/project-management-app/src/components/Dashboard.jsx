import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project, onAddButon, onAddProject, onCancel, onDelete }) =>
{
    // console.log("Dashboard", ref)
    return (
        <main className="grid justify-center w-full pt-4 h-auto">
            {!project && <NoProjectSelected onAddButon={onAddButon} />}
            {project && <ProjectLayout project={project} onAddProject={onAddProject} onCancel={onCancel} onDelete={onDelete} />}
        </main>
    )
}
