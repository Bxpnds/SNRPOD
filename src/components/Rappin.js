import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../actions/templateActions'
import data from '../data.json'
import "./Rappin.css"
import { useParams
} from "react-router-dom";
// import RappinImage from '../images/SnR_Logo2.png'



const Rappin = () => {
    let { id } = useParams();
    if (!id){id = 0}
    if (!data.data[id]){id = 0}
    
    //global state variable 
    const count = useSelector(state => state.template.counter);

    //local state 
    const [title] = useState("Rappin")

    //receive dispatch function 
    const dispatch = useDispatch();

    //componentDidMount (executes once)

    useEffect(() => {

    //*componentDidUnmount - clean up function
    //   return () => {
    //     effect
    //   };
    }, [])

  return(
<div>
    <img src="/images/rappin.jpg" class="bob"></img>
    
    <h1>{Rappin}</h1>
 
    <div className="episode-div">
        <h2 className="episode-header" >{data.data[id].name}</h2>
        <h4 className="episode-header" >{data.data[id].author}</h4>
        <iframe className="episode-embed" src={data.data[id].url} frameborder="0" scrolling="no"></iframe>
    </div>    
</div>
  )
};

export default Rappin;