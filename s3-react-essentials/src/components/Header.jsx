import reactCoreConcepts from '../assets/react-core-concepts.png';

export default function Header({ Title, Disclaimer })
{
    return (
        <header>
            <img src={reactCoreConcepts} alt="Stylized atom" />
            <h1>{Title}</h1>
            <p>
                {Disclaimer}
            </p>
        </header>
    )
}
