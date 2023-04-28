import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import './SingleEditSalesPost.css'
import axios from 'axios';
import Swal from 'sweetalert2';






function SingleBlogEdit({match}) {
    const { id } = useParams();
    const [salesFormData, setSalesFormData] = useState({
        name: ``,
        img_url: ``,
        description: ``,
        price: ``,
        discount: ``,
        tagline: ``,
        start_date: ``,
        expiration: ``
      });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`/editsalespost/${id}`, salesFormData)
      .then((response) => {
        Swal.fire({
          title: "Sales Item Edited",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error Editing Sales Item",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      });
  };

  const handleChange = (event) => {
    setSalesFormData({
      ...salesFormData,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <div className='single_sale_item_edit'>
        <h1>Edit Single Sale Item {id}</h1>
  
<div>
<form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={salesFormData.name}
          onChange={handleChange}
          />
      </label>
      <label>
        Image
        <input
          type="text"
          name="img_url"
          value={salesFormData.img_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={salesFormData.description}
          onChange={handleChange}
          />
      </label>
      <label>
       Price
        <input
          type="text"
          name="price"
          value={salesFormData.price}
          onChange={handleChange}
          />
      </label>
      <label>
       Discount
        <input
          type="text"
          name="discount"
          value={salesFormData.discount}
          onChange={handleChange}
          />
      </label>
      <label>
       Tagline
        <input
          type="text"
          name="tagline"
          value={salesFormData.tagline}
          onChange={handleChange}
          />
      </label>
      <label>
      Start Date
        <input
          type="text"
          name="start_date"
          value={salesFormData.start_date}
          onChange={handleChange}
          />
      </label>
    
      <label>
      Expiration
        <input
          type="text"
          name="expiration"
          value={salesFormData.expiration}
          onChange={handleChange}
          />
      </label>
    

      <button type="submit">Send</button>
    </form>
 


</div>
     


  
  
      </div>
  )
}

export default SingleBlogEdit