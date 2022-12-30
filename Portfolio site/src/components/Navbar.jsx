import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='sticky top-0 w-full'>
        <section id="nav">
            <div className="Container">
                <nav>
                    <a className="Logo">.<span className="T">T</span>EWICH</a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#skill">My skills</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
  )
}

export default Navbar