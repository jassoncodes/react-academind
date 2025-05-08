import { useRef } from "react"
import { AddButton } from "../AddButton"
import { Tasks } from "./Tasks"


export const ProjectLayout = ({ project, onAddProject, onCancel, onDelete, ref }) =>
{
    const newProjectTitle = useRef();
    const newProjectDescription = useRef();

    function handleAddProject()
    {
        const newProject = {
            title: newProjectTitle.current.value,
            description: newProjectDescription.current.value,
            dueDate: new Date().toLocaleDateString('en-US'),
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
            onDelete(project) //**TODO: Check working */
        }
    }

    return (
        <div className="w-[48rem] p-10 mt-7 bg-neutral-200 rounded-md">

            {console.log("ProjectLayout project", project)}
            {console.log("ProjectLayout ref", ref.current)}

            <section className='flex flex-col gap-4 flex-grow border-b-2 border-b-gray-400 pb-4'>
                <div className='grid grid-cols-4 gap-4'>

                    {/* Project/New Project Header Section */}
                    <div className='col-span-4'>
                        <div className="flex justify-between">

                            <h3 className='header-2xl' >{project.title ? project.title : "New Project"}</h3>

                            {/* Delete/Cancel Project Button */}
                            <button className='dangerButton' onClick={handleCancel}>
                                {project.title ? "Delete" : "Cancel"}
                            </button>
                        </div>
                        {
                            !project.title && (
                                <input ref={newProjectTitle} type="text" placeholder="Project Title" className="h-12 p-4 mt-4 rounded-md w-full" />
                            )
                        }
                    </div>

                    {/* Due Date Control */}
                    {project.dueDate && <span className='text-gray-400 font-normal font-mono'>Due Date: {project.dueDate}</span>}

                </div>
                {/* Project Description Section */}
                {
                    project.description ? (
                        <p className="break-all">{project.description}</p>
                    ) : (
                        <textarea ref={newProjectDescription} name="description" id="description" placeholder="Description" className="resize-none w-full rounded-md p-4" ></textarea>
                    )
                }


                {/* Add project button */}
                {!project.title && <AddButton noIcon label="Add Project" onClick={handleAddProject} />}


            </section>

            {/* Tasks section */}
            {
                //**TODO: TASKS FEATURES
            }
            {console.log("project: ", project)}
            <Tasks tasks={project.tasks} />
        </div>
    )
}
