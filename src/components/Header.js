import React from "react";
import "./Header.css";

import { FiAlignJustify, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Header () {
    return (
        <header className="Header">
            <nav className="Nav">
                <FiAlignJustify className="HeaderIcon" />
                <FiSearch className="HeaderIcon" />
            </nav>
            <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
            <nav className="Nav">
                <FiUser className="HeaderIcon" />
                <FiShoppingCart className="HeaderIcon" />
            </nav>
        </header>
    )
}