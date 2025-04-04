import React from 'react'

const Input = React.forwardRef(function ({ ...props }, ref)
{
    return (
        <p className="control">
            <label>{props.label}</label>
            {/* Todo: "Forward" remaining props to <input> element */}
            <input ref={ref} {...props} />
        </p>
    );
})

export default Input;