import { Tasks } from "./Tasks"



export const Project = ({ project, onAddTask, onClearTask, onDeleteProject }) =>
{

    return (
        <main className="w-[48rem] p-10 m-auto mt-7 bg-neutral-200 rounded-md">
            <section className='flex flex-col gap-4 flex-grow border-b-2 border-b-gray-400 pb-4'>

                {/* Project/New Project Header Section */}
                <div>
                    <div className="flex justify-between">

                        {/* Project Title | New Project Label */}
                        <h3 className='header-2xl' >{project.title}</h3>

                        {/* Delete/Cancel Project Button */}
                        <button className='danger' onClick={onDeleteProject}>
                            Delete
                        </button>

                    </div>
                </div>

                {/* Due Date Label */}
                <span className='text-gray-400 font-normal font-mono col-span-4'>Due Date: {project.dueDate}</span>

                {/* Project Description Section */}
                <p className="break-all whitespace-pre-wrap">{project.description}</p>

                {/* Due Date Label */}
                <span className='text-gray-400 font-normal font-mono text-xs text-end col-span-4'>Created At: {project.createdAt.toString()}</span>

            </section>

            {/* Tasks section */}
            <Tasks tasks={project.tasks} onAddTask={onAddTask} onClearTask={onClearTask} />
        </main>
    )
}
