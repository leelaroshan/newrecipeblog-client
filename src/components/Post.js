import React from 'react'
import marked from 'marked';
import { useParams } from 'react-router-dom';

import {useState, useEffect} from 'react';
import axios from 'axios';

import './Post.css';

export default function Post() {




  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const {_id} = useParams();



  const baseUrl="https://pacific-beach-62332.herokuapp.com/recipes"

  useEffect(() => {
    const getArticle = async () => {
      await axios
        .get(`${baseUrl}/${_id}`)
        .then((response) => {
          setArticle(response.data.data);
          setLoading(false);
        })
        .catch(console.error);
    };
    getArticle();
  }, [_id]);

  if (loading) return "Loading...";
  console.log(article);
    
    const {title,url,description,preparation} = article;
    const postdescription =  marked(preparation);
    console.log(_id, title,description,preparation) ;






    return (
       

<div className="post">
      <h2 className="title">{title}</h2>
      {url && <img src={url} className="image" alt={title}  title={title}/>}
    
      <section className="description" dangerouslySetInnerHTML={{__html:postdescription}} />
      
      
      </div>
    )
}






/*


export default function Post({recipes,index}) {

  console.log(recipes)
    const { name, featuredimage, description, ingredients } = recipes.fields;
    const postpreparation=  marked(description)
    return (
       

<div className="post">
      <h2 className="title">{name}</h2>
      {featuredimage && <img src={featuredimage.fields.file.url} className="featuredImage" alt={name}  title={name}/>}
    
      <section className="description" dangerouslySetInnerHTML={{__html:postpreparation}} />
      <p className="ingredients">{ingredients}</p>
      {/* <p>{description}</p>
      */
      
