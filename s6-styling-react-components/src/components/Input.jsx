import styled from "styled-components";

export default function Input({ label, invalid, ...props })
{
    const inputClasses = `w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow`

    return (
        <p className="inputController">
            <label className={invalid ? "invalid" : undefined}>{label}</label>
            <input className={invalid ? "invalid" : undefined} {...props} />
        </p>
    )
}
