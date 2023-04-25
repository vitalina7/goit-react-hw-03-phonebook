import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Label,Input,Button } from './Phonebook.styled';

export const Phonebook = ({ addToContact }) => {
  const [currentName, setCurrentName] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  const onChangeName = e => {
    setCurrentName(e.currentTarget.value);
  };

  const onChangeNumber = e => {
    setCurrentNumber(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addToContact({ id: nanoid(), name: currentName, number: currentNumber });
    setCurrentName('');
    setCurrentNumber('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            onChange={onChangeName}
            value={currentName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            onChange={onChangeNumber}
            value={currentNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type='submit'>Add contacts</Button>
      </form>
    </div>
  );
};

Phonebook.propTypes = {
  addToContact: PropTypes.func.isRequired,
};
