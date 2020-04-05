import React from 'react';
import Todo from './Todo/Todo';


const Todos = (props) => {
    let todos = <p style={{fontSize: '20px'}}>All caught up!</p>;
    let todosFinished = null;

    if (props.todos.length){
        todos = props.todos.map(todo => {
        if(todo.finished == true){
            return;
        }
            return (<Todo content={todo.content} key={todo.id} id={todo.id} delete={props.delete}
            />)
        });
    }
    if (props.todos.length){
        todosFinished = props.todos.map(todo => {
        if(todo.finished == true){
            return (<Todo finished={'true'} content={todo.content} key={todo.id} id={todo.id} delete={props.delete}/>);
        }
        return;
        });
    }

    // console.log(props.todos);


    return (
        <div style={{textAlign: 'left', marginTop: '30px'}}>
            <p style={{fontSize: '16px', color: 'grey', fontWeight: 'bold'}}>Your Todos:</p>
            {todos}

            {todosFinished}
        </div>
    );
};

export default Todos;