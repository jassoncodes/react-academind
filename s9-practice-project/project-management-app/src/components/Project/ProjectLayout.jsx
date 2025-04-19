import React from 'react'

export const ProjectLayout = () =>
{
    return (
        <div className='max-w-screen-lg min-h-80 m-4 gap-2 box-border border-2 rounded-md p-5'>
            <div className='grid grid-cols-4 items-center'>
                <div className='col-span-3'>
                    <h3 className='block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased'>Project Title</h3>
                </div>
                <div className="col-span-1 place-self-end">
                    <button className='mt-2 px-4 py-2 place-self-center border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition'>
                        Delete
                    </button>
                </div>
                <span>Due Date</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque officiis dolore harum necessitatibus iure, iste quis eligendi reprehenderit facilis labore voluptatum fugiat amet earum ut adipisci cum expedita fugit quam.</p>
        </div>
    )
}
