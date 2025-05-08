import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project, onAddProject, onCreateNewProjectButton, onCancel, onDelete, ref }) =>
{
    // console.log("Dashboard project", project)
    // console.log("Dashboard ref", ref)
    return (
        <main className="grid justify-center w-full pt-4 h-auto">
            {!project && <NoProjectSelected onCreateNewProjectButton={onCreateNewProjectButton} />}

            {
                project &&
                <ProjectLayout
                    project={project}
                    onAddProject={onAddProject}
                    onCancel={onCancel}
                    onDelete={onDelete}
                    ref={ref}
                />
            }
        </main>
    )
}
