import React, {useState} from 'react'
import './SingleBlog.css'
import {BlogData} from './BlogData.js'
import { useParams } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'



function SingleBlog() {


  const { blogid } = useParams();
  const [blogIdNum, setBlogIdNum] = useState(+blogid)



  return (
    <div className='Single_Blog_Post'>

      <div className='blog_welcome'>
          {BlogData.filter(item => item.id === blogIdNum).map((item) =>(
            <div>
              <h1>Blog Post:</h1>
              <h2> Selected: {item.title}</h2>
        
              
            </div>
          ))}
      </div>


      {BlogData.filter(item => item.id === blogIdNum).map((item) => (
<div key={item.id} className='blog_body_main'> 
    <div className='blog_body_top'>
            <h1 className='blog_title'>{item.title}</h1>

            {item.img_1_url && <img alt=''  src={item.img_1_url} className='blog_img'/>}
            {item.img_1_captions && <p>{item.img_1_captions}</p>}
            {item.img_2_url && <img alt='' src={item.img_2_url} className='blog_img'/>}
            {item.img_2_captions && <p>{item.img_2_captions}</p>}


            <div className='blog_icon_1'>
              {item.icon && <img alt='' src={item.icon}/> }
            </div>   
            {item.intro && <p>{item.intro}</p>}


            <div className='blog_paragraph_top'>
              {item.body_img_1 && <img alt='' src={item.body_img_1} className='body_img_1'/>}
              {item.span_yellow && <span className='span_yellow'>{item.span_yellow}</span>}
              {item.body_1 && <p>{item.body_1}</p>}
              {item.link && <h6>{item.link}</h6>}
              {item.a_tag_1 && (
                <NavLink to={item.a_tag_1}>
                  <button>{item.button1_name}</button>
                </NavLink>
              )}
            </div>

      </div>

{/* 
      //////////////////////////////////////////////////////////////////////////////////////// */}



<div className='blog_body_mid'>
  <h1>{item.title2}</h1>
  {item.img_3_url && <img alt='' src={item.img_3_url} className='blog_img'/>}
  {item.img_3_captions && <p>{item.img_3_captions}</p>}
  {item.img_4_url && <img alt='' src={item.img_4_url} className='blog_img'/>}
  {item.img_4_captions && <p>{item.img_4_captions}</p>}

  <div className='blog_icon_2'>
    {item.icon2 && <img alt='' src={item.icon2}/> }
  </div>   

  <div className='blog_paragraph_mid'>
    {item.body_img_2 && <img alt='' src={item.body_img_2} className='body_img_2'/>}
    {item.body_2 && <p>{item.body_2}</p>}
    {item.span_green && <span className='span_green'>{item.span_green}</span>}

    {item.img_5_url && <img alt='' src={item.img_5_url} className='blog_img'/>}
    {item.img_5_captions && <p>{item.img_5_captions}</p>}

    {item.body_img_3 && <img alt='' src={item.body_img_3} className='body_img_3'/>}
    {item.body_3 && <p>{item.body_3}</p>}

    <h6>{item.link2}</h6>
    {item.a_tag_2 && (
                <NavLink to={item.a_tag_2}>
                  <button>{item.button2_name}</button>
                </NavLink>
              )}
  </div>   

  <div className='extra_content'>
    {item.img_6_url && <img alt='' src={item.img_6_url} className='blog_img'/>}
    {item.img_6_captions && <p>{item.img_6_captions}</p>}
    {item.img_7_url && <img alt='' src={item.img_7_url} className='blog_img'/>}
    {item.img_7_captions && <p>{item.img_7_captions}</p>}
  </div>
</div>

{/* //////////////////////////////////////////////////////////////////////////////////////// */}



<p>Overflow Gallery Placeholder</p>


<div className='blog_body_bottom'>
  {item.img_8_url && (
    <div>
      <img alt='' src={item.img_8_url} className='blog_img'/>
      <p>{item.img_8_captions}</p>
    </div>
  )}
  {item.img_9_url && (
    <div>
      <img alt='' src={item.img_9_url} className='blog_img'/>
      <p>{item.img_9_captions}</p>
    </div>
  )}
  <div className='blog_paragraph_bottom'>
    {item.span_brown && (
      <span className='span_brown'>{item.span_brown}</span>
    )}
    {item.body_img_4 && (
      <img alt='' src={item.body_img_4} className='body_img_4'/> 
    )}
    {item.body_4 && (
      <p>{item.body_4}</p>
    )}
    {item.icon3 && (
      <h6>{item.icon3}</h6>
    )}
    {item.link3 && (
      <p>{item.link3}</p>
    )}
  </div>   

  {item.img_10_url && (
    <>
      <img alt='' src={item.img_10_url} className='blog_img'/>
      <p>{item.img_10_captions}</p>
    </>
  )}

  {item.conclusion && (
    <p>{item.conclusion}</p>
  )}


  {item.icon4 && (
    <div className='blog_icon_3'>
    <img alt='' src={item.icon4}/>
    </div>
  )}
</div>

    </div>
))}

     





        </div>

  )
}

export default SingleBlog;


// **if even style sheet one if odd style sheet two**