import React, { Component } from 'react';
import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title,Container } from './Phonebook.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts:parsedContacts})
    }
  }
  
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  addToContact = (newContact) => {
     const { name, number } = newContact;
   if (this.state.contacts.find((contact) => contact.name === name || contact.number === number)) {
    alert(`${name} is already in your contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook addToContact={this.addToContact} />
        <Title Title>Contacts</Title>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
