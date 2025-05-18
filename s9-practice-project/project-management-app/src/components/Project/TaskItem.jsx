import { useRef } from "react"


export const TaskItem = ({ task, onClearTask }) =>
{
    const taskRef = useRef();

    function handleClearTask()
    {
        onClearTask(taskRef.current.innerText)
    }

    return (
        <>
            <li className="flex justify-between place-items-center transition list-none p-4 rounded-md ease-in-out duration-300 hover:bg-gray-300 hover:rounded-lg cursor-pointer">
                <span ref={taskRef}>
                    {task}
                </span>
                <button className="danger w-28" onClick={handleClearTask}>Clear</button>
            </li>
        </>
    )
}
