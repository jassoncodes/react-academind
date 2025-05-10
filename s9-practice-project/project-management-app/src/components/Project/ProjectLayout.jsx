import { useRef } from "react"
import { AddButton } from "../AddButton"
import { Tasks } from "./Tasks"



export const ProjectLayout = ({ project, onAddProject, onAddTask, onClearTask, onCancel, onDelete, ref }) =>
{
    const newProjectTitle = useRef();
    const newProjectDescription = useRef();
    const dateRef = useRef();

    function handleAddProject()
    {
        const newProject = {
            title: newProjectTitle.current.value,
            description: newProjectDescription.current.value,
            dueDate: dateRef.current.value,
            tasks: []
        };

        onAddProject(newProject);
    }

    function handleCancel()
    {
        if (!project)
        {
            onCancel()
        } else
        {
            onDelete(project)
        }
    }

    return (
        <div className="w-[48rem] p-10 mt-7 bg-neutral-200 rounded-md">
            <section className='flex flex-col gap-4 flex-grow border-b-2 border-b-gray-400 pb-4'>

                {/* Project/New Project Header Section */}
                <div>
                    <div className="flex justify-between">

                        {/* Project Title | New Project Label */}
                        <h3 className='header-2xl' >{project.title ? project.title : "New Project"}</h3>

                        {/* Delete/Cancel Project Button */}
                        <button className='dangerButton' onClick={handleCancel}>
                            {project.title ? "Delete" : "Cancel"}
                        </button>

                    </div>

                    {/* Project Title Input */}
                    {
                        !project.title && (
                            <input ref={newProjectTitle} type="text" placeholder="Project Title" className="p-4 mt-4 rounded-md w-full" />
                        )
                    }
                </div>

                {/* Due Date Control */}
                {!project.dueDate &&
                    <input type="date" name="dueDate" ref={dateRef} className="p-4 cursor-pointer rounded-md text-gray-400" />
                }

                {/* Due Date Label */}
                {project.dueDate && <span className='text-gray-400 font-normal font-mono col-span-4'>Due Date: {project.dueDate}</span>}

                {/* Project Description Section */}
                {
                    project.description ? (
                        <p className="break-all">{project.description}</p>
                    ) : (
                        <textarea ref={newProjectDescription} name="description" id="description" placeholder="Description" className="resize-none rounded-md p-4" ></textarea>
                    )
                }


                {/* Add project button */}
                {!project.title && <AddButton noIcon label="Add Project" onClick={handleAddProject} />}



            </section>

            {/* Tasks section */}
            {
                //**TODO: TASKS FEATURES
            }
            <Tasks tasks={project.tasks} onAddTask={onAddTask} onClearTask={onClearTask} />
        </div>
    )
}
