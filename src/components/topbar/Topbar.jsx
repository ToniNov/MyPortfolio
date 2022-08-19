import "./topbar.scss";
import {Person, Mail} from "@mui/icons-material";

export function Topbar ({menuOpen, setMenuOpen}) {
    return (
        <div className={`topbar + ${ menuOpen ? "active" : ""}`}>
            <div className="wrapper">
                <div className="left">
                    <a href= "#intro" className="logo">
                        Toni.
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"/>
                        <span className="line2"/>
                        <span className="line3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
