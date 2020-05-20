import React from 'react';
import useInitialState from '../hooks/useInitialState';

import Search from '../components/Search';
import Characters from '../components/Characters';
import Character from '../components/Character';

const API = 'http://localhost:3000/marvel';
function Marvel() {
  const characters = useInitialState(API);
  return (
    <React.Fragment>
      <Search />
      <Characters estilo="marvel" tittle="Marvel">
        {characters.map((item, i) => (
          <Character key={i} {...item} />
        ))}
      </Characters>
    </React.Fragment>
  );
}

export default Marvel;
