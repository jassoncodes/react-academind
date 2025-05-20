

export const SideBarProjectItem = ({ selectedProject, project, onClickOnProject }) =>
{
    return (
        <li className={selectedProject === project.id ? "selectedProject" : "sideBarProjectItem"} onClick={() => onClickOnProject(project.id)}>
            <a>
                <span>
                    <i className="fas fa-briefcase"></i>
                </span>
                <span className="ml-2 text-sm tracking-wide">{project.title}</span>
            </a>
        </li>
    )
}
