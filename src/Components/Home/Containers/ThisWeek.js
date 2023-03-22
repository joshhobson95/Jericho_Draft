import React from 'react'
import './ThisWeek.css'
import icon1 from '../../../Assets/Transparent2.png'
import banner from '../../../Assets/succulent_banner.jpg'

function NewThisWeek() {
  return (
  


    <div className='home_container_outer'>
        <div className='home_container'>
        <div className='home_container_header'>
                <div className='hc_icon'>
                    <img  src={icon1} className="c_icon"/>
                </div>
                <div className='home_container_header_text'>
                    <h3>New This Week</h3>
                </div>
        </div>

        <div className='hc_body'>
                <div className='hc_img'>
                    <img src={banner} className='c_image' alt=''/>

                </div>
                <div className='hc_paragraph'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>

                            <button className='hc_button'>Learn More</button>
                </div>
                </div>
        </div>


    </div>
  
  )
}

export default NewThisWeek