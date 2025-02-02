import { COURSE_GOALS } from "../data";

export default function CourseGoal({ title, description })
{
    return (
        <section id="course-goals">
            <h2>Course Goals Exercise</h2>
            <ul>
                {
                    COURSE_GOALS.map((goal, index) => (
                        // <CourseGoal key={index} title={goal.title} description={goal.description} />
                        <li key={index}>
                            <h2>{goal.title}</h2>
                            <p>{goal.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
