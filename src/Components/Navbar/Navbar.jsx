import React, { useRef, useState } from 'react'
import { navMenus } from "../export"
import { NavLink } from 'react-router-dom'

import "./style/navbar.css"

export default function Navbar() {
    const [bar, setBar] = useState(false)
    const barEl = useRef()
    window.addEventListener("scroll", () => {
        setBar(false)
    })
    const clicking = () => {
        setBar(false)
    }
    return (
        <div className="navbarContainer">
            <div className='navbarContent' id='content'>
                <img src={require("../../img/LOGO.png")} alt="logoPng" />
                <ul style={bar ? {height: "350px"} : {height: "0px"}}>
                    {
                        navMenus.map((item, index) => (
                            <li key={index}><NavLink onClick={clicking} to={item.to}>{item.name}</NavLink></li>
                        ))
                    }
                </ul>
                <div className="navBtns">
                    <a href={"/"} className="navBtn">Get Started </a>
                    <div onClick={() => setBar(!bar)} ref={barEl} className="bar">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
