import React, {memo, useEffect, useRef} from 'react';
import style from './intro.module.scss';
import {init} from 'ityped'
import down from '../../assets/down.png';

export const Intro = memo(() => {

    const textRef = useRef()
    const IntroStart = () => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Front-end Developer"],
        });
    }

    useEffect(() => {
        IntroStart()
    }, []);

    return (
        <div className={style.intro} id="intro">
            <div className={style.left}>
                <div className={style.imgContainer}>
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className={style.right}>
                <div className={style.wrapper}>
                    <h2>Hi There, I'm</h2>
                    <h1>Anton Novik</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#skills">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    );
})
