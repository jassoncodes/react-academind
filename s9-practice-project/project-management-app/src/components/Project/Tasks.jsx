import { useRef, useState } from "react";
import { AddButton } from "../AddButton"
import { TaskItem } from "./TaskItem"
import { Modal } from "../Modal";


export const Tasks = ({ tasks = undefined, onAddTask, onClearTask }) =>
{
    const modal = useRef();
    const [newTask, setNewTask] = useState({
        taskDescription: ""
    })

    function handleAddTask()
    {
        if (newTask.taskDescription.trim() === "")
        {
            modal.current.open();
            return;
        }

        onAddTask({ taskDescription: newTask.taskDescription });
        setNewTask({ taskDescription: "" });
    }

    return (
        <>
            <Modal
                header="Invalid Input Data"
                description="Please verify the information registered"
                buttonLabel="OK"
                buttonClass="warning"
                ref={modal}
            />
            <section className="flex flex-col gap-4">
                <h3 className="header-2xl">Tasks</h3>
                <div className="flex justify-between place-items-center rounded-md">
                    <input
                        type="text"
                        placeholder='Task description'
                        className="w-8/12 px-2 py-5 h-9 rounded-md border-none"
                        onChange={(e) => setNewTask({ taskDescription: e.target.value })}
                        value={newTask.taskDescription}
                    />
                    <AddButton label="Add Task" onClick={handleAddTask} />
                </div>
                {
                    tasks.length === 0 && <span className="font-semibold uppercase text-center mt-4">
                        No tasks found
                    </span>
                }
                {
                    tasks.length > 0 && <div className=" rounded-md">
                        <ul>
                            {tasks.map((task, index) => <TaskItem key={task.id} task={task.taskDescription} onClearTask={() => onClearTask(task.id)} />)}
                        </ul>
                    </div>
                }
            </section>
        </>
    )
}
