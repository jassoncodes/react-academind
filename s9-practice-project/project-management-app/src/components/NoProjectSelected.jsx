import React from 'react'

export const NoProjectSelected = () =>
{
    return (
        <div className='flex flex-col justify-self-center place-items-center gap-2 m-2 w-auto box-border border-2 rounded-md p-5'>
            <img src="/logo.png" alt="" className='w-16' />
            <h3 className='text-gray-700 font-bold '>No Project Selected</h3>
            <span className='text-center'>Select a project or get started with a new one</span>
            <button>Create a new project</button>
        </div>
    )
}
