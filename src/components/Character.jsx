import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/character.scss';

function Character(props) {
  const { name, image } = props;
  return (
    <Link to={`/marvel/details/${name}`}>
      <div className="character">
        <img src={image} alt="Avatar" className="image" />
        <div className="middle">
          <div className="text">{name}</div>
        </div>
      </div>
    </Link>
  );
}
Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string.isRequired,
  biography: PropTypes.string,
  powers: PropTypes.array,
};
export default Character;
