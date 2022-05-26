import React, { useState } from 'react';
import { StyForm } from './style-components';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyForm onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </StyForm>
  );
}

export default Search;
