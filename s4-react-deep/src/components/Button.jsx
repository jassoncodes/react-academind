import React from 'react'


//** My solution **/
export default function Button({ children, Icon, ...props })
{
    const mode = props.mode ? `${props.mode}-button` : "filled-button";
    const defaultMode = props.mode ? ` ${props.mode}-button` : " filled-button"
    const iconStyle = Icon ? "icon-button" : ""
    return (
        <>
            <button
                type='button'
                className={`button ${iconStyle}${defaultMode}`}
                {...props}
            >
                {Icon && (<span className='button-icon'>{<Icon />}</span>)}
                <span>{children}</span>
            </button>
        </>
    )
}


// Tutor solution
// export default function Button({ children, className, mode = "filled", Icon, ...props })
// {
//     let cssClasses = `button ${mode}-button`
//     if (Icon)
//     {
//         cssClasses += " icon-button"
//     }

//     if (className)
//     {
//         cssClasses += " " + className
//     }

//     return (
//         <button type="button" className={cssClasses} {...props}>
//             {Icon && (
//                 <span className="button-icon">{<Icon />}</span>
//             )}
//             <span>{children}</span>
//         </button>
//     )
// }