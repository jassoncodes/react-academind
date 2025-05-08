

export const ProjectItem = ({ project, onClickOnProject }) =>
{
    return (
        <li className='w-10/12 place-self-center cursor-pointer' onClick={() => onClickOnProject(project)}>
            <a className="relative flex flex-row items-center h-11 border-none border-transparent rounded focus:outline-none hover:bg-blue-600 transition text-gray-600 hover:text-gray-800 hover:rounded">
                <span className="inline-flex justify-center items-center ml-4">
                    <i className="fas fa-briefcase"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">{project.title}</span>
            </a>
        </li>
    )
}
