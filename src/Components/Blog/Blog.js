import React from 'react'
import './Blog.css'
import { NavLink } from 'react-router-dom'
import {BlogData} from './BlogData.js'


// Public Photos on Drive
// https://stackoverflow.com/questions/67344372/how-do-i-display-images-from-google-drive-on-a-react-front-end-website

function Blog() {

    
  return (
    <div className='Blog'>

      <div className='blog_welcome'>
        <h1>Blog and Gallery</h1>
        <p>Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>




 


{BlogData.filter(item => item.id === 1).map((item) => (
    <div className='big_blog_card'> 
        <div className='big_blog_card_top'>
            <h1>Latest Post</h1>
            {/* icon */}
            <img src="https://drive.google.com/uc?export=view&id=1RzWZax_MPf3Oqzuxz54nzQ_eZ3t952e7" alt="drive" className='big_blog_photo'/>                             
        </div>
        <div className='big_blog_card_bottom'>
            <h3>{item.title}</h3>
            <p>{item.intro}</p>    
            <button>Read More</button>         
        </div>
    </div>
))}



{/* ======================================== */}



            {BlogData.map((item) => (
                    <div className='small_blog_card'> 
                    <div className='small_blog_card_top'>
                    
                    <img src={item.img_1_url} className='small_blog_photo'/>
                    </div>

                    <div className='small_blog_card_bottom'>

                    <h3>{item.title}</h3>
                      
                    <p>{item.intro}</p>
                

                    <button>Read More</button>


                    </div>


                    </div>
            ))}


<div className='blog_snav_buttons'>
  
              <button> Back to Top</button>

              <button> See More </button>
</div>




    </div>
  )
}

export default Blog