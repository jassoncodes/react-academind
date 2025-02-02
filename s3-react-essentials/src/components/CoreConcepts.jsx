
// React component functions only accept one parameter, typically called props, 
// which is an object containing the props passed to the component.
// You can destructure the props object to access the individual props directly.
export default function CoreConcepts(props)
{
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}
