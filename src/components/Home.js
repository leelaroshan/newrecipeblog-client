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
          <h2 style={{fontWeight:'700'}}>Recipes For Indian Authentic Food Lovers</h2>
          <h3>South Indian Food</h3>
          {/* <p className="content">
            Knowing what foods we should and shouldn’t be eating can be really
            confusing, especially when it feels like the advice changes
            regularly. However, evidence suggests that as well as affecting our
            physical health, what we eat may also affect the way we feel.
          </p> */}
          <p>
            The cuisine of Andhra Pradesh belongs to the two Telugu-speaking
            regions of Rayalaseema and Coastal Andhra and is part of Telugu
            cuisine. The food of Andhra Pradesh is known for its heavy use of
            spices, and the use of tamarind. Seafood is common in the coastal
            region of the state. Rice is the staple food (as is with all South
            Indian states) eaten with lentil preparations such as pappu
            (lentils) and pulusu (stew) and spicy vegetables or curries. In
            Andhra, leafy greens or vegetables such as bottle-gourd and eggplant
            are usually added to dal. Pickles are an essential part of the local
            cuisine; popular among those are mango-based pickles such as avakaya
            and maagaya, gongura (a pickle made from sorrel leaves),[40]
            usirikaya (gooseberry or amla), nimmakaya (lime), and tomato pickle.
            Dahi (yogurt) is a common addition to meals, as a way of tempering
            spiciness. Breakfast items include dosa, pesarattu (mung bean dosa),
            vada, and idli.
          </p>
        </div>

        <div className="categories">
          <div className="category-section"> </div>
        </div>
      </div>
    );
}
