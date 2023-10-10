import React, { useState, useEffect} from 'react';
import style from "./App.module.css";
import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  

  const [contacts, setContacts] = useState([]);
  const [prevContacts, setPrevContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
   const stringifiedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    setContacts(parsedContacts);
 }, [])  
 
  useEffect(() => {
    if (contacts.length !== prevContacts.length) {
      const stringifiedContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }

    setPrevContacts(contacts);
  }, [contacts, prevContacts])


  const handleContactsFormSubmit = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevState) => [...prevState, newContact])
  };

  const handleContactDelete = (id) => {
    setContacts((prevState) => prevState.contacts.filter(contact => contact.id !== id))
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  

    return (
      <div className={style['app-container']}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleContactsFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={handleContactDelete}
        />
      </div>
    );
  }


export default App;
