import { useState } from 'react';
import TabButton from './TabButton'
import { EXAMPLES, TAB_BUTTONS } from '../data'
import Card from './Card';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples()
{
    const [selectedButton, setSelectedButton] = useState();

    let tabContent = selectedButton ? (
        <>
            <h3>{selectedButton.title}</h3>
            <p>{selectedButton.description}</p>
            <Card>
                <pre>
                    <code>
                        {selectedButton.code}
                    </code>
                </pre>
            </Card>
        </>
    ) : (
        <p>👆🏻 Select a Topic</p>
    )

    function handleSelect(button)
    {
        setSelectedButton(EXAMPLES[button.toLowerCase()]);
    }

    return (
        <Section id='examples' title="Examples">
            <Tabs
                buttons={TAB_BUTTONS.map((button, index) => (
                    <TabButton
                        key={index}
                        className={(selectedButton && selectedButton.title === button) ? "active" : ""}
                        onClick={() => handleSelect(button)}
                    >
                        {button}
                    </TabButton>
                ))
                }>
                <div id="tab-content">
                    {tabContent}
                </div>
            </Tabs>
        </Section>

    )
}
