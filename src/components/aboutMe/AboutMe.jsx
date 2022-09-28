import React from 'react';
import style from './aboutMe.module.scss';
import {Skills} from "../skills/Skills";

export const AboutMe = () => {
    return (
        <div className={style.aboutMe} id="aboutMe">
            <h1 className={style.title}>About Me</h1>
            <div className={style.aboutMeContainer}>
                <div className={style.imgContainer}>
                    <div className={style.fonImg}>
                        <img src="assets/man.png" alt="hero" />
                    </div>
                </div>
                <div className={style.textContainer}>
                    <div className={style.fonText}>
                        <div className={style.textH2} >I'm Anton Novik</div>
                        <div className={style.textH3}>Front-end Developer</div>
                        <p className={style.textP}>
                            Front-End developer with experience in creating SPA using React, Redux, Typescript, HTML, CSS, JS. I'm always
                            looking forward to improve my expertise. I'm planing to study Node.js, because my next focus is to become a Full-Stack
                            Developer. And also I have interest to learn React Native. Usually I spend my leisure time on Codewars.
                        </p>
                        <a className={style.link} download={'cv.pdf'}>DOWNLOAD RESUME</a>
                        {/*<a href={MyPDF} className={style.link} download={'cv.pdf'}>DOWNLOAD RESUME</a>*/}
                    </div>
                </div>
            </div>
            <Skills/>
        </div>
    );
};


