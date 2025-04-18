import React from 'react'

export const Sidebar = () =>
{
    return (
        //** Sidebar
        <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-200 h-full text-gray-600 transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-16 border-l-4 border-transparent">
                            <h3 className="ml-2 text-lg tracking-wide truncate text-gray-800 text-capitalize">Your Projects</h3>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
                            {/* <!-- Icono Home de Font Awesome --> */}
                            <span className="inline-flex justify-center items-center ml-4">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
                            {/* <!-- Icono Check Circle de Font Awesome --> */}
                            <span className="inline-flex justify-center items-center ml-4">
                                <i className="fas fa-check-circle"></i>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Autorizaciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
                            {/* <!-- Icono Users de Font Awesome --> */}
                            <span className="inline-flex justify-center items-center ml-4">
                                <i className="fas fa-users"></i>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
                            {/* <!-- Icono Store de Font Awesome --> */}
                            <span className="inline-flex justify-center items-center ml-4">
                                <i className="fas fa-store"></i>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Comercios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
                            {/* <!-- Icono Sign Out de Font Awesome --> */}
                            <span className="inline-flex justify-center items-center ml-4">
                                <i className="fas fa-sign-out-alt"></i>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>
                <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
        //** Sidebar

    )
}
