import React, { useRef } from 'react'
import Input from '../Input.jsx';
import { Modal } from '../Modal.jsx';


export const NewProject = ({ onSave, onCancel, modalRef }) =>
{
    const projectTitle = useRef();
    const dueDate = useRef();
    const projectDescription = useRef();
    const modal = useRef();

    const formattedDate = (date) =>
    {
        return new Date(date).toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'long'
        });
    };

    function handleSave()
    {
        if (projectTitle.current.value.trim() === '' ||
            projectDescription.current.value.trim() === '' ||
            dueDate.current.value.trim() === ''
        )
        {
            modal.current.open();
            return;
        }

        onSave({
            title: projectTitle.current.value,
            description: projectDescription.current.value,
            dueDate: formattedDate(dueDate.current.value),
            tasks: []
        });

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
            <div className="w-[48rem] m-auto h-fit p-10 bg-neutral-200 rounded-md">
                <section className='flex flex-col gap-4 flex-grow'>

                    {/* New Project Header Section */}
                    <div className="flex justify-between items-center">

                        {/* Project Title | New Project Label */}
                        <h3 className='header-2xl' >New Project</h3>

                        {/* Save/Cancel Controls */}
                        <div className='flex gap-4'>
                            {/* Cancel Button */}
                            <button className='primary' onClick={handleSave}>
                                Save
                            </button>

                            {/* Save Button */}
                            <button className='secondary' onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>

                    <Input ref={projectTitle} placeholder="Projec Title" className="p-4 mt-4 rounded-md w-full" />
                    <Input ref={projectDescription} textarea placeholder="Description" className="resize-none rounded-md p-4" />
                    <Input ref={dueDate} type="date" className="p-4 cursor-pointer rounded-md" />

                </section>
            </div>
        </>
    )
}
