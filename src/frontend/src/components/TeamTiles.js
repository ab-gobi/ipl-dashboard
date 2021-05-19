import React from 'react';
import './TeamTiles.scss';
import { Link } from 'react-router-dom';

export const TeamTiles =(props)=> {
    const teamName = props.teamName;
    return (
        <div className="TeamTiles">
           <Link to={`/teams/${teamName}`}> <h1>{teamName}</h1></Link>
        </div>
    )
}


