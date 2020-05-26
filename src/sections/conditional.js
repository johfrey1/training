import React, {Component} from "react";
class ComponentA extends Component {
    render(){
        return <a>componente a</a>
    }
}
class ComponentB extends Component {
    render(){
        return <a>componente b</a>
    }
}
function usedConditionalRendering(mostrarA) {
    if (mostrarA) {
        return <ComponentA/>
    }
    return <ComponentB/>

}
export default class  ConditionalSection extends Component {

    constructor() {
        super()
        this.state= {mostrarA:true }
    }
    render () {
        const conditionalComponent = this.state.mostrarA ? <ComponentA/> : <ComponentB/>
        return (
        <div>
            <h4>
                conditional Rendering
            </h4>
            {usedConditionalRendering(this.state.mostrarA)}
            {conditionalComponent}
        </div>
        )
    }
}