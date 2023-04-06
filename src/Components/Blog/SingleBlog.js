import React from 'react'
import './SingleBlog.css'
import {BlogData} from './BlogData.js'



function SingleBlog() {
  return (
    <div className='Single_Blog_Post'>


        {BlogData.filter(item => item.id === 2).map((item) => (
    <div className='blog_body_main'> 
        <div className='blog_body_top'>
            <h1>{item.title}</h1>
            <img alt=''  src={item.img_1_url}/>
            <p>{item.img_1_captions}</p>
            <img alt='' src={item.img_2_url}/>
            <p>{item.img_2_captions}</p>

            <p>{item.intro}</p>

            <div className='blog_icon_1'>
               <img alt='' src={item.icon}/> 
             </div>   

             <div className='blog_paragraph_top'>
              <span>{item.span_green}</span>
                <p>{item.body_1}</p>
            </div>
        </div>


      ////////////////////////////////////////////////////////////////////////////////////////



        <div className='blog_body_mid'>
            <h1>{item.title2}</h1>
            <img alt=''  src={item.img_3_url}/>
            <p>{item.img_3_captions}</p>
            <img alt='' src={item.img_4_url}/>
            <p>{item.img_4_captions}</p>

            <div className='blog_icon_2'>
               <img alt='' src={item.icon}/> 
             </div>   

             <div className='blog_paragraph_mid'>
                <p>{item.body_2}</p>
                <span>{item.span_yellow}</span>

                <img alt=''  src={item.img_5_url}/>
                 <p>{item.img_5_captions}</p>

                <p>{item.body_3}</p>

                <h6>{item.link}</h6>
             </div>   

<div className='extra_content'>
            <img alt='' src={item.img_6_url}/>
            <p>{item.img_6_captions}</p>
            <img alt='' src={item.img_7_url}/>
            <p>{item.img_7_captions}</p>
</div>

        </div>   

////////////////////////////////////////////////////////////////////////////////////////
{/* 
a tags vs links... buttons, clickable pics????? */}




            <div className='big_blog_card_bottom'>


            <img alt='' src={item.img_8_url}/>
            <p>{item.img_8_captions}</p>
            <img alt='' src={item.img_9_url}/>
            <p>{item.img_9_captions}</p>

            

            
            <div className='blog_paragraph_bottom'>
            <span>{item.span_brown}</span>
                <p>{item.body_4}</p>
                <h6>{item.icon2}</h6>
                <p>{item.link2}</p>
             </div>   


            <img alt='' src={item.img_10_url}/>
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