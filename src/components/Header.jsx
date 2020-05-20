import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';

function Header(props) {
  const { title } = props;
  return (
    <Link to="/">
      <header className="header">
        <h1 className="display-4">{title}</h1>
      </header>
    </Link>
  );
}

export default Header;
