import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { country } = useParams();

  const getCuisine = async (name) => {
    const apiRecipies = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipies = await apiRecipies.json();
    setCuisine(recipies.results);
  };

  useEffect(() => {
    getCuisine(country);
  }, [country]);

  return <div>Cuisine</div>;
}

export default Cuisine;
