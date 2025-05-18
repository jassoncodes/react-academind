import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({ placeholder, textarea, ...props }, ref)
{
    return (
        textarea ?
            (
                <textarea ref={ref} {...props} placeholder={placeholder}></textarea>
            )
            : (
                <input ref={ref} placeholder={placeholder} {...props} />
            )
    );
});

export default Input