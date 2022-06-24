import React from 'react';
import './aboutMe.scss';
import {Skills} from "../skills/Skills";

export const AboutMe = () => {
    return (
        <div className="aboutMe" id="aboutMe">
            <h1>About Me</h1>
            <div className="aboutMeContainer">
                <div className="imgContainer">
                    <div className="fonImg">
                        <img src="assets/man.png" alt="" />
                    </div>
                </div>
                <div className="textContainer">
                    <did className="fonText">
                        <h2>I'm Anton Novik</h2>
                        <h3>Front-end Developer</h3>
                        <p>
                            Front-End developer with experience in creating SPA using React, Redux, Typescript, HTML, CSS, JS. I'm always
                            looking forward to improve my expertise. I'm planing to study Node.js, because my next focus is to become a Full-Stack
                            Developer. And also I have interest to learn React Native. Usually I spend my leisure time on Codewars.
                        </p>
                        <button className="cvButton">Download CV</button>
                    </did>
                </div>
            </div>
            <Skills/>
        </div>
    );
};


