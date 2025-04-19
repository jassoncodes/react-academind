import React from 'react'

export const AddProject = ({ ...props }) =>
{
    const defaultClass = "mt-2 px-4 py-2 place-self-center"

    const filledClassList = "bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    const outlinedClassList = "border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition`                                                                "

    const iconButtonFilled = "fas fa-plus-circle"
    const iconButtonOutlined = "fas fa-plus"

    const style = props.outlined ? outlinedClassList : filledClassList
    const iconStyle = props.outlined ? iconButtonOutlined : iconButtonFilled

    // const sm = props.small ? "w-"

    return (
        <button className={`${defaultClass} ${style} w-10/12`} {...props}>
            <i className={iconStyle}></i> Create a new project
        </button>
    )
}
