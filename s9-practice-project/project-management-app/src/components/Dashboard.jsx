import { NoProjectSelected } from "./NoProjectSelected"
import { ProjectLayout } from "./Project/ProjectLayout"


export const Dashboard = ({ project, onAddProject, onAddTask, onClearTask, onCreateNewProjectButton, onCancel, onDelete, ref }) =>
{
    return (
        <main className="grid justify-center w-full pt-4 h-auto">
            {!project && <NoProjectSelected onCreateNewProjectButton={onCreateNewProjectButton} />}

            {
                project &&
                <ProjectLayout
                    project={project}
                    onAddProject={onAddProject}
                    onAddTask={onAddTask}
                    onClearTask={onClearTask}
                    onCancel={onCancel}
                    onDelete={onDelete}
                    ref={ref}
                />
            }
        </main>
    )
}
