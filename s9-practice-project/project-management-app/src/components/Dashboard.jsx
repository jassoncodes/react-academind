import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project, onAddButon, onAddProject, onCancel, onDelete }) =>
{
    // console.log("Dashboard", ref)
    return (
        <main className="grid justify-center w-full mt-4">
            {!project && <NoProjectSelected onAddButon={onAddButon} />}
            {project && <ProjectLayout project={project} onAddProject={onAddProject} onCancel={onCancel} onDelete={onDelete} />}
        </main>
    )
}
