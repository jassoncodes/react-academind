import { useState } from 'react';
import "./Exercise22.css"

import Workout from "./Workout";

const workouts = [
    {
        title: 'Pushups',
        description: 'Do 30 pushups',
        time: 1000 * 60 * 3,
    },
    {
        title: 'Squats',
        description: 'Do 30 squats',
        time: 1000 * 60 * 2,
    },
    {
        title: 'Pullups',
        description: 'Do 10 pullups',
        time: 1000 * 60 * 3,
    },
];

export default function Exercise22()
{
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    function handleWorkoutComplete(workoutTitle)
    {
        setCompletedWorkouts((prevCompletedWorkouts) => [
            ...prevCompletedWorkouts,
            workoutTitle,
        ]);
    }

    return (
        <main className='exercise22'>
            <section className='workouts'>
                <h2>Ref Exercise</h2>
                <p>Setup the timer feature for the workout component</p>
                <h2>Choose a workout</h2>
                <ul>
                    {workouts.map((workout) => (
                        <li key={workout.title}>
                            <Workout
                                {...workout}
                                onComplete={() => handleWorkoutComplete(workout.title)}
                            />
                        </li>
                    ))}
                </ul>
            </section>

            <section className='workouts'>
                <h2>Completed workouts</h2>
                <ul>
                    {completedWorkouts.map((workoutTitle, index) => (
                        <li key={index}>{workoutTitle}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}