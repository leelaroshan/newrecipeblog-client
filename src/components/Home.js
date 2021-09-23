import React from 'react';
import './Home.css'
// import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="big-container">
        <div className="header">
                {/* <h2 className="head">The Hungry Web Developer Recipes</h2> */}
                
        </div>
         <div className="content-div">  
            <h4>Recipes For Hungry People</h4>
            <h5>Hungry makes food delicious</h5>
            <p className="content">Knowing what foods we should and shouldn’t be eating can be really confusing, 
                especially when it feels like the advice changes regularly. However,
                 evidence suggests that as well as affecting our physical health, 
                 what we eat may also affect the way we feel.</p>
        </div>


        <div className="categories">
            <div className="category-section"> </div>

        </div> 
      


           
            
        </div>
    )
}
