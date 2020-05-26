import React, { Component } from 'react';
function Header (){

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Comics</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar comic" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
            </form>
        </nav>
    );
}
export default Header;