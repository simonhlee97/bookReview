import React, { Component } from "react";
import "../styles/Home.css";

import { Button } from 'semantic-ui-react';


class Counter extends Component {
    constructor(props) {
        super(props);
        // re-bind the 3 methods below
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.resetCount = this.resetCount.bind(this);

        // Sec4, Lec33 - Adding Component State
        this.state = {
            count: 0
        };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    resetCount() {
        // best practice (passing in a function (instead of an object) to this.setState)
        this.setState(() => {
            return {
                count: 0
            };
        });
        
    };

    

    render() {
        return (
  
            <div className="Home">
                <h1>Count: {this.state.count}</h1>
                <Button onClick={this.addOne}>+1</Button>
                <Button onClick={this.minusOne}>-1</Button>
                <Button onClick={this.resetCount}>Reset</Button>
                
                
            </div>
        );
    }
}

export default Counter;