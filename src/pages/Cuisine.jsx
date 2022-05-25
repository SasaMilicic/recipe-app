import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StyGrid, StyCard } from './style-pages';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { country } = useParams();

  const getCuisine = async (name) => {
    const apiRecipies = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipies = await apiRecipies.json();
    setCuisine(recipies.results);

    console.log(recipies);
  };

  useEffect(() => {
    getCuisine(country);
  }, [country]);

  return (
    <StyGrid>
      {cuisine.map(({ id, image, title }) => (
        <StyCard key={id}>
          <img src={image} alt={title} />
        </StyCard>
      ))}
    </StyGrid>
  );
}

export default Cuisine;
