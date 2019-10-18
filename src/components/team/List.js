import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamsList(props) {
    if(!props.teams) return 'Loading'

    return <ul>
        {props.teams.map(team => {
            return <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>
        })}
    </ul>
}