import React, { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';


const Square = (props) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);
    return (
        <button class="box" style={status ? { "background-color": 'black' } : { "background-colorr": "white" }} onClick={() => {
            setStatus(!status);
            if (status) {
                dispatch(decrement(1));
            } else {
                dispatch(increment(1));
            }
        }}>{props.name}</button>
    )
};

export default Square;