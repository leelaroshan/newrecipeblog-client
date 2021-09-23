import React from 'react';
import Contact from './Contact';
import './About.css';

export default function About() {
    return (
        <div>
            <div className="main-container">
                <div className="about">
                    <h3>About Indian Cuisine</h3>
                   
                    <p className="about-content">Indian food is different from rest of the world not only
                         in taste but also in cooking methods. It reflects a perfect blend of 
                         various cultures and ages. Just like Indian culture, food in India has
                          also been influenced by various civilizations, which have contributed 
                          ir share in its overall development and the present form.
                       Foods of India are better known for its spiciness. 
                       Throughout India, be it North India or South India, 
                       spices are used generously in food. But one must not forget that every single 
                       spice used in Indian dishes carries some or the other nutritional as well as 
                       medicinal properties.</p>
                </div>
                <div className="contact"> 
                <Contact />
                </div>
            </div>
            
        </div>
    )
}
