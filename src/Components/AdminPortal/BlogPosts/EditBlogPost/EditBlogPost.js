import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditBlogPost.css'
import AuthContext from '../../../../store/authContext';



function EditBlogPost() {

const [blogData, setBlogData] = useState([])

const { token } = useContext(AuthContext);

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

      const deleteBlogPost = (blogtableid) => {
        axios
          .delete(`/newblogpost/${blogtableid}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Blog Post has been Deleted",
              confirmButtonColor: "rgb(210, 161, 12)",
              customClass: "buttonalert",
              confirmButtonText: "OK", 
            })
            .finally(()=>window.location.reload(false))
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    


  return (
    <div className='edit_post'>
 




    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Date</th>
          <th>Intro</th>
          <th>Body_1</th>
          <th>Edit Post</th>
          <th>Delete Post</th>
        </tr>
      </thead>
      <tbody>
        {blogData.map((item) => (
          <tr key={item.blogtableid}>

          <td>{item.blogtableid}</td>
          <td>{item.title}</td>
          <td>{item.date}</td>
          <td>{item.intro}</td>
          <td>{item.body_1}</td>
          <td><button>Edit </button></td>
          <td><button onClick={() => deleteBlogPost(item.blogtableid)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}

export default EditBlogPost



// {blogData.map((item) => (
//     <tr key={item.blogtableid}>
//         <td>{item.blogtableid}</td>
//     <td>{item.title}</td>
//     <td>{item.title2}</td>
//     <td>{item.date}</td>
//     <td>{item.img_1_url}</td>
//     <td>{item.img_2_url}</td>
//     <td>{item.img_3_url}</td>
//     <td>{item.img_4_url}</td>
//     <td>{item.img_5_url}</td>
//     <td>{item.img_6_url}</td>
//     <td>{item.img_7_url}</td>
//     <td>{item.img_8_url}</td>
//     <td>{item.img_9_url}</td>
//     <td>{item.img_10_url}</td>
//     <td>{item.img_1_captions}</td>
//     <td>{item.img_2_captions}</td>
//     <td>{item.img_3_captions}</td>
//     <td>{item.img_4_captions}</td>
//     <td>{item.img_5_captions}</td>
//     <td>{item.img_6_captions}</td>
//     <td>{item.img_7_captions}</td>
//     <td>{item.img_8_captions}</td>
//     <td>{item.img_9_captions}</td>
//     <td>{item.img_10_captions}</td>
//     <td>{item.link}</td>
//     <td>{item.link2}</td>
//     <td>{item.icon}</td>
//     <td>{item.icon2}</td>
//     <td>{item.icon3}</td>
//     <td>{item.intro}</td>
//     <td>{item.body_1}</td>
//     <td>{item.body_2}</td>
//     <td>{item.body_3}</td>
//     <td>{item.body_4}</td>
//     <td>{item.conclusion}</td>
//     <td>{item.span_green}</td>
//     <td>{item.span_yellow}</td>
//     <td>{item.span_brown}</td>


//     </tr>