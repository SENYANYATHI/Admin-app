
import React from "react";
import '../css/navbar.css';
import image1 from '../images/image1.webp'


const Navbar = () => {
    return (
        <div>
           
        <nav className="nav">
                <ul id="navbar">
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
           <li><a href="#">Rooms</a></li>
           <li><a href="#">History</a></li>
         
           </ul>
         
        
        </nav>

      <img src={image1} alt="background"/>
        </div>


    );
};
export default Navbar;