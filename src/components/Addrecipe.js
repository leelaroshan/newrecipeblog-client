

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";






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
         <div className="form-div">
           <TextField
             label="Title"
             variant="outlined"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             style={{
               marginBottom: '20px',
               marginTop: '20px',
               width: '300px',
               height: '50px',
             }}
           />
           <TextField
             label="Image"
             variant="outlined"
             value={url}
             onChange={(e) => setUrl(e.target.value)}
             style={{
               marginBottom: '20px',
               marginTop: '20px',
               width: '300px',
               height: '50px',
             }}
           />
           <TextField
             label="Description"
             variant="outlined"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             style={{
               marginBottom: '20px',
               marginTop: '20px',
               width: '300px',
               height: '50px',
             }}
           />
           <TextareaAutosize
             maxRows={10}
             aria-label="maximum height"
             placeholder="Add Preparation"
             defaultValue="add preparation."
             value={preparation}
             onChange={(e) => setPreparation(e.target.value)}
             style={{ width: '300px', height: '200px', marginBottom: '30px' }}
           />

           <Button
             type="submit"
             variant="contained"
             style={{
               color: 'black',
               backgroundColor: 'darkolivegreen',
               width: '300px',
               fontSize: '20px'
             }}
           >
             Add
           </Button>
         </div>
       </form>

       {/* <h4>Title: </h4>
            <input type="text" name="title"   />
          
          <br></br>
          
          <h4>Image: </h4>
          <input type="string" name="url"   value={url}        onChange={(e) =>setUrl(e.target.value)} />
          

         


          
            <h4>Description</h4>
            <textarea type="text" name="description"  value={ description}   onChange={(e) =>setDescription(e.target.value)} />
          

          <br></br>


          <h4> Preparation:</h4>
           
          <textarea type="text" name="preparation" value={preparation} onChange={(e) =>setPreparation(e.target.value)} />
          

          
          <button type="submit" className="add-btn">Add Recipe</button>

            </form> */}
     </div>
   );
}
