import React from 'react'
import "./Prev.css"

function Previous() {
  return (
    <div className='Prev-con'>
        <div id="About-me">
          <div>
            <h2 className="text-white text-3xl font-bold mb-1">EXTRACURRICULAR ACTIVITIES</h2>
          </div>
        </div>
        <div id="Prev-container" className="border border-white-600 rounded">
            <div className="Pre-card">
                <p className='font-bold'>I was an intern (<span className='Yellow'>Trainee Linguist</span>) at
                PROLOCALIZE COMPANY LIMITED, Bangkok, Thailand
                June to July 2021
                </p>
                <h2 className='mt-3 font-bold mb-2 text-lg'>My responsibilities was</h2>
                <ul className='text-left'>
                    <li className='mb-3'>Translating assigned documents from Thai to English and vice versa.</li>
                    <li>Editing and proofreading documents.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Previous