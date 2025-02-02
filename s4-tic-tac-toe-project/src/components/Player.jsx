import { useState } from "react"


export default function Player({ initialName, symbol, isActive, onChangeName })
{
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () =>
    {
        setIsEditing((editing) => !editing);
        if (isEditing)
        {
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (e) =>
    {
        setPlayerName(e.target.value);
    }

    let playerNameControl = <span className="player-name">{playerName}</span>
    if (isEditing)
    {
        playerNameControl = <input type="text" value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameControl}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>)
}
