import { Tasks } from "./Tasks"


export const ProjectLayout = () =>
{
    return (
        <>
            <div className='max-w-screen-lg m-4 gap-2 border-b-2 p-5'>
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
                <Tasks />
            </div>
        </>
    )
}
