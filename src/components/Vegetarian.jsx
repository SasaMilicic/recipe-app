import React, { useEffect, useState } from 'react';
import { StyPopular, StyCard, StyGradient } from './style-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = sessionStorage.getItem('vegetarian');
    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      sessionStorage.setItem('vegetarian', JSON.stringify(data.recipes));
      setVegetarian(data.recipes);
    }
  };

  return (
    <StyPopular>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '50px',
        }}
      >
        {vegetarian.map(({ id, title, image }) => (
          <SplideSlide key={id}>
            <Link to={'/recipe/' + id}>
              <StyCard>
                <p>{title}</p>
                <img src={image} alt={title} />
                <StyGradient />
              </StyCard>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </StyPopular>
  );
}

export default Vegetarian;
