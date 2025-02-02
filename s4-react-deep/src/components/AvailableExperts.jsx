import Card from "./Card";


export default function AvailableExperts()
{
    return (
        <section>
            <h2>Available Experts (Children Prop Exercise)</h2>
            <Card title="Anthony Blake">
                <p>
                    Blake is a professor of Computer Science at the University of
                    Illinois.
                </p>
                <p>
                    <a href="mailto:blake@example.com">Email Anthony</a>
                </p>
            </Card>
            <Card title="Maria Miles">
                <p>
                    Maria is a professor of Computer Science at the University of
                    Illinois.
                </p>
                <p>
                    <a href="mailto:blake@example.com">Email Maria</a>
                </p>
            </Card>
        </section>
    )
}
