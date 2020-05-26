import React, { Component } from 'react'
import imageDc from '../assets/images/dc-comics.jpg';
import imageMarvel from '../assets/images/universo-marvel-comics-personajes.jpg';
const  widthCards= {width: "500px"};
function Cards (){
    return (
        <div className="row">
            <div className="col-sm-6">
            <div className="card" style={widthCards}>
                <img src={imageDc} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">DC </h5>
                    <p className="card-text">Comics</p>
                    <a href="/dc" className="btn btn-primary">Ver DC</a>
                </div>
            </div>
        </div>
            <div className="col-sm-6">
                <div className="card" style={widthCards}>
                    <img src={imageMarvel} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Marvel</h5>
                    <p className="card-text">Comics</p>
                    <a href="/marvel" className="btn btn-primary">Ver MARVEL</a>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Cards;