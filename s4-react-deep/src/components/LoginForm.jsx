
// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
    email: '',
    password: '',
    loggedIn: false,
};



export default function LoginForm({ onLogin })
{
    return (
        <div id="loginForm">
            <h1>User Login</h1>
            <p>
                <label>Email</label>
                {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
                <input type="email" />
            </p>

            <p>
                <label>Password</label>
                {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
                <input type="password" />
            </p>

            <p id="actions">
                <button onClick={onLogin}>Login</button>
            </p>
        </div>
    );
}
