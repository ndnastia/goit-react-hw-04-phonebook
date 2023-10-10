import React, { useState} from 'react';
import style from "./ContactForm.module.css";


export const ContactForm = ({onSubmit}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChangeName = event => {
        setName(event.target.value);  
    }
     const handleInputChangeNumber = event => {
        setNumber(event.target.value);
        
    }


    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
    //    onSubmit(name, number)={onSubmit};
        setName('');
        setNumber('');
       
    }

    
        return (
            <div className={style['contact-container']}>
            <form onSubmit={handleSubmit}> 
                <h2>Name</h2>
                <label>
                    <input onChange={handleInputChangeName} value={name} type="text" name="name" required />
                </label>
            
        <h2>Number</h2>
                <label>
                   <input onChange={handleInputChangeNumber} value={number} type="tel" name="number" required /> 
            </label>
            
        <button type="submit">Add conact</button>
            </form>
        
        </div>
        )
    
}

export default ContactForm;