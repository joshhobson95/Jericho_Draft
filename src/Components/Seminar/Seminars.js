import React, { useEffect, useRef, useState } from "react";
import './Seminars.css'
import SeminarIcon from '../../SVGs/SeminarIcon';
import SeminarForm from './SeminarForm';
import seminar_pic from '../../Assets/seminar_pic.jpg'



function Seminars() {

    const revealRef = useRef(null); // Create a ref to the reveal element
    const [isVisible, setIsVisible] = useState(false); // State to track if the reveal element is visible
  
    // Function to handle scroll event
    const handleScroll = () => {
      const revealElement = revealRef.current; // Get the DOM node of the reveal element
      if (revealElement) {
        const revealTop = revealElement.getBoundingClientRect().top; // Get the top position of the reveal element relative to the viewport
        const windowHeight = window.innerHeight; // Get the height of the window
        // If the reveal element is in the viewport, set isVisible to true
        if (revealTop < windowHeight) {
            setTimeout(() => {
            setIsVisible(true);

            }, 500)
        }
      }
    };
  
    useEffect(() => {
      // Add scroll event listener on component mount
      window.addEventListener("scroll", handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const clickHandler =() => {
setIsVisible(false)
    }


  return (
    <div className='Seminars'>
        <div className='seminars_welcome'>
            <h1>Seminars</h1>
        <p>
        Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </div>
        <div className='seminars_body_main'>
            <div className='seminars_body_top'>
                <h1>This Year's Seminars</h1>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>


                <div className="reveal-container">
      <div
        ref={revealRef}
        className={`reveal-content ${isVisible ? "visible" : ""}`}
      >
<SeminarIcon />
      </div>
    </div>
    <button onClick={clickHandler}>wipe</button>
<div className='seminars_body_mid'>
           <div className='seminars_list'>
                <ul>
                    <h3>No Seminars Scheduled Currently</h3>
                    <p>They will resume after Spring</p>
                    <p>Logo</p>
                {/* <h3>Upcoming Seminars for 2023</h3>
                   <li>Bee's Knees I</li>
                   <span>Justin ArmStrong</span>
                   <li>Bee's Knees II</li>
                   <span>Justin ArmStrong</span>
                   <li>Edible Gardening</li>
                   <span>Jennifer Hobson</span>
                   <li>Sodding Lawn Care</li>
                   <span>Jennifer Hobson</span>
                   <li>Xeriscape Rocks</li>
                   <span>Rick Hobson</span>
                   <li>Gardening Madness</li>
                   <span>Rick Hobson</span> */}
                </ul>
            </div>



            </div>

  <div className='seminar_pic_section'>
            <img alt='' src={seminar_pic} className='seminar_pic'/>
  </div>
</div>
            <div className='seminars_body_bottom'>
                <h1> Sign Up For the Next Seminar Here</h1>
        <div className='seminar_form'>
        <SeminarForm />
        </div>
            </div>
        </div>
</div>
  )
}

export default Seminars;