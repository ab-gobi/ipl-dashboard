import { React, useEffect, useState } from 'react';
import './HomePage.scss';
import {TeamTiles} from '../components/TeamTiles.js';

export const HomePage=()=> {

    const[teams,setTeams] = useState([]);
    useEffect(
        ()=>{
            const fetchTeams = async() => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                console.log(data);
                setTeams(data);
            };
            fetchTeams();
        } , []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1>IPL DashBoard</h1>
            </div>
        <div className="team-grid">
            { teams.map( team => <TeamTiles teamName={team.teamName} /> ) }
            </div>
        </div>
    )
}



