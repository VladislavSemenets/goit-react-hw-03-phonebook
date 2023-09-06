import React, { Component } from 'react';
import { Btn } from "./ContactForm.styled"

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumChange = (event) => {
    this.setState({ number: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br/>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <br/>
        <label>
          Phone
          <br/>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleNumChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br/>
        <Btn type="submit">Add contact</Btn>
      </form>
    );
  }
}


export default ContactForm;
