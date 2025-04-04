import { useRef } from "react";

export default function Workout({ title, description, time, onComplete })
{
    const workoutTimer = useRef();
    function handleStartWorkout()
    {
        // Todo: Start timer
        workoutTimer.current = setTimeout(() =>
        {
            onComplete();
        }, time * 1000);
    }

    function handleStopWorkout()
    {
        // Todo: Stop timer
        clearTimeout(workoutTimer.current)
        onComplete();
    }

    return (
        <article className="workout">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <p>
                <button ref={workoutTimer} onClick={handleStartWorkout}>Start</button>
                <button ref={workoutTimer} onClick={handleStopWorkout}>Stop</button>
            </p>
        </article>
    );
}
