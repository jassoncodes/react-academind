import { Tasks } from "./Tasks"


export const ProjectLayout = () =>
{
    return (
        <>
            <div className="flex flex-col max-w-screen-md border rounded p-6">
                <div className='border-b-2 pb-4'>
                    <div className='grid grid-cols-4 items-center'>
                        <div className='col-span-3'>
                            <h3 className='header-2xl'>Project Title</h3>
                        </div>
                        <div className="col-span-1 place-self-end">
                            <button className='dangerButton'>
                                Delete
                            </button>
                        </div>
                        <span className='text-gray-400 italic font-light lowercase'>Due Date</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque officiis dolore harum necessitatibus iure, iste quis eligendi reprehenderit facilis labore voluptatum fugiat amet earum ut adipisci cum expedita fugit quam.</p>
                </div>
                <Tasks />
            </div>
        </>
    )
}
