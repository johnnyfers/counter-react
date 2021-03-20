import React, { useState, useContext } from 'react';
import {CounterContext} from '../CounterContext'

export default function Counter(props){

    const [count, setCount] = useContext(CounterContext);

    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>{setCount(prev=>prev -1)}} >-</button>
            <button onClick={()=>{setCount(after=>after +1)}}>+</button>
        </div>
    );
}