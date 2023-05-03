import React, {useState, useEffect} from 'react'
import './SingleBlog.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function SingleBlog() {
  const [blogData, setBlogData] = useState([])
  const { blogid } = useParams();
  const [blogIdNum, setBlogIdNum] = useState(+blogid)




  useEffect(() => {
    axios.get(`/singleblog/${blogIdNum}`)
    .then((response) => {
  
      setBlogData([response.data])
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
  }, [blogIdNum])
  



  return (
    <div className='Single_Blog_Post'>

      <div className='blog_welcome'>
        <h1>Currently Reading:</h1>
        {blogData && blogData.map((item) => (
              <h2>{item.title}</h2>
        ))}
      </div>

      {blogData && blogData.map((item) => (
<div key={item.id} className='blog_body_main'> 
    <div className='blog_body_top'>
            <h1 className='blog_title'>{item.title}</h1>
            <span className='date'>{item.date}</span>
           
            {item.img_1_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_1_url}`} className='blog_img' alt=''/>}
            {item.img_1_captions && <p>{item.img_1_captions}</p>}




            <div className='blog_icon_1'>
              {item.icon && <img alt='' src={item.icon}/> }
           
            </div>   
            {item.intro && <p>{item.intro}</p>}

            {item.img_2_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_2_url}`} className='blog_img' alt=''/>}
            {item.img_2_captions && <p>{item.img_2_captions}</p>}

            <div className='blog_paragraph_top'>
              {item.body_img_1 && <img alt='' src={item.body_img_1} className='body_img_1'/>}
              {item.span_yellow && <span className='span_yellow'>{item.span_yellow}</span>}
              {item.body_1 && <p>{item.body_1}</p>}
              {item.link && <a href={item.link}  target="_blank" rel="noreferrer">
             <button>Link</button> 
               </a>}
            </div>

      </div>



<div className='blog_body_mid'>
  <h1>{item.title2}</h1>
  {item.img_3_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_3_url}`} className='blog_img' alt=''/>}
  {item.img_3_captions && <p>{item.img_3_captions}</p>}
  {item.img_4_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_4_url}`} className='blog_img' alt=''/>}
  {item.img_4_captions && <p>{item.img_4_captions}</p>}

  <div className='blog_icon_2'>
    {item.icon2 && <img alt='' src={item.icon2}/> }
  </div>   

  <div className='blog_paragraph_mid'>
  
    {item.body_2 && <p>{item.body_2}</p>}
    {item.span_green && <span className='span_green'>{item.span_green}</span>}

    {item.img_5_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_5_url}`} className='blog_img' alt=''/>}
    {item.img_5_captions && <p>{item.img_5_captions}</p>}

  
    {item.body_3 && <p>{item.body_3}</p>}

          {item.link2 && <a href={item.link2}  target="_blank" rel="noreferrer">
             <button>Link</button> 
               </a>}
  </div>   

  <div className='extra_content'>
    {item.img_6_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_6_url}`} className='blog_img' alt=''/>}
    {item.img_6_captions && <p>{item.img_6_captions}</p>}
    {item.img_7_url && <img src={`https://drive.google.com/uc?export=view&id=${item.img_7_url}`} className='blog_img' alt=''/>}
    {item.img_7_captions && <p>{item.img_7_captions}</p>}
  </div>
</div>



<div className='blog_body_bottom'>
  {item.img_8_url && (
    <div>
      <img src={`https://drive.google.com/uc?export=view&id=${item.img_8_url}`} className='blog_img' alt=''/>
      <p>{item.img_8_captions}</p>
    </div>
  )}
  {item.img_9_url && (
    <div>
      <img src={`https://drive.google.com/uc?export=view&id=${item.img_9_url}`} className='blog_img' alt=''/>
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
    <div className='blog_icon_3'>
    {item.icon3 && (
       <img alt='' src={item.icon3} className='icon3'/> 
    )}
    </div>
  </div>   

  {item.img_10_url && (
    <>
     <img src={`https://drive.google.com/uc?export=view&id=${item.img_10_url}`} className='blog_img' alt=''/>
      <p>{item.img_10_captions}</p>
    </>
  )}

  {item.conclusion && (
    <p>{item.conclusion}</p>
  )}


</div>

    </div>
))}

  
        </div>

  )
}

export default SingleBlog;


