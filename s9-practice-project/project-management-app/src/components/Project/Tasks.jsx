import { AddButton } from "../AddButton"
import { TaskItem } from "../TaskItem"


export const Tasks = () =>
{
    return (
        <>
            <section className="flex flex-col my-4">
                <h3 className="header-2xl">Tasks</h3>
                <div>
                    <div className="flex flex-wrap ali my-2 gap-6 place-items-center">
                        <input type="text" placeholder='Task description' className="w-8/12 px-2 h-9" />
                        <AddButton label="Add Task" />
                    </div>
                    <div className="bg-gray-100 rounded-md min-h-52">
                        <ul>
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
