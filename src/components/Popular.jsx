import React, { useEffect, useState } from 'react';
import { StyPopular, StyCard, Gradient } from './style-popular';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <StyPopular>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '50px',
        }}
      >
        {popular.map(({ id, title, image }) => (
          <SplideSlide>
            <StyCard key={id}>
              <p>{title}</p>
              <img src={image} alt={title} />
              <Gradient />
            </StyCard>
          </SplideSlide>
        ))}
      </Splide>
    </StyPopular>
  );
}

export default Popular;
