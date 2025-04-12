import { useRef, useState } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({ title, targetTime })
{
    const timer = useRef();
    const dialogRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // if time expires (timeRemaining <= 0)
    if (timeRemaining <= 0)
    {
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    function handleReset()
    {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () =>
    {
        timer.current = setInterval(() =>
        {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);
    }

    // if timer is stopped
    const handleStop = () =>
    {
        clearInterval(timer.current);
        dialogRef.current.open();
    };


    return (
        <>
            <ResultModal
                ref={dialogRef}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button ref={timer} onClick={timerIsActive ? handleStop : handleStart} >
                        {timerIsActive ? "Stop " : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}
