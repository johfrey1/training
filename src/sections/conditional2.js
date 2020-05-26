import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class LoginButton extends Component {
    render () {
        return <button variant="primary">Iniciar Sección</button>
    }
}

class LogoutButton extends Component {
    render () {
        return (
            <div>
                <p>Bienvenido, usuario!</p>
                <button variant="primary">Cerrar Sección</button>
            </div>
        )
    }
}

export default class ConditionalSection2 extends Component {
    constructor() {
        super()
        this.state = { isUserLogged: false }
    }

    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ? <LogoutButton />
                    : <LoginButton />
                }
            </div>
        )
    }
}