import React from 'react'
import './SingleBlog.css'
import {BlogData} from './BlogData.js'
import { NavLink } from 'react-router-dom'



function SingleBlog() {
  return (
    <div className='Single_Blog_Post'>

      <div className='blog_welcome'>
          {BlogData.filter(item => item.id === 2).map((item) =>(
            
            <div>
              <h1>Blog Post:</h1>
              <h2> Selected: {item.title}</h2>
              <button> Next</button>
              <button> Prev</button>
            </div>
          ))}
      </div>


        {BlogData.filter(item => item.id === 2).map((item) => (
    <div className='blog_body_main'> 
        <div className='blog_body_top'>
            <h1 className='blog_title'>{item.title}</h1>
            <img alt=''  src={item.img_1_url} className='blog_img'/>
            <p>{item.img_1_captions}</p>
            <img alt='' src={item.img_2_url} className='blog_img'/>
            <p>{item.img_2_captions}</p>

            <p>{item.intro}</p>

            <div className='blog_icon_1'>
               <img alt='' src={item.icon}/> 
             </div>   

             <div className='blog_paragraph_top'>
              <img alt='' src={item.body_img_1} className='body_img_1'/> 
              <span className='span_yellow'>{item.span_yellow}</span>
                <p>{item.body_1}</p>


                <h6>{item.link}</h6>
               <NavLink to={item.a_tag_1}>
                <button>{item.button1_name}</button>
               </NavLink>
            
            </div>
        </div>

{/* 
      //////////////////////////////////////////////////////////////////////////////////////// */}



        <div className='blog_body_mid'>
            <h1>{item.title2}</h1>
            <img alt=''  src={item.img_3_url} className='blog_img'/>
            <p>{item.img_3_captions}</p>
            <img alt='' src={item.img_4_url} className='blog_img'/>
            <p>{item.img_4_captions}</p>

            <div className='blog_icon_2'>
               <img alt='' src={item.icon2}/> 
             </div>   

             <div className='blog_paragraph_mid'>
             <img alt='' src={item.body_img_2} className='body_img_2'/> 
                <p>{item.body_2}</p>
                <span className='span_green'>{item.span_green}</span>

                <img alt=''  src={item.img_5_url} className='blog_img'/>
                 <p>{item.img_5_captions}</p>


                 <img alt='' src={item.body_img_3} className='body_img_3'/> 
                <p>{item.body_3}</p>

                <h6>{item.link2}</h6>
                <NavLink to={item.a_tag_2}>
                  <button>{item.button2_name}</button>
                </NavLink>
             </div>   

<div className='extra_content'>
            <img alt='' src={item.img_6_url} className='blog_img'/>
            <p>{item.img_6_captions}</p>
            <img alt='' src={item.img_7_url} className='blog_img'/>
            <p>{item.img_7_captions}</p>
</div>

        </div>   

{/* //////////////////////////////////////////////////////////////////////////////////////// */}


<p>Overflow Gallery Placeholder</p>


            <div className='blog_body_bottom'>


            <img alt='' src={item.img_8_url} className='blog_img'/>
            <p>{item.img_8_captions}</p>
            <img alt='' src={item.img_9_url} className='blog_img'/>
            <p>{item.img_9_captions}</p>

            

            
            <div className='blog_paragraph_bottom'>
            <span className='span_brown'>{item.span_brown}</span>
            <img alt='' src={item.body_img_4} className='body_img_4'/> 
                <p>{item.body_4}</p>
                <h6>{item.icon3}</h6>
                <p>{item.link3}</p>
             </div>   


            <img alt='' src={item.img_10_url} className='blog_img'/>
            <p>{item.img_10_captions}</p>

                <p>{item.conclusion}</p>
                <img alt='' src={item.icon4}/>

            </div>

    </div>
))}

     





        </div>

  )
}

export default SingleBlog;


// **if even style sheet one if odd style sheet two**