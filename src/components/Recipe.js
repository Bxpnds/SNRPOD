import React from 'react'

export const Recipe = (props) => {
    return (
        <div className="recipe">
                  <h2>{props.recipe.label}</h2>
                  <img src= {props.recipe.image}></img>
                    <a href={props.recipe.url} target="_blank" rel="noopener noreferrer">Click here for recipe</a>
              </div>
    )
}


export default Recipe;