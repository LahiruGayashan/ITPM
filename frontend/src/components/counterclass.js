import React from "react";


class CounterClass extends React.Component {
    constructor(){
        super();
        this.state = {
            Number: 0
        }
    }
    render() {
        return (
            <div>
             <h1>Counter = {this.state.Number} </h1>
            </div>
        )
    }

}