import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import './NewBlogPost.css'
import Swal from "sweetalert2";
import AuthContext from "../../store/authContext";





const NewBlogPost = () => {

  const authCtx = useContext(AuthContext)

const logout = () => {
  Swal.fire({
    title: "You have been logged out",
    confirmButtonColor: "rgb(210, 161, 12)",
    customClass: "buttonalert",
    confirmButtonText: "Ok"
  })
authCtx.logout()
}






  const [formData, setFormData] = useState({
    title: ``,
    title2: ``,
    date: ``,
    img_1_url: ``,
    img_2_url: ``,
    img_3_url: ``,
    img_4_url: ``,
    img_5_url: ``,
    img_6_url: ``,
    img_7_url: ``,
    img_8_url: ``,
    img_9_url: ``,
    img_10_url: ``,
    img_1_captions: ``,
    img_2_captions:  ``,
    img_3_captions:   ``,
    img_4_captions:  ``,
    img_5_captions: ``,
    img_6_captions: ``,
    img_7_captions: ``,
    img_8_captions: ``,
    img_9_captions: ``,
    img_10_captions: ``,
    link:  ``,
    link2:  ``,
    icon:  ``,
    icon2: ``,
    icon3: ``,
    intro:  ``,
    body_1:  ``,
    body_2:  ``,
    body_3:  ``,
    body_4:  ``,
    conclusion:  ``,
    span_green:  ``,
    span_yellow:  ``,
    span_brown:  ``,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/newblogpost", formData)
      .then((response) => {
        console.log(response);
        alert("Your message has been sent.");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again later.");
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="newBlog">


      <div className="admin_header">
      <h1>Welcome to the Admin Portal - New Blog Post Section</h1>

      <span>Navigate</span>
      <NavLink to='/editpost'>
      <button>Edit/Delete a Post</button>
      </NavLink>
      <button>Create a New Promotion Post</button>
      </div>


      <div className="logout">
    <button className='logout_btn' onClick={() => logout()} >Logout</button>
    </div>


<div>
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          />
      </label>
      <label>
        Title 2
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleChange}
          />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1
        <input
          type="text"
          name="img_1_url"
          value={formData.img_1_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2
        <input
          type="text"
          name="img_2_url"
          value={formData.img_2_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3
        <input
          type="text"
          name="img_3_url"
          value={formData.img_3_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4
        <input
          type="text"
          name="img_4_url"
          value={formData.img_4_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5
        <input
          type="text"
          name="img_5_url"
          value={formData.img_5_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6
        <input
          type="text"
          name="img_6_url"
          value={formData.img_6_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7
        <input
          type="text"
          name="img_7_url"
          value={formData.img_7_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8
        <input
          type="text"
          name="img_8_url"
          value={formData.img_8_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9
        <input
          type="text"
          name="img_9_url"
          value={formData.img_9_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10
        <input
          type="text"
          name="img_10_url"
          value={formData.img_10_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          />
      </label>
      <label>
        Link 2
        <input
          type="text"
          name="link2"
          value={formData.link2}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 2
        <input
          type="text"
          name="icon2"
          value={formData.icon2}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 3
        <input
          type="text"
          name="icon3"
          value={formData.icon3}
          onChange={handleChange}
          />
      </label>
      <label>
       Intro
        <input
          type="text"
          name="intro"
          value={formData.intro}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 1
        <input
          type="text"
          name="body_1"
          value={formData.body_1}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 2
        <input
          type="text"
          name="body_2"
          value={formData.body_2}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 3
        <input
          type="text"
          name="body_3"
          value={formData.body_3}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 4
        <input
          type="text"
          name="body_4"
          value={formData.body_4}
          onChange={handleChange}
          />
      </label>
      <label>
      Conclusion
        <input
          type="text"
          name="conclusion"
          value={formData.conclusion}
          onChange={handleChange}
          />
      </label>
      <label>
     Yellow Span
        <input
          type="text"
          name="span_yellow"
          value={formData.span_yellow}
          onChange={handleChange}
          />
      </label>
      <label>
     Green Span
        <input
          type="text"
          name="span_green"
          value={formData.span_green}
          onChange={handleChange}
          />
      </label>
      <label>
     Brown Span
        <input
          type="text"
          name="span_brown"
          value={formData.span_brown}
          onChange={handleChange}
          />
      </label>

      <button type="submit">Send</button>
    </form>
</div>



          </div>
  );
};

export default NewBlogPost;
