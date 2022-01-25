import React from 'react';
import './Recipe.css';
import { Link } from 'react-router-dom';

export default function ({ recipes }) {
  console.log(recipes);

  return (
    <div className="categories-container">
      <h4 className="hh"> Breakfast Recipes</h4>
      <div className="containertop">
        <div className="background">
          {/* {recipes.map((recipe, index) => (
            <div className="recipe_card" key={index}>
              <div className="card_img_div">
                <img
                  src={recipe.url}
                  width="200px"
                  height="200px"
                  alt={recipe.title}
                  className="card-img"
                />
              </div>
              <h3 className="recipe_title">{recipe.title}</h3>

              <Link to={`recipes/${recipe._id}`}>
                <button className="readbtn">View Recipe </button>
              </Link>
            </div>
          ))} */}

          {recipes.map((recipe, index) => (
            <div class="recipe_card_container">
              <div class="recipe_hover_card">
                <div class="recipe_image">
                  <img src={recipe.url}  />
                </div>
                <div class="recipe_content">
                  <h3>{recipe.title}</h3>
                  <Link to={`recipes/${recipe._id}`}>
                    <button className="readbtn">View Recipe </button>
                  </Link>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

// const result = user.filter(user=> user.name === "search")
// name, featuredimage, description, ingredients
//<p>{filteredRecipe.fields.description}</p>

/*


{recipes.filter(one => one.fields.name.includes('Idly')).map((filteredRecipe, index) => (
    
    <div className="card"> 
    <h3 key={index}>{filteredRecipe.fields.name}</h3>
       <img key={index} src={filteredRecipe.fields.image.fields.file.url} 
     width="200px" height="200px" 
      alt={filteredRecipe.fields.name}
      className="card-img" /> 

<button className="readbtn">Read </button>

      

    
      </div>
        <Link to="/dashboard">
     <button type="button">
          Click Me!
     </button>
 </Link>
    
    
  ))} 
  



*/
