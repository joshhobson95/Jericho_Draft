import React from 'react'
import './SingleBlog.css'
import {BlogData} from './BlogData.js'



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
            <img alt=''  src={item.img_1_url} className='img_1'/>
            <p>{item.img_1_captions}</p>
            <img alt='' src={item.img_2_url} className='img_2'/>
            <p>{item.img_2_captions}</p>

            <p>{item.intro}</p>

            <div className='blog_icon_1'>
               <img alt='' src={item.icon}/> 
             </div>   

             <div className='blog_paragraph_top'>
              <img alt='' src={item.body_img_1} className='body_img_1'/> 
              <span className='span_green'>{item.span_green}</span>
                <p>{item.body_1}</p>
                <h6>{item.link}</h6>
            </div>
        </div>


      ////////////////////////////////////////////////////////////////////////////////////////



        <div className='blog_body_mid'>
            <h1>{item.title2}</h1>
            <img alt=''  src={item.img_3_url} className='img_3'/>
            <p>{item.img_3_captions}</p>
            <img alt='' src={item.img_4_url} className='img_4'/>
            <p>{item.img_4_captions}</p>

            <div className='blog_icon_2'>
               <img alt='' src={item.icon}/> 
             </div>   

             <div className='blog_paragraph_mid'>
             <img alt='' src={item.body_img_2} className='body_img_2'/> 
                <p>{item.body_2}</p>
                <span className='span_yellow'>{item.span_yellow}</span>

                <img alt=''  src={item.img_5_url} className='img_5'/>
                 <p>{item.img_5_captions}</p>


                 <img alt='' src={item.body_img_3} className='body_img_3'/> 
                <p>{item.body_3}</p>

                <h6>{item.link2}</h6>
             </div>   

<div className='extra_content'>
            <img alt='' src={item.img_6_url} className='img_6'/>
            <p>{item.img_6_captions}</p>
            <img alt='' src={item.img_7_url} className='img_7'/>
            <p>{item.img_7_captions}</p>
</div>

        </div>   

////////////////////////////////////////////////////////////////////////////////////////
{/* 
a tags vs links... buttons, clickable pics????? */}




            <div className='big_blog_card_bottom'>


            <img alt='' src={item.img_8_url} className='img_8'/>
            <p>{item.img_8_captions}</p>
            <img alt='' src={item.img_9_url} className='img_9'/>
            <p>{item.img_9_captions}</p>

            

            
            <div className='blog_paragraph_bottom'>
            <span className='span_brown'>{item.span_brown}</span>
            <img alt='' src={item.body_img_4} className='body_img_4'/> 
                <p>{item.body_4}</p>
                <h6>{item.icon2}</h6>
                <p>{item.link3}</p>
             </div>   


            <img alt='' src={item.img_10_url} className='img_10'/>
            <p>{item.img_10_captions}</p>

                <p>{item.conclusion}</p>
                <img alt='' src={item.icon3}/>

            </div>

    </div>
))}

     





        </div>

  )
}

export default SingleBlog;


// **if even style sheet one if odd style sheet two**