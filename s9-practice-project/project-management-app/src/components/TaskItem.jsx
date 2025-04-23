

export const TaskItem = ({ task }) =>
{
    return (
        <>
            <li className="flex justify-between place-items-center transition list-none p-4 rounded-md ease-in-out duration-300 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
                <span>
                    {task}
                </span>
                <button className="dangerButton w-28">Clear</button>
            </li>
        </>
    )
}
