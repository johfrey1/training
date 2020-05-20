import { useState, useEffect } from 'react';

function useInitialState(API) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);
  return characters;
}

export default useInitialState;
