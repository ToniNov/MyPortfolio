import React, {memo, useCallback, useEffect, useRef} from 'react';
import './intro.scss';
import { init } from 'ityped'

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
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Anton Novik</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#aboutMe">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
})
