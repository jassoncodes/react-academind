import reactCoreConcepts from '../assets/react-core-concepts.png';
import { REACT_DESCRIPTIONS } from '../data';
import { getRandomIndex } from '../utils';


export default function Header()
{
    const headerDisclaimer = `${REACT_DESCRIPTIONS[getRandomIndex(2)]} React concepts you will need for almost any app you are going to build!`;
    const headerTitle = "React Essentials";

    return (
        <header>
            <img src={reactCoreConcepts} alt="Stylized atom" />
            <h1>{headerTitle}</h1>
            <p>
                {headerDisclaimer}
            </p>
        </header>
    )
}
