import style from './topbar.module.scss';
import {Person, Mail} from "@mui/icons-material";

export const Topbar = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={`${style.topbar + (menuOpen && '.active')}`}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <a href="#intro" className={style.logo}>Toni.</a>
                    <div className={style.itemContainer}>
                        <Person className={style.icon}/>
                        <span>+ 3424-0-4-2131</span>
                    </div>
                    <div className={style.itemContainer}>
                        <Mail className={style.icon}/>
                        <span>antoni@gmail.com</span>
                    </div>
                </div>
                <div className={style.right} >
                    <div className={style.hamburger}
                         onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={style.line1}/>
                        <span className={style.line2}/>
                        <span className={style.line3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
