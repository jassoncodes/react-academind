

export const TaskItem = () =>
{
    return (
        <>
            <li className="flex justify-between place-items-center transition list-none p-4 rounded-md ease-in-out duration-500 hover:bg-gray-300 cursor-pointer">
                <span>Task N</span>
                <button className="dangerButton">Clear</button>
            </li>
        </>
    )
}
