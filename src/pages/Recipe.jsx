import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyDetails, StyButton, StyInfo } from './style-pages';

function Recipe() {
  const [
    { title, image, extendedIngredients, summary, instructions },
    setDetails,
  ] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let { name } = useParams();

  const getDetails = async () => {
    const fetchRecipeDetails = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipieDetails = await fetchRecipeDetails.json();
    setDetails(recipieDetails);
  };

  const checkActTab = (tab) => (activeTab === tab ? 'active' : '');

  useEffect(() => {
    getDetails();
  }, [name]);

  return (
    <StyDetails>
      <div>
        <h2> {title} </h2>
        <img src={image} alt={title} />
      </div>
      <StyInfo>
        <StyButton
          className={checkActTab('instructions')}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </StyButton>
        <StyButton
          className={checkActTab('ingredients')}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </StyButton>
        {checkActTab('instructions') && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: summary }} />
            <p dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
        )}

        {checkActTab('ingredients') && (
          <ul>
            {extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}
      </StyInfo>
    </StyDetails>
  );
}

export default Recipe;
