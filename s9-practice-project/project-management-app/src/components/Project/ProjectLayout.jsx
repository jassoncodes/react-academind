import { Tasks } from "./Tasks"


export const ProjectLayout = ({ project }) =>
{
    return (
        <>
            <div className="max-w-screen-md border rounded p-6 m-6">
                <div className='border-b-2 p-4'>
                    <div className='grid grid-cols-4 items-center'>
                        <div className='col-span-3'>
                            <h3 className='header-2xl'>{project.title}</h3>
                        </div>
                        <div className="col-span-1 place-self-end">
                            <button className='dangerButton'>
                                Delete
                            </button>
                        </div>
                        <span className='text-gray-400 italic font-light lowercase'>{project.dueDate}</span>
                    </div>
                    <p>{project.description}</p>
                </div>
                <Tasks tasks={project.tasks} />
            </div>
        </>
    )
}
