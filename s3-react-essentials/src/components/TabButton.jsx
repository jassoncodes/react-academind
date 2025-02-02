

export default function TabButton({ children, onSelectButtonTab, isActive })
{

    return (
        <li>
            <button onClick={onSelectButtonTab} className={isActive}>
                {children}
            </button>
        </li>
    )
}
