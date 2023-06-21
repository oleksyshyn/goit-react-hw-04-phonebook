import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contactId = nanoid();
    const newContact = { id: contactId, name, number };
    const isSameName = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    if (isSameName) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const deleteContact = (contactId) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={css.contacts_title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App; 