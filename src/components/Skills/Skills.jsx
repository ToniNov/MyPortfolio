import React from 'react';
import style from './skills.module.scss';
import {Fade} from "react-awesome-reveal";
import {Skill} from "./Skill/Skill";

import react from '../../assets/skills/react.svg';
import redux from '../../assets/skills/redux.svg';
import js from '../../assets/skills/js.svg';
import ts from '../../assets/skills/ts.svg';
import restAPI from '../../assets/skills/restAPI.png';
import git from '../../assets/skills/git.svg';
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import sass from '../../assets/skills/sass.svg';


export const Skills = () => {

    return (
        <div className={style.skillsContainer} id="skills">

            <Fade delay={150}>

                <h1 className={style.title}>My Skills</h1>

                <div className={style.skillsWrapper}>
                    <Skill title={'REACT'} img={`url(${react})`}/>
                    <Skill title={'REDUX'} imgUrl={`url(${redux})`}/>
                    <Skill title={'TYPESCRIPT'} imgUrl={`url(${ts})`}/>
                    <Skill title={'JAVASCRIPT'} imgUrl={`url(${js})`}/>
                    <Skill title={'REST API'} imgUrl={`url(${restAPI})`}/>
                    <Skill title={'GIT'} imgUrl={`url(${git})`}/>
                    <Skill title={'HTML'} imgUrl={`url(${html})`}/>
                    <Skill title={'CSS'} imgUrl={`url(${css})`}/>
                    <Skill title={'SASS/SCSS'} imgUrl={`url(${sass})`}/>
                </div>

            </Fade>

        </div>
    );
};


