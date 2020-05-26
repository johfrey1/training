import React, { Component } from 'react';

import logo from '../logo.svg';
import '../assets/style/App.css';


//Components
import Header from "../Components/Header";
import Container from   "../Components/Container"

import ConditionalSection from "../sections/conditional";
import ConditionalSection2 from "../sections/conditional2";

class Texto extends Component{
    render(){
        return <h1> Hello, { this.props.name } {this.props.number} </h1>;
    }
}
class Contador extends  Component {
    constructor() {
        super()
        this.state = {contador: 1}
    }

    render() {
        return <span>{this.state.contador}</span>
    }
}

function Home() {
    return (
        <div className = "App">
            <Header/>
            <header className = "App-header" >
                <img src = { logo }
                     className = "App-logo"
                     alt = "logo" />
                <Container/>
            </header>
            <Texto name="john fredy"
                   number={2}/>
            <Contador/>
            <ConditionalSection/>
            <ConditionalSection2/>
        </div>
    );
}

export default Home;
