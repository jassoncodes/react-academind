import React from 'react'

export default function InlineExercise()
{
    const [color, setColor] = React.useState("white");
    return (
        <section id='inline-exercise'>
            <h1 style={{ "color": color ? color : "white" }}>Vanilla CSS Inline Styles</h1>
            <pre>
                <code>
                    &lt;h1 style=&#123;&#123;"color": color ? color : "white"&#125;&#125;&gt; Vanilla CSS Inline Styles &lt;/h1&gt;
                </code>
            </pre>
            <menu>
                <li>
                    <button onClick={() => setColor("green")}>Turn Header Green</button>
                </li>
                <li>
                    <button onClick={() => setColor("red")}>Turn Header Red</button>
                </li>
            </menu>
            <menu>
                <button onClick={() => setColor("")}>Reset</button>
            </menu>
        </section>
    )
}
