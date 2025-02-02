

export default function Input({ richText, ...props })
{
    return (
        <>
            {
                richText ? <textarea {...props}></textarea> : <input {...props}></input>
            }
        </>
    )
}
