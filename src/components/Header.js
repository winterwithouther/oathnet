import React from "react";
import "../css/Header.css"

function Header() {
    return <div id="header-container">
        <h1 id="header-name">OathNet</h1>
        <div id="links-container">
            <a href="https://roblox.com">Home</a>
            <a>Price</a>
            <a>About</a>
        </div>
        <div id="cred-container">
            <button>Sign up</button>
            <button>Login</button>
        </div>
    </div>
}

export default Header