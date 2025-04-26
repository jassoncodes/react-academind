import { useRef } from "react"
import { AddButton } from "../AddButton"
import { Tasks } from "./Tasks"


export const ProjectLayout = ({ project, onAddProject, onCancel, onDelete }) =>
{
    const newProjectTitle = useRef();
    const newProjectDescription = useRef();

    function addNewProject()
    {
        const newProject = {
            title: newProjectTitle.current.value,
            description: newProjectDescription.current.value,
            dueDate: new Date().toLocaleDateString('en-US'),
            "tasks": []
        };

        onAddProject(newProject);
    }

    function handleCancel()
    {
        if (!project.title)
        {
            onCancel()
        } else
        {
            onDelete(project)
        }
    }

    return (
        <div className="w-[48rem] p-4 mt-1">
            <div className='border-b-2 pb-5'>
                <div className='grid grid-cols-4'>

                    {/* Project/New Project Header Section */}
                    <div className='col-span-3'>
                        {
                            project.title ? (
                                <h3 className='header-2xl'>{project.title}</h3>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <h3 className='header-2xl'>New Project</h3>
                                    <input ref={newProjectTitle} type="text" placeholder="Project Title" className="h-12 p-4 rounded-md" />
                                </div>
                            )
                        }
                    </div>

                    {/* Delete/Cancel Project Button */}
                    {
                        //**Todo: Cancel when new project */
                    }
                    <div className="col-span-1 text-end">
                        <button className='dangerButton' onClick={handleCancel}>
                            {project.title ? "Delete" : "Cancel"}
                        </button>
                    </div>


                    {/* Due Date Control */}
                    {project.dueDate && <span className='text-gray-400 font-light font-mono'>Due Date: {project.dueDate}</span>}

                </div>

                {/* Project Description Section */}
                {
                    project.description ? (
                        <p>{project.description}</p>
                    ) : (
                        <textarea ref={newProjectDescription} name="description" id="description" placeholder="Description" className="resize-none w-full mt-4 rounded-md p-4" ></textarea>
                    )
                }


                {/* Add project button */}
                {!project.title && <AddButton noIcon label="Add Project" onClick={addNewProject} />}

            </div>

            {/* Tasks section */}
            {
                //**TODO: TASKS FEATURES
            }
            <Tasks tasks={project?.tasks || []} />
        </div>
    )
}
