import React from 'react'
import Form from './Form';
import './Exercise24.css'

const Exercise24 = () =>
{
    const form = React.useRef();

    function handleRestart()
    {
        form.current.clear();
    }

    return (
        <div id="exercise24">
            <button onClick={handleRestart}>Restart</button>
            <Form ref={form} />
        </div>
    );
}

export default Exercise24;