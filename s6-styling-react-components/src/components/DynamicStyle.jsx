import { useState } from "react"


export default function DynamicStyle()
{
    const [color, setColor] = useState("");

    return (
        <section id="dynamic-styling">
            <h1 className={color ? `highlight-${color}` : ""}>Dynamic Styling with CSS classes</h1>
            <pre>
                <code>
                    &lt;h1 className=&#123;color ? `highlight-${color}` : ""&#125;&gt; Dynamic Styling with CSS classes &lt;/h1&gt;
                </code>
            </pre>
            <menu>
                <li>
                    <button onClick={() => setColor("green")}>Yes</button>
                </li>
                <li>
                    <button onClick={() => setColor("red")}>No</button>
                </li>
            </menu>
            <menu>
                <button onClick={() => setColor("")}>Reset</button>
            </menu>
        </section>
    )
}
