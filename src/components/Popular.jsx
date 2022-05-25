import React, { useEffect, useState } from 'react';
import { StyPopular, StyCard, Gradient } from './style-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = sessionStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      sessionStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
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
          <SplideSlide key={id}>
            <StyCard>
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
