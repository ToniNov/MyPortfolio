import {Topbar} from "./topbar/Topbar";
import {Menu} from "./menu/Menu";
import React from "react";

export const MenuContainer = () => {
    const [menuOpen,setMenuOpen] = React.useState(false);

    return (
        <>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </>
    )
}