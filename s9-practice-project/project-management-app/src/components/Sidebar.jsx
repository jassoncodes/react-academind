import { SideBarProjectItem } from './SideBarProjectItem'
import { AddButton } from './AddButton'


export const Sidebar = ({ onClickOnProject, onHome, onCreateNewProjectButton, projects, selectedProject }) =>
{
    return (
        <aside className="flex flex-col flex-shrink-0 left-0 w-64 hover:w-64 bg-neutral-200 text-gray-600 transition-all duration-300 border-none sidebar min-w-14 overflow-y-hidden">
            <div className="flex flex-col flex-grow gap-4 overflow-y-scroll">

                {/* <!-- Sidebar header --> */}
                <a className="mt-4 h-16 relative flex flex-row justify-center border-transparent cursor-pointer" onClick={onHome}>
                    <h3 className="header-2xl place-self-center">Your Projects</h3>
                </a>
                {
                    projects.length === 0 &&
                    <div className='flex flex-col gap-2 px-4 py-2 text-center'>
                        <span className='font-semibold uppercase'>no projects found</span>
                    </div>
                }
                {/* <!-- Sidebar header --> */}

                {/* Add New Project Button */}
                <AddButton outlined label="Create a new project" onClick={onCreateNewProjectButton} />

                {/* Project List Area */}
                {
                    projects &&
                    <ul className='flex flex-col w-60 p-4 self-center'>
                        {
                            projects.map((p) =>
                            {
                                return <SideBarProjectItem key={p.id} project={p} onClickOnProject={onClickOnProject} selectedProject={selectedProject} />
                            })
                        }
                    </ul>
                }
            </div>

            {/* Copyright */}
            <p className="mb-0 px-5 py-3 hidden md:block text-center text-xs">Copyright &copy; {new Date().getFullYear()}</p>
        </aside>
    )
}
