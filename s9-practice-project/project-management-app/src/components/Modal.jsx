import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export const Modal = forwardRef(function Modal({ header, description, buttonLabel, buttonClass = "secondary" }, ref)
{

    const dialogStyle = 'flex flex-col p-4 gap-4 place-content-center text-center border-2 w-96 h-48 rounded border-neutral-300 bg-neutral-100';
    const buttonStyle = `${buttonClass} min-w-40`
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open()
        {
            dialog.current.showModal();
        },
    }));

    return createPortal(
        <dialog ref={dialog} className='rounded backdrop:bg-stone-900/90 shadow-md' role='dialog' aria-modal>
            <div className={dialogStyle}>
                <span className='header-2xl'>{header}</span>
                <span>{description}</span>
                <form method='dialog'>
                    <button className={buttonStyle}>{buttonLabel}</button>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});


