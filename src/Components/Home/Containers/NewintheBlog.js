import React from 'react'
import { NavLink } from 'react-router-dom'
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
                     Read this Week's newest Blog Post..
                        </p>
                        <p>Dynamically output the first lines of post here</p>
                        <NavLink to='/blog'>
                        <button className='nb_button'>Take me to Blog</button>
                        </NavLink>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default NewintheBlog