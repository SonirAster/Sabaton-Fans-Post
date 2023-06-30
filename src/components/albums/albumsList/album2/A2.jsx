import React from "react";
import styles from './../../AlbumsList.module.css';
import { NavLink } from "react-router-dom";

const A2 = () => {
    return (
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/uk/thumb/8/88/Primo_Victoria.jpg/250px-Primo_Victoria.jpg' />
            <div className={styles.AlbumTitle}>2005. Primo Victoria</div>
            <ol>
                <li><NavLink to='/album2/1'>Counterstrike</NavLink></li>
                <li><NavLink to='/album2/2'>Into the Fire</NavLink></li>
                <li><NavLink to='/album2/3'>Metal Machine</NavLink></li>
                <li><NavLink to='/album2/4'>Panzer Battalion</NavLink></li>
                <li><NavLink to='/album2/5'>Primo Victoria</NavLink></li>
                <li><NavLink to='/album2/6'>Purple Heart</NavLink></li>
                <li><NavLink to='/album2/7'>Reign of Terror</NavLink></li>
                <li><NavLink to='/album2/8'>Stalingrad</NavLink></li>
                <li><NavLink to='/album2/9'>Wolfpack</NavLink></li>
            </ol>
        </div>
    )
}

export default A2;