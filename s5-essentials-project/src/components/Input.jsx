

export default function Input({ label, ...props })
{

    return (
        <p>
            <label>{label}</label>
            <input required type="number" {...props} />
        </p>

    )
}
