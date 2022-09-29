import style from "./topbar.module.scss";

export function Topbar ({menuOpen, setMenuOpen}) {
    return (
        <div className={menuOpen ? `${style.topbar} ${style.active} `: style.topbar }>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <a href= "#intro" className={style.logo}>
                        Toni.
                    </a>
                </div>
                <div className={style.right} >
                    <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={style.line1}/>
                        <span className={style.line2}/>
                        <span className={style.line3}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
