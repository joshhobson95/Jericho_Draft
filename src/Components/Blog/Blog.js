import React, {useState, useEffect} from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from "axios";


// Public Photos on Drive
// https://stackoverflow.com/questions/67344372/how-do-i-display-images-from-google-drive-on-a-react-front-end-website

function Blog() {

  const [blogData, setBlogData] = useState([])
  const [offset, setOffset] = useState(0);

useEffect(() => {
  axios
    .get(`/blog/${offset}`)
    .then((res) => {
      setBlogData([res.data]);
    })
    .catch((err) => {
      console.log(err);
    });
}, [offset]);


  const { id } = useParams()

    const hanldeScrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };




  return (
    <div className='Blog'>

      <div className='blog_welcome'>
        <h1>Blog and Gallery</h1>
        <p>Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat pariatur. </p>
      </div>

      <button onClick={() => setOffset(() => + 5)}>Next</button>
      <button onClick={() => setOffset(() =>  0)}>Prev</button>




{/* {blogData.map((item) => (
    <div className='big_blog_card'> 
        <div className='big_blog_card_top'>
            <h1>Latest Post</h1>
                          
        </div>
        <div className='big_blog_card_bottom'>
            <h3>{item.title}</h3>
            <p>{item.intro}</p>    
            <div className='big_blog_button'>
            <Link to={`/singleblog/${item.blogtableid}`}>
            <button>Read More</button>         
              </Link>
            </div>
            <div className='big_blog_span'>
            <span>{item.date}</span>
            </div>
        </div>
    </div>
))} */}



{/* ======================================== */}

<div>
    {blogData && blogData[0] && blogData[0].rows && blogData[0].rows.map((blogPost) => (
     <div>
      {blogPost.title}
      </div>
    ))}
  </div>
            {/* {blogData.map((item) => (
                    <div className='small_blog_card'> 
                    <div className='small_blog_card_top'>
                    <img src={item.img_1_url} className='small_blog_photo'/>
                    </div>
                    <div className='small_blog_card_bottom'>
                    <h3>{item.title}</h3>
                    <div className='text_overflow'>
                    <p>{item.intro}</p>
                     </div>
                     <div className='small_blog_card_button'>


               <Link to={`/singleblog/${item.blogtableid}`}>
                    <button>Read More</button>
               </Link>
       
                    <p>{item.id}</p>
                    </div>
                    <div className='small_blog_card_span'>
                    <span>{item.date}</span>
                    </div>
                    </div>
                    </div>
            ))} */}


<div className='blog_snav_buttons'>
  
              <button onClick={hanldeScrollTop}> Back to Top</button>
              <button> Does Nothing </button>

          


</div>




    </div>
  )
}

export default Blog;