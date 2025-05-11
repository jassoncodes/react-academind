import { useRef, useState } from "react";
import { AddButton } from "../AddButton"
import { TaskItem } from "./TaskItem"


export const Tasks = ({ tasks = undefined, onAddTask, onClearTask }) =>
{

    const newTaskRef = useRef();

    function handleAddTask()
    {
        const newTask = newTaskRef.current.value
        onAddTask(newTask)
        newTaskRef.current.value = ''
    }

    return (
        <section className="flex flex-col gap-4 my-4">
            <h3 className="header-2xl">Tasks</h3>
            <div className="flex justify-between place-items-center rounded-md">
                <input ref={newTaskRef} type="text" placeholder='Task description' className="w-8/12 px-2 py-5 h-9 rounded-md border-none" />
                <AddButton label="Add Task" onClick={handleAddTask} />
            </div>
            {
                tasks.length > 0 && <div className=" rounded-md">
                    <ul>
                        {tasks.map((task, index) => <TaskItem key={index} task={task} onClearTask={onClearTask} />)}
                    </ul>
                </div>
            }
            {
                tasks.length === 0 && <span className="font-semibold uppercase text-center mt-4">
                    No tasks found
                </span>
            }
        </section>
    )
}
