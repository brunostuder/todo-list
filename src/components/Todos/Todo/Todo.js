import React from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    let classesTodo = [classes.Todo];
    console.log(props.finished)
    if(props.finished){
        classesTodo.push(classes.Finished);
    }
    console.log(classesTodo);
    return (
        <div className={classesTodo.join(' ')} key={props.id}>
            <span className={classes.Content} >
                {props.content}
            </span>
            <a 
                    className={classes.DeleteButton} 
                    onClick={() => props.delete(props.id)}>X</a>
            {/* <span className={classes.Actions}><a className={classes.DeleteButton} onClick={() => props.delete(props.id)}>X</a></span> */}
        </div>
    );
};

export default Todo;