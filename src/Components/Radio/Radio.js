import React from 'react'
import './Radio.css'
import RadioClouds from '../../SVGs/RadioClouds'
import RadioMic from '../../SVGs/RadioMic'

function Radio() {
  return (
    <div className='Radio'>
        <div className='radio_welcome'>
            <h1> We have been on air since 2005</h1>
            <p>Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div className='radio_mic'>
                <RadioMic />
            </div>
        </div>


        <div className='radio_body_main'>
            <h2>
                KKOB | 96.3 FM | 770 AM 
            </h2>
            <h3>
                TUNE IN TO "GARDEN TALK"11:00 AM SATURDAYS
            </h3>

            <div className='radio_clouds'>
                <RadioClouds />
            </div>


            <p>https://www.newsradiokkob.com/new-mexico-garden-talk/</p>
            <p>https://www.newsradiokkob.com/</p>
            <img src='https://express-images.franklymedia.com/6616/sites/124/2020/12/14121100/GARDENTALK-768x180.jpg'/>

        <p>
        Rick Hobson is the owner of his own thriving business, Jericho Nursery, and host of the successful call-in gardening show, New Mexico Garden Talk on KKOB. Rick Hobson worked at Rowland’s for over 25 years and is considered an expert in the Albuquerque gardening community and around the state. Rick is on numerous boards, including the Japanese beetle taskforce; was acting president of New Mexico Association of Independent Nursery Industries and is currently assisting the New Mexico chapter of the Colorado Nursery and Greenhouse Association to create testing programs for nursery, landscape and greenhouse employees.
        </p>

        </div>
    </div>
  )
}

export default Radio