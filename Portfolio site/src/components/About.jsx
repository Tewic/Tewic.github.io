import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about-con'>
        <div id="About-me">
          <div>
            <h2 className="text-white text-5xl font-bold mb-2">About Me</h2>
          </div>
        </div>
        <div id="education-container" className="border border-white-600 rounded py-20">
            <div className="Uni-card">
                <h2 className="text-white font-bold mb-2">I graduated from Srinakharinwirot University</h2>
                <p>Bachelor of Arts (B.A.) English, May 2022
Minor: English and Information, <span className='Yellow'>GPA: 3.36 (2nd Honor)</span>
                </p>
            </div>
            <div>
              <img src="./img/Graduated.jpg" alt="me" className="border rounded"/>
            </div>
        </div>
    </div>
  )
}

export default About