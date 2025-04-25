import { Tasks } from "./Tasks"


export const ProjectLayout = ({ project }) =>
{
    return (
        <>
            <div className="max-w-5xl w-screen p-4 m-6">
                <div className='border-b-2 pb-5'>
                    <div className='grid grid-cols-4 items-center'>
                        <div className='col-span-3'>
                            {
                                project.title ? (
                                    <h3 className='header-2xl'>{project.title}</h3>
                                ) : (
                                    <input type="text" placeholder="Project Title" />
                                )
                            }
                        </div>
                        <div className="col-span-1 place-self-end">
                            <button className='dangerButton'>
                                Delete
                            </button>
                        </div>
                        <span className='text-gray-400 italic font-light lowercase'>{project.dueDate}</span>
                    </div>
                    {
                        project.description ? (
                            <p>{project.description}</p>
                        ) : (
                            <textarea name="description" id="description" placeholder="Description" className="resize-none" ></textarea>
                        )
                    }
                </div>
                <Tasks tasks={project?.tasks || []} />
            </div>
        </>
    )
}
