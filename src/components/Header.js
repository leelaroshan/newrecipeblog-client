import React from 'react';
import './Header.css'


export default function Header() {
  
    return (
        <header className="heading">
            
            
            <img  alt="logo" className="logo"
             src="https://st4.depositphotos.com/28764140/38029/v/950/depositphotos_380297052-stock-illustration-indian-food-logo-design-inspiration.jpg" 
            width="80px" height="80px" ></img>
            
            
            <h2 className="htwo">Indian Cuisine </h2>
            <input type="text" placeholder="serach" className="search-inp"></input>
        </header>
    )
}
