import React from 'react';
import './Footer.css'


export default function Footer() {
   
    return (
        <div className="footer">
            <div className="sign-up"> 
            <h4>Sign up for our news letter </h4>
            <input type="text" placeholder="email address" className="email"></input>
            <button>submit</button>
           
            </div>
            
            <div className="follow">
                
            <h5>Follow us on social media</h5>
            
                <img className="youtube" alt="youtube"
                src="https://cdn.discordapp.com/attachments/865512073681305651/869521383871365140/youtube.png"></img>
                <img className="instagram" alt="instagram"
                src="https://cdn.discordapp.com/attachments/865512073681305651/869521376715890778/instagram.png"></img>
                <img
                className="facebook" alt="facebook"
                src="https://cdn.discordapp.com/attachments/865512073681305651/869521374178320384/facebook.png"></img>

            </div>
        </div>
    )
}
