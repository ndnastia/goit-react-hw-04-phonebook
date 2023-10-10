import React, { Component } from 'react';
import style from "./ContactForm.module.css";


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = event => {
        this.setState({
        [event.target.name]: event.target.value,
    });
    }

    handleSubmit = event => {
        event.preventDefault();
       const { name, number } = this.state;
       this.props.onSubmit(name, number);
    
        this.setState({
            name: "",
            number: "",
        })
        
    }

    render() {
        return (
            <div className={style['contact-container']}>
            <form onSubmit={this.handleSubmit}> 
                <h2>Name</h2>
                <label>
                    <input onChange={this.handleInputChange} value={this.state.name} type="text" name="name" required />
                </label>
            
        <h2>Number</h2>
                <label>
                   <input onChange={this.handleInputChange} value={this.state.number} type="tel" name="number" required /> 
            </label>
            
        <button type="submit">Add conact</button>
            </form>
        
        </div>
        )
    }
}