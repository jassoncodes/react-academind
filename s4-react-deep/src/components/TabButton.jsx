

export default function TabButton({ ...props })
{
    return (
        <li>
            <button type="button" {...props}>
                {props.children}
            </button>
        </li>
    )
}
