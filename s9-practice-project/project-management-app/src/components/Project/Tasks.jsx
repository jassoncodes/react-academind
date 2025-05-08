import { useRef, useState } from "react";
import { AddButton } from "../AddButton"
import { TaskItem } from "../TaskItem"


export const Tasks = ({ tasks = undefined, }) =>
{

    const task = useRef();

    function handleAddTask()
    {
        console.log(task.current.value)
    }

    return (
        <section className="flex flex-col gap-4 my-4">
            <h3 className="header-2xl">Tasks</h3>
            <div className="flex justify-between place-items-center rounded-md">
                <input ref={task} type="text" placeholder='Task description' className="w-8/12 px-2 py-5 h-9 rounded-md border-none" />
                <AddButton label="Add Task" onClick={handleAddTask} />
            </div>
            {tasks && <div className=" rounded-md">
                <ul>
                    {tasks.map((task, index) => <TaskItem key={index} task={task} />)}
                </ul>
            </div>}
        </section>
    )
}
