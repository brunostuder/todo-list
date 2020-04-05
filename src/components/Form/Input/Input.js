import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            <input className={classes.Input} value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} placeholder={props.placeholder}/>
            <p>Press ENTER to add a new todo</p>
        </div>
    );
};

export default Input;