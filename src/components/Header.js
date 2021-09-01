import React from 'react';
import logo from "../assets/logo.svg";
import "../scss/_header.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Maker landing page logo" />
            </div>
        </header>
    )
}

export default Header
