import { ProjectItem } from './ProjectItem'
import { AddButton } from './AddButton'


export const Sidebar = ({ onClick, onHome, onAddButton, projects }) =>
{
    return (
        //** Sidebar
        <aside className="flex flex-col flex-shrink-0 left-0 w-64 hover:w-64 bg-neutral-200 h-full text-gray-600 transition-all duration-300 border-none sidebar min-w-14">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col flex-grow">
                <a className="mt-4 h-16 relative flex flex-row justify-center border-transparent cursor-pointer" onClick={onHome}>
                    <h3 className="header-2xl place-self-center">Your Projects</h3>
                </a>

                {/* Sidebar header */}

                {
                    projects.length === 0 &&
                    <div className='flex flex-col gap-2 px-4 py-2 text-center'>
                        <span className='font-semibold uppercase'>no projects found</span>
                    </div>
                }
                <AddButton outlined label="Create a new project" onClick={onAddButton} />
                {
                    projects &&
                    <section>
                        <ul className="flex flex-grow flex-col py-4 space-y-1">
                            {
                                projects.map((p) =>
                                {
                                    return <ProjectItem key={p.title} project={p} onClick={onClick} />
                                })
                            }
                        </ul>
                    </section>
                }
            </div>
            <p className="mb-0 px-5 py-3 hidden md:block text-center text-xs">Copyright &copy; {new Date().getFullYear()}</p>
        </aside>
        //** Sidebar

    )
}
