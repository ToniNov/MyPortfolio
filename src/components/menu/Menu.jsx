import React from 'react';
import './menu.scss';

export const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#aboutMe">About Me</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    );
};
