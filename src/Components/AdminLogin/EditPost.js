import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './EditPost.css'



function EditPost() {

const [blogData, setBlogData] = useState([])

    useEffect(() => {
        axios
          .get("/blog")
          .then((res) => {
            setBlogData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    


  return (
    <div className='edit_post'>
 




    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Title 2</th>
          <th>Date</th>
          <th>Img_1_Url</th>
          <th>Img_2_Url</th>
          <th>Img_3_Url</th>
          <th>Img_4_Url</th>
          <th>Img_5_Url</th>
          <th>Img_6_Url</th>
          <th>Img_7_Url</th>
          <th>Img_8_Url</th>
          <th>Img_9_Url</th>
          <th>Img_10_Url</th>
          <th>Img_1_Captions</th>
          <th>Img_2_Captions</th>
          <th>Img_3_Captions</th>
          <th>Img_4_Captions</th>
          <th>Img_5_Captions</th>
          <th>Img_6_Captions</th>
          <th>Img_7_Captions</th>
          <th>Img_8_Captions</th>
          <th>Img_9_Captions</th>
          <th>Img_10_Captions</th>
          <th>Link</th>
          <th>Link 2</th>
          <th>Icon</th>
          <th>Icon 2</th>
          <th>Icon 3</th>
          <th>Intro</th>
          <th>Body_1</th>
          <th>Body_2</th>
          <th>Body_3</th>
          <th>Body_4</th>
          <th>Conclusion</th>
          <th>Span_Green</th>
          <th>Span_Yellow</th>
          <th>Span_Brown</th>
          
        </tr>
      </thead>
      <tbody>
        {blogData.map((item) => (
          <tr key={item.blogtableid}>
              <td>{item.blogtableid}</td>
          <td>{item.title}</td>
          <td>{item.title2}</td>
          <td>{item.date}</td>
          <td>{item.img_1_url}</td>
          <td>{item.img_2_url}</td>
          <td>{item.img_3_url}</td>
          <td>{item.img_4_url}</td>
          <td>{item.img_5_url}</td>
          <td>{item.img_6_url}</td>
          <td>{item.img_7_url}</td>
          <td>{item.img_8_url}</td>
          <td>{item.img_9_url}</td>
          <td>{item.img_10_url}</td>
          <td>{item.img_1_captions}</td>
          <td>{item.img_2_captions}</td>
          <td>{item.img_3_captions}</td>
          <td>{item.img_4_captions}</td>
          <td>{item.img_5_captions}</td>
          <td>{item.img_6_captions}</td>
          <td>{item.img_7_captions}</td>
          <td>{item.img_8_captions}</td>
          <td>{item.img_9_captions}</td>
          <td>{item.img_10_captions}</td>
          <td>{item.link}</td>
          <td>{item.link2}</td>
          <td>{item.icon}</td>
          <td>{item.icon2}</td>
          <td>{item.icon3}</td>
          <td>{item.intro}</td>
          <td>{item.body_1}</td>
          <td>{item.body_2}</td>
          <td>{item.body_3}</td>
          <td>{item.body_4}</td>
          <td>{item.conclusion}</td>
          <td>{item.span_green}</td>
          <td>{item.span_yellow}</td>
          <td>{item.span_brown}</td>
   

          </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}

export default EditPost