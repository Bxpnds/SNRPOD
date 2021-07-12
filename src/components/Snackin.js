import React, {useEffect, useState} from "react";
import { Form, Col, Button } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../actions/templateActions'
import Recipe from './Recipe';
import "./Snackin.css"
import {v4 as uuidv4} from 'uuid';



    
  

const Snackin = () => {
    const[query, setQuery] = useState("")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState(null);
    const [recipes, setRecipes] = useState([]);
    

  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    
    
const fetchApiData = () =>{
// const App_Id = "f2b04bb9"
// const App_Key = "6d230726794b31d90bff5455887293f9"


      fetch(`https://api.edamam.com/search?app_id=f2b04bb9&app_key=6d230726794b31d90bff5455887293f9&q=${query}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      

    
    const onChange = (e) =>{
        setQuery(e.target.value)
    }
    const onSubmit = e =>{
          e.preventDefault();
          console.log(query)
          fetchApiData()
          
      }
      return (
         
<div className='App'>
    <video  autoPlay loop muted style={{
                        position: "absolute",
                        width: "100%",
                        // left: "50%",
                        // top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transForm: "translate(-50%,  -50%)",
                        zIndex: "-1"

                    }} src="/videos/Movie.mp4"> 
    </video> 
        <div class="center"> 
        <h1>Whatcha wanna eat?</h1>
                <form className="search-form" onSubmit={onSubmit}>
                    <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} 
                    value={query}/>
                    <input type="submit" value="search" />
                </form>        
        </div>
        <br />
         
         <div className="recipes">
                
            
            {items && items.hits.map(item =>(
                        <Recipe recipe={item.recipe} key={uuidv4()} /> 
                    ))};

            </div>
                
                
</div>
                );
    }
    //global state variable 
    // const count = useSelector(state => state.template.counter);

    //local state 
    // const [title] = useState("Snackin")

    //receive dispatch function 
    // const dispatch = useDispatch();

    //componentDidMount (executes once)

    // useEffect(() => {

    //*componentDidUnmount - clean up function
    //   return () => {
    //     effect
    //   };
    // }, [])

 
};

export default Snackin;