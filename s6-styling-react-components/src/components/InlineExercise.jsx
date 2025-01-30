import React from 'react'

export default function InlineExercise()
{
    const [color, setColor] = React.useState("white");
    return (

        <section id='innline-exercise'>
            <h1 style={{ "color": color ? color : "white" }}>Vanilla CSS Inline Styles</h1>
            <menu>
                <li>
                    <button onClick={() => setColor("green")}>Turn Header Green</button>
                </li>
                <li>
                    <button onClick={() => setColor("red")}>Turn Header Red</button>
                </li>
                <li>
                    <button onClick={() => setColor("")}>Reset</button>
                </li>
            </menu>
        </section>
    )
}
