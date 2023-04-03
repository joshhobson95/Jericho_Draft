import React from 'react';
import './StaffPictures.css'
import staffpics from '../../Assets/cf3.jpg'



function StaffPictures() {

    const staff_pics = [
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Richard',
            position: 'Co-Owner'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Jennifer',
            position: 'Co-Owner'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Jesse',
            position: 'Manager'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Wendy',
            position: 'Front-End Manager'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Gary',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Alfredo',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Pam',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Scott',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Kiana',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Mesha',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Ameerah',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1Bw3MGJ2hUnZ-7S_eHnoVlzfuqOBXEnA9",
            name: 'Chantelle',
            position: 'Gardening Angel'
        },
    
    ]


  return (
    <div className="staff_pics_grid">
      {staff_pics.map((picture, index) => (
        <div key={index} className="staff_pic">
          <img src={picture.src} alt={picture.caption} className='staff_pics'/>
          <h6>{picture.name}</h6>
          <span>{picture.position}</span>
        </div>
      ))}



     
    </div>
  );
}

export default StaffPictures;
