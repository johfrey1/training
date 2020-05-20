import React from 'react';
import './styles/characters.scss';
import Character from './Character';
function Characters(props) {
  const { children, estilo, tittle } = props;
  return (
    <div className="container">
      <h2 className="title">{tittle}</h2>
      <section className={estilo}>{children}</section>
    </div>
  );
}

export default Characters;
