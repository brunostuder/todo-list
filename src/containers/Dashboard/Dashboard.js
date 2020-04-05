import React, { Component } from 'react';
import Form from "../../components/Form/Form";
import Todos from '../../components/Todos/Todos';
import classes from './Dashboard.module.css';

class Dashboard extends Component {
    state = {
        newTaskContent: null,
        inputValue: '',
        todos: {}
    }

    componentWillMount() {
        const cachedTodos = JSON.parse(localStorage.getItem('todos'));
        console.log(cachedTodos);
        // cachedTodos = JSON.stringify(cachedTodos);        
        if (cachedTodos) {
            this.setState({todos: cachedTodos});
            console.log(this.state);
        } else {
            this.setState({
                todos: []
                
        });
    }
    }

    generateId() {
        return Math.random().toString(36).slice(2);
    }

    addToDo = (val) => {
        let todos = [...this.state.todos];
        let newId = this.generateId();
        let newTodo = {content: val, id: newId, finished: false};
        todos.push(newTodo);
        this.setState({todos: todos});
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteHandler = (id) => {
        let todos = this.state.todos;
        let updatedTodos = [];
        for (let todo of todos) {
            if(todo.id === id){
                if(todo.finished == true){
                    continue;
                }
                todo.finished = true;
            }
            updatedTodos.push(todo);
        }
        console.log(updatedTodos);
        this.setState({todos: updatedTodos});
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addTaskHandler();
            this.setState({inputValue: ''});
        }
      }

    addTaskHandler = () => {
        this.addToDo(this.state.newTaskContent);
        this.setState({inputValue: ''});
    }

    changeHandler (event) {
        this.setState({newTaskContent: event.target.value});
        this.setState({inputValue: event.target.value});
    }

    render() {
        // console.log(this.state.todos);

        return (
            
            <div className={classes.Dashboard}>
                <h1>To-Do List</h1>
                <Form 
                    addToDo={this.addToDo} 
                    inputChange={(event) => this.changeHandler(event)}
                    inputValue={this.state.inputValue}
                    checkIfSubmit={(e) => this._handleKeyDown(e)}/>
                <Todos todos={this.state.todos} delete={this.deleteHandler}/>
                <div style={{borderTop: '2px red dashed', paddingTop: '50px', marginTop: '50px', fontSize: '10px'}}>Bruno Studer.</div>
            </div>
        );
    }
}

export default Dashboard;