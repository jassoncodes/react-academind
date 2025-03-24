import { useState } from "react";

export default function Player()
{
  // const [playerName, setPlayerName] = useState("Player");

  // const handleChange = (e) =>
  // {
  //   setPlayerName(e.target.value);
  // }

  // const handleClick = (e) =>
  // {
  //   console.log(e.target.value)
  // }

  const [enteredPlayerName, setEnteredPlayerName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event)
  {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value)
  }

  function handleClick()
  {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "Unknown entity"} entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
