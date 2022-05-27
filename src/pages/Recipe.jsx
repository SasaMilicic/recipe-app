import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StyDetails, StyButton, StyInfo } from './style-pages';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let { name } = useParams();

  console.log(details);
  console.log(details.extendedIngredients);

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
        <h2> {details.title} </h2>
        <img src={details.image} alt={details.title} />
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
            <p dangerouslySetInnerHTML={{ __html: details.summary }} />
            <p dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}

        {checkActTab('ingredients') && (
          <ul>
            {details.extendedIngredients.map((ing) => (
              <li key={ing.id}>{ing.original}</li>
            ))}
          </ul>
        )}
      </StyInfo>
    </StyDetails>
  );
}

export default Recipe;
