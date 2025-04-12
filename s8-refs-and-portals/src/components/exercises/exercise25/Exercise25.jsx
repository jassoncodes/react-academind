import React from 'react'
import Toast from './Toast';

function Exercise25()
{
    const message = "Toast message";
    const [enrolled, setEnrolled] = React.useState(false);

    function handleEnrol()
    {
        // Todo: Show toast
        setEnrolled(true)

        setTimeout(() =>
        {
            // Todo: hide toast
            setEnrolled(false)
        }, 3000);
    }

    return (
        <div id="exercise25">
            {/* Todo: Render <Toast /> component (conditionally) here */}
            {enrolled && <Toast message={message} />}
            <article>
                <h2>React Course</h2>
                <p>
                    A course that teaches you React from the ground up and in great depth!
                </p>
                <button onClick={handleEnrol}>Enrol</button>
            </article>
        </div>
    );
}

export default Exercise25;
