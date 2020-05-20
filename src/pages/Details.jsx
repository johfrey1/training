import React from 'react';
import './styles/details.scss';
function Details(props) {
  const { name } = props.match.params;
  return (
    <div>
      <div className="text__url">parametro url {name}</div>
    </div>
  );
}

export default Details;
