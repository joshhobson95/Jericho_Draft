import React from 'react'
import './Radio.css'
import RadioClouds from '../../SVGs/RadioClouds'
import RadioMic from '../../SVGs/RadioMic'

function Radio() {
  return (
    <div className='Radio'>
        <div className='radio_welcome'>
            <h1> We have been on air since 2005</h1>
            <p>
                Garden Talk with Rick Hobson has been on air for over 15 years and counting. Tune in every other saturday to hear everything you need to know about Albuqueruque gardening, southwestern horticulture and all kinds of plants from zone 5-8.
            </p>
            <div className='radio_mic'>
                <RadioMic />
            </div>
        </div>


        <div className='radio_body_main'>
            <h1>Garden Talk</h1>
            <h3>
                TUNE IN TO "GARDEN TALK" 11:00 AM SATURDAYS
            </h3>
            <h2>
                KKOB | 96.3 FM | 770 AM 
            </h2>

     <div className='radio_body_mid'>
            <div className='radio_clouds'>
                <RadioClouds />
            </div>

        <p>
        Rick Hobson is the owner of his own thriving business, Jericho Nursery, and host of the successful call-in gardening show, New Mexico Garden Talk on KKOB. Rick Hobson worked at Rowland’s for over 25 years and is considered an expert in the Albuquerque gardening community and around the state. Rick is on numerous boards, including the Japanese beetle taskforce; was acting president of New Mexico Association of Independent Nursery Industries and is currently assisting the New Mexico chapter of the Colorado Nursery and Greenhouse Association to create testing programs for nursery, landscape and greenhouse employees.
        </p>
     </div>


<div className='radio_body_bottom'>

            <img className='kkob_banner' src='https://express-images.franklymedia.com/6616/sites/124/2020/12/14121100/GARDENTALK-768x180.jpg'/>
            <span>You can listen to Garden Talk over the internet by visiting KKOB.com. Click the |Listen at KKOB.com| button below to tune in</span>

            <a target="_blank" href="https://www.newsradiokkob.com/new-mexico-garden-talk/">
            <button>Listen at KKOB.com</button>
            </a>

</div>

        </div>
    </div>
  )
}

export default Radio