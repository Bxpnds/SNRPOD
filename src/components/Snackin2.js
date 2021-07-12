import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Warning from "./components/Warning";

function Snackin2() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [warning, setWarning] = useState("");

  const APP_ID = "f2b04bb9";
  const APP_KEY = "6d230726794b31d90bff5455887293f9";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setWarning("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setWarning("");
    } else {
      setWarning("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {warning !== "" && <Warning warning={warning} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default Snackin2;