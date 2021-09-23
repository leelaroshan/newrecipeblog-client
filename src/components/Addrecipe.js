

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Addrecipe.css'

export default function Addrecipe() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
   const [description, setDescription] = useState("");
    const [preparation, setPreparation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
          title,
          url,
          description,
          preparation,
        };
         
         
        axios
        .post("https://pacific-beach-62332.herokuapp.com/recipes", newRecipe)
        .then((res) => {
          console.log(res);
        }).catch((err)=> console.log(err, err.response));
  
      setTitle("");
      setUrl("");
      setDescription("");
      setPreparation("");
      
  
      alert("Your recipe has been added.");
    };





    return (
        <div className="form-container">
            <h2>Add your own Recipe</h2>

            <form onSubmit={handleSubmit}>
           
            <h4>Title: </h4>
            <input type="text" name="title"  value={title} onChange={(e) =>setTitle(e.target.value)} />
          
          <br></br>
          
          <h4>Image: </h4>
          <input type="string" name="url"   value={url}        onChange={(e) =>setUrl(e.target.value)} />
          

         


          
            <h4>Description</h4>
            <textarea type="text" name="description"  value={ description}   onChange={(e) =>setDescription(e.target.value)} />
          

          <br></br>


          <h4> Preparation:</h4>
           
            <textarea type="text" name="preparation" value={preparation} onChange={(e) =>setPreparation(e.target.value)} />
          

          
          <button type="submit">Add Recipe</button>

            </form>
         
      
        </div>
    )
}
