import React from 'react';

import './Exercise.css';

export default function Exercise()
{
    const clickHandler = () =>
    {
        console.log('Clicked!');
    };

    return (
        // replace Div for div
        <div>
            <h2>You're logged in!</h2>
            <p>Welcome to your user profile!</p>
            {/* replace onclick for onClick */}
            <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}