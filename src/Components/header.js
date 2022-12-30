import {React, useState} from 'react'
import './header.css'
import { FiCode,FiX,FiMenu } from "react-icons/fi";

function Header() {

    const [click,setClick] = useState(false)
    const HandleClick = () => setClick(!click)
    const CloseMoblieMenu = () => setClick(false)

  return (
    <div className='bg'>
        <div className='header'>
            <div className='Nav-con'>
                <div className='headerCon'>
                    <div className="logo">
                        <a href='#'>.TEWICH <FiCode/></a>
                    </div>
                    <ul className={click ? "menu active": "menu"}>
                        <li className='menuLink' onClick={CloseMoblieMenu}>
                            <a href='#'>Home</a>
                        </li>
                        <li className='menuLink' onClick={CloseMoblieMenu}>
                            <a href='#'>About</a>
                        </li>
                    </ul>
                    <div className="mobileMenu" onClick={HandleClick}>
                            {click ? (
                                <FiX/>
                            ):(
                                <FiMenu/>
                            )}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="CTAText">
                <FiCode className='FiCode'/>
                <h2>My name is Tewich Aursaksupa</h2>
                <p>I am aiming to maybe become a front end developer</p>
                <a href='#' className='CTA-BTN'>Get to know me</a>
            </div>
        </div>
    </div>
  )
}

export default Header