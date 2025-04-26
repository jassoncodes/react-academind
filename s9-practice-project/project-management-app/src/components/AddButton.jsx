

export const AddButton = ({ onClick, label, outlined, noIcon }) =>
{

    const defaultClass = "px-4 py-2 place-self-center"

    const filledClassList = "bg-blue-500 text-white border-none rounded hover:bg-blue-600 transition"
    const outlinedClassList = "border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition`                                                                "

    const iconButtonFilled = "fas fa-plus-circle"
    const iconButtonOutlined = "fas fa-plus"

    const style = outlined ? outlinedClassList : filledClassList
    const iconStyle = outlined ? iconButtonOutlined : iconButtonFilled

    return (
        <button className={`${defaultClass} ${style} w-52`} onClick={onClick} id="newProject">
            {!noIcon && <i className={iconStyle}></i>} {label}
        </button>
    )
}
