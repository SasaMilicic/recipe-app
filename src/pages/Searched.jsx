import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyGrid, StyCard } from './style-pages';

function Searched() {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  const { search } = useParams();

  const getSearched = async (name) => {
    const apiRecipies = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipies = await apiRecipies.json();
    setSearchedRecipies(recipies.results);
  };

  useEffect(() => {
    getSearched(search);
  }, [search]);

  return (
    <StyGrid>
      {searchedRecipies.map(({ id, image, title }) => (
        <StyCard key={id}>
          <Link to={'/recipe/' + id}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </StyCard>
      ))}
    </StyGrid>
  );
}

export default Searched;
