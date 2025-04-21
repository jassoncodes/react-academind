

export const ProjectItem = ({ projectName }) =>
{
    return (
        <li className='w-10/12 place-self-center'>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-600 transition text-gray-600 hover:text-gray-800 hover:rounded border-l-4 border-transparent rounded">
                <span className="inline-flex justify-center items-center ml-4">
                    <i class="fas fa-briefcase"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">{projectName}</span>
            </a>
        </li>
    )
}
