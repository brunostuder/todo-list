import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import Input from './Input/Input';

const form = (props) => {
        return (
            <div>
                <Input 
                    value={props.inputValue} 
                    onChange={props.inputChange} 
                    onKeyDown={props.checkIfSubmit} 
                    placeholder="Entrez une nouvelle tâche" />
            </div>
        ); 
}

export default form;