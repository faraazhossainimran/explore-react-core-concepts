import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);
    const addPlayers = () => {
        const newTeam = team +1;
        setTeam(newTeam);
    }
    const removePlayers = () => {
        // const newTeam = team - 1;
        setTeam( team - 1);
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        borderRadius: '15px', 
        padding: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayers}>Add players</button>
            <button onClick={removePlayers}>Remove players</button>
        </div>
    )
}