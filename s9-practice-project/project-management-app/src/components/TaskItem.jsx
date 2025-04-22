

export const TaskItem = () =>
{
    return (
        <>
            <li className="flex justify-between place-items-center transition list-none p-4 rounded-md ease-in-out duration-300 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
                <span>
                    Task description line
                </span>
                <button className="dangerButton w-28">Clear</button>
            </li>
        </>
    )
}
