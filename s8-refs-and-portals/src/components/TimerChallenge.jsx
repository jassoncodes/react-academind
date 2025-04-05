import { useRef, useState } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({ title, targetTime })
{
    const timer = useRef();
    const dialogRef = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const handleStart = () =>
    {
        timer.current = setTimeout(() =>
        {
            setTimerExpired(true);
            dialogRef.current.open();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handleStop = () =>
    {
        clearTimeout(timer.current);
        // setTimerStarted(false);
        // setTimerExpired(false);
    };


    return (
        <>
            <ResultModal targetTime={targetTime} result={"Lost"} ref={dialogRef} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button ref={timer} onClick={timerStarted ? handleStop : handleStart} >
                        {timerStarted ? "Stop " : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}
