import React, { useContext } from 'react'
import { CounterContex, CounterContext} from '../CounterContext'

export default function Header(props){

    const [count, setCount] = useContext(CounterContext)

    return(
        <div className="header">
            <h3>Counter</h3>
            <div>{count}</div>
        </div>
    );

}