import React from 'react'
import About from './About'
import Previous from './Previous-w'
import "./Main.css"
import Skill from './Skill'

function Main() {
  return (
    <div>
        <section id="Main">
            <div className="Detail">
                <div className="detail-text">
                    <h1>Hi! I am <span className="T">Tewich</span> Aursaksupa</h1>
                    <p>This is my portfolio website</p>
                    <a className="Contact" href="mailto:Tewich.Aursak@gmail.com">Contact Me</a>
                </div>
            </div>
        </section>
        <section id="About">
          <About/>
          <Previous/>
          <section id="skill">
            <Skill/>
          </section>
        </section>
    </div>
  )
}

export default Main