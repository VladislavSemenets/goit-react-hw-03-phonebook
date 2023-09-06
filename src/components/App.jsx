import React, { Component } from 'react';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { nanoid } from 'nanoid';
import {Div} from './App.styled'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  };

  addContact = (name, number) => {
    const isNameExists = this.state.contacts.some(contact => contact.name === name);
  
    if (isNameExists) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    };
  
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };
  
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };
  

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };
  
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  
    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search contacts by name"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact} // Передаємо обробник до компоненту ContactList
        />
      </Div>
    );
  }
  
}
