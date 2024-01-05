import React, { Component } from "react"
import "./App.css"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: '',
            operation: '+',
            num2: '',
            result: 0
        }
    }

    handleNumChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleOperation = (e) => {
        let newOperation = e.target.value;
        this.setState({ operation: newOperation });
    }

    operation = () => {
        const { num1, num2, operation } = this.state;
        let result = 0;
        switch (operation) {
            case '+':
                result = parseInt(num1) + parseInt(num2);
                break;
            case '-':
                result = parseInt(num1) - parseInt(num2);
                break;
            case 'x':
                result = parseInt(num1) * parseInt(num2);
                break;
            case '/':
                result = parseInt(num1) / parseInt(num2);
                break;
            default:
                result = 0;
        }
        this.setState({ result });
    }

    render() {
        return (
            <div className="calculator">
                <input
                    type="number"
                    className="input-field"
                    placeholder="Enter the first number"
                    name="num1"
                    value={this.state.num1}
                    onChange={this.handleNumChange}
                />
                <select className="operator-select" onChange={(e) => this.handleOperation(e)}>
                    <option value={"+"}>+</option>
                    <option value={"-"}>-</option>
                    <option value={"x"}>x</option>
                    <option value={"/"}>/</option>
                </select>
                <input
                    type="number"
                    className="input-field"
                    placeholder="Enter the second number"
                    name="num2"
                    value={this.state.num2}
                    onChange={this.handleNumChange}
                />
                <input type="button" className="calculate-button" value={"="} onClick={this.operation} />
                <h2 className="result">Result : {this.state.result}</h2>
            </div>
        );
    }
}
