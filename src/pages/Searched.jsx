import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  const { search } = useParams();

  const getSearched = async (name) => {
    const apiRecipies = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipies = await apiRecipies.json();
    setSearchedRecipies(recipies.results);

    console.log(searchedRecipies);
  };

  useEffect(() => {
    getSearched(search);
  }, [search]);

  return (
    <div>
      {searchedRecipies.map((recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
}

export default Searched;
