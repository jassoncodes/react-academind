## Refs & Portals

Advance DOM Access and Value Management

### Key concepts to learn:

- What refs are?
- How to use refs?
- What portals are?
- How to use portals?
- Accessing DOM Elements with Refs
- Manage values that shouldn't be a state, with Refs
- Exposing and Calling API Functions from Components
- Detaching DOM Rendering from JSX Structure

### Demo project to work:

Game where visitors can start different timer challenges with the goal of estimating when the time is up and stop the timer
early enough before it expires.

### Understanding Refs

#### Managing values with state

Using state to handle information that needs to be entered by the user and rendered would mean to have more than one state:

```jsx
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "Unknown entity"} entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

#### Managing values with refs
