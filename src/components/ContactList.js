import PropTypes from 'prop-types';
import React from 'react';
import {ContactsList, ContactItem,Button } from './Phonebook.styled';
export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ContactsList>
            {contacts.map(contact => {
                return (
                    <div key={contact.id}>
                       <ContactItem >
                      <p>{contact.name}:{contact.number}</p>
                      <Button button type="submit" onClick={() => { deleteContact(contact.id); }}>Delete</Button>
</ContactItem>
                    </div>
                )
            }
)}
        </ContactsList>
    )



}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact:PropTypes.func.isRequired,
}