import React from 'react'

function Skill() {
  return (
    <div className='Skill-con'>
        <div id="About-me">
          <div>
            <h2 className="text-white text-3xl font-bold mb-1 uppercase">My Skills</h2>
          </div>
        </div>
        <div id="Prev-container" className="border border-white-600 rounded">
            <div className="Pre-card">
                <ul className='text-left'>
                    <li className='mb-3'><span className='font-bold'>Languages</span>: Fluent in Thai, Advance in English <span className='Yellow font-bold'>(TOEIC = 975)</span></li>
                    <li className='mb-3'><span className='font-bold'>Computer</span>: Microsoft Excel, Word, PowerPoint</li>
                    <li><span className='font-bold'>Programming language</span>: JavaScript, HTML & CSS</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skill