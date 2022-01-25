import React,{useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {



    // const [isMobile, setIsMobile] = useState(false);
    return (
        <div className= "navbar" >
            
        <nav className= "navmenu"> 
        <Link to="/home"  className="nav-item" >Home</Link>
       
        <Link to="/categories"  className="nav-item" >Recipes</Link>
        <Link  to="/addrecipe" className="nav-item" >Add Recipe </Link>
        <Link to="/about"  className="nav-item" >About</Link>


       
        </nav>

            
        </div>
    )
}





 {/* <Link to="/recipes"  className="nav-item" >Recipes</Link> */}
        
        {/* <Link to="/contact"  className="nav-item" >Contact</Link> */}