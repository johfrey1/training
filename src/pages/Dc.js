import React, { Component, useState, useEffect } from 'react';
import Header from "../Components/Header";
import logo from "../logo.svg";
import UseInitialState from "../Hooks/UseInitialState";

function  Dc(){
    const api = 'http://localhost:3001/dc';
    const article = UseInitialState(api);
    const listItems = article.map((number) =>
        <div className="col-sm-3">
            <div className="card" >
                <img src={number.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{number.name}</h5>
                    <a href={number.url} className="btn btn-primary">Ver Mas..</a>
                </div>
            </div>
        </div>

    );

    return (
        <div className = "App">
            <Header/>
            <header className = "App-header" >
                <div  className="row ">{listItems}</div>
            </header>
        </div>
    )
}
export default Dc;