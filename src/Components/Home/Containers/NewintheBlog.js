import React from 'react'
import './NewintheBlog.css'
import icon1 from '../../../Assets/Flower.png'
import banner from '../../../Assets/stone_banner.jpg'

function NewintheBlog() {
    return (
  


        <div className='home_container_outer'>
            <div className='nb_container'>
            <div className='home_container_header'>
                    <div className='hc_icon'>
                        <img  src={icon1} className="c_icon"/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3>New In the Blog</h3>
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
                        <button className='nb_button'>Learn More</button>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default NewintheBlog