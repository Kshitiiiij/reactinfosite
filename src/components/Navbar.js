import React from "react"
import Reactlogo from "../Images/logo192.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Reactlogo} className='nav--icon'></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}