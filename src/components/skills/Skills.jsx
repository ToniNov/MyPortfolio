import React from 'react';
import './skills.scss';
import {CircularProgress} from "./circularProgress/CircularProgress";


export const Skills = () => {

    return (
        <div className="skill">
            <h1>My Skills</h1>
            <div className="item">
                <CircularProgress/>
            </div>
        </div>
    );
};
