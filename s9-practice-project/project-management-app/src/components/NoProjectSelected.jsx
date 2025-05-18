import { AddButton } from './AddButton'


export const NoProjectSelected = ({ onCreateNewProjectButton }) =>
{
    return (
        <main className='flex flex-col m-auto place-self-center justify-center items-center gap-2 box-border border-2 rounded p-5 h-72 w-96' >
            <img src="/logo.png" alt="" className='w-16' />
            <h3 className='text-neutral-700 font-bold '>No Project Selected</h3>
            <span className='text-center pb-4'>Select a project or get started with a new one</span>
            <AddButton label="Create a new project" onClick={onCreateNewProjectButton} />
        </main>
    )
}
