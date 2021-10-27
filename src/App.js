
import {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Navbar  from './components/Navbar';


import Post from './components/Post';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Recipe from './components/Recipe';
import Addrecipe from './components/Addrecipe';





function App() {

  const [articles, setArticles] = useState([])

useEffect(() => {
  
  axios.get("https://pacific-beach-62332.herokuapp.com/recipes")
  .then(json=> {
  console.log(json.data.data[0])
  

  setArticles(json.data.data)
  })
  .catch((err)=>console.log(err)) 
  
}, [])






  return (
    <div className="App">

     <div className="container">
       
     
     <div>
       <Header />

       <div className="nav-switch-div"> 
       <Navbar />
       <Switch>
       <Route  exact path="/">
      <Home  />
      </Route>
      <Route  exact path="/home">
      <Home  />
      </Route>
      <Route   path="/addrecipe">
      <Addrecipe />
      </Route>
      <Route path="/categories">
      <Recipe recipes={articles}/>
      </Route>

      <Route path="/recipes/:_id">
      <Post   />

      </Route>



      <Route path="/about">
      <About />
      </Route>
      <Route path="/contact">
      <Contact  />
      </Route>
       </Switch>
       </div>
       

   

     
   <Footer />
       
      
     </div> 
         </div>
      
    </div>
  );
}

export default App;
