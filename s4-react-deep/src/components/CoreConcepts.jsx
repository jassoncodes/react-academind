import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts()
{
    return (

        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {
                    CORE_CONCEPTS.map((concept) => (
                        <li key={concept.title}>
                            <img src={concept.image} alt={concept.title} />
                            <h3>{concept.title}</h3>
                            <p>{concept.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
