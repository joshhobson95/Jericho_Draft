import React from 'react'
import './MoreAboutJericho.css'
import dirt from '../../../Assets/dirt_hands.jpg'


function MoreAboutJericho() {
  return (
    <div className='more_about_jericho'>
         <div className='maj_1'>
            <div className='maj_header'>
                <h1>More About Jericho</h1>
            </div>
        </div>

        <div className='maj_2'>
            <div className='maj_left'>
                <div className='s_container'>
                    <img src={dirt} alt='' className='dirt_hands'/>
                    <div className='s_green'></div>
                    <div className='s_yellow'></div>
                    <div className='s_brown'></div>
                </div>
              
             
                    
            </div>
            <div className='maj_right'>
                <div className='r_1'>
                    <div className='a_s_1'></div>
                    <h3>Shine Your Brightest</h3>
                    <p> Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='r_2'>
                <div className='a_s_2'></div>
                    <h3>Grow into something Bigger</h3>
                    <p> 
                    Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='r_3'>
                <div className='a_s_3'></div>
                    <h3>Solid Roots</h3>
                    <p> Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

        </div>
                    <button className='maj_button'>Learn More</button>




    </div>
  )
}

export default MoreAboutJericho