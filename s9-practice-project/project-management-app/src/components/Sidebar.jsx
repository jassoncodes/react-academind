import React from 'react'
import { ProjectItem } from './ProjectItem'
import { AddProject } from './AddProject'

export const Sidebar = () =>
{
    return (
        //** Sidebar
        <aside className="flex flex-col flex-shrink-0 left-0 w-64 hover:w-64 bg-gray-200 h-full text-gray-600 transition-all duration-300 border-none sidebar min-w-14">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    {/* Sidebar header */}
                    <li>
                        <a href="#" className="h-16 relative flex flex-row justify-center border-transparent">
                            <h3 className="text-3xl leading-snug font-semibold antialiased tracking-wide truncate text-gray-800 text-capitalize place-self-center">Your Projects</h3>
                        </a>
                    </li>
                    <AddProject outlined />
                    <ProjectItem projectName="Project 1" />
                    <ProjectItem projectName="Project 2" />
                    <ProjectItem projectName="Project 3" />
                </ul>
                <p className="mb-0 px-5 py-3 hidden md:block text-center text-xs">Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </aside>
        //** Sidebar

    )
}
