import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {increment , decrement} from "./actions"

export default function Counter(){
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    const [pas, setPas] = useState(1); 

    const handlePas = (event) => {
        setPas(parseInt(event.target.value))
    }
    return(
        <div>
            Pas : <input type="text" value={pas} onChange={(event)=>handlePas(event)}/>
            <h1>Mon Counter : {counter}</h1>
            <button onClick={() => dispatch(increment(pas))}>increment</button>
            <button onClick={() => dispatch(decrement(pas))}>decrement</button>
        </div>
    )
}