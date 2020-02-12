import React, { useState, useEffect } from 'react';
import RecipeLayout from './RecipeLayout';
import './recipe.css';
const  Recipe = ()=> {

const APP_ID = 'af0dde09';
const APP_KEY = '1ec497d41adcd35bb754959cec0e4bd9';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');


const urlRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
 // Similar to componentDidMount and componentDidUpdate:
 useEffect(() => {
// console.log("useEffect");
getRecipe();
},[query]);

const getRecipe = async () =>{
  const response = await fetch(urlRequest)
  const data = await response.json();
  // console.log(data.hits);
  setRecipes(data.hits);

}

const updateSearch = (e) =>{
  setSearch(e.target.value);
   //console.log(search);
}

const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('');
}

  return (
    <div className="recipe-app">
    <div className="row">
      <form className="search-form col s12" action="#" onSubmit={getSearch}>
      <div className="row">
      <div className="form-group col-md-10">
      <input type="text" className="form-control" placeholder="Search like for chicken, peanut" value={search} onChange={updateSearch} />
      </div>
      <div className="form-group col-md-2">
      <button className="btn btn-outline-primary" type="submit"><i className="material-icons">search</i></button>
      </div>
      </div>
      </form>
</div>
  <div className="row">
      {recipes.map(recipe => (
          <RecipeLayout
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      )
    )}
    </div>
    </div>

  )
}

export default Recipe;
