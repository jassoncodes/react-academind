

/**
 * Returns a section element with a title element
 * @prop {title} Sets the value for the h2 as title element 
 * @returns 
 */
export default function Section({ ...props })
{
    return (
        <section {...props}>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}
