import React from 'react';
import style from './menu.module.scss';

export const Menu = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={menuOpen ? `${style.menu} ${style.active}` : style.menu}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#works">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    );
};
