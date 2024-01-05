import React, { useState } from "react";

export default function App() {
    const [num1, setNum1] = useState('');
    const [operation, setOperation] = useState('+');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);

    const handleNumChange = (e) => {
        const { name, value } = e.target;
        name === "num1" ? setNum1(value) : setNum2(value);
    }

    const handleOperation = (e) => {
        const newOperation = e.target.value;
        setOperation(newOperation);
    }

    const performOperation = () => {
        let calculatedResult = 0;
        switch (operation) {
            case '+':
                calculatedResult = parseInt(num1) + parseInt(num2);
                break;
            case '-':
                calculatedResult = parseInt(num1) - parseInt(num2);
                break;
            case 'x':
                calculatedResult = parseInt(num1) * parseInt(num2);
                break;
            case '/':
                calculatedResult = parseInt(num1) / parseInt(num2);
                break;
            default:
                calculatedResult = 0;
        }
        setResult(calculatedResult);
    }

    return (
        <div className="calculator">
            <input
                type="number"
                className="input-field"
                placeholder="Enter the first number"
                name="num1"
                value={num1}
                onChange={handleNumChange}
            />
            <select className="operator-select" onChange={handleOperation}>
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
                value={num2}
                onChange={handleNumChange}
            />
            <input type="button" className="calculate-button" value={"="} onClick={performOperation} />
            <h2 className="result">Result : {result}</h2>
        </div>
    );
}
