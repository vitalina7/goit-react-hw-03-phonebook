import PropTypes from 'prop-types';
import { Label,Input } from './Phonebook.styled';
export const Filter = ({ filter, onChange }) => {
    return (
        <div>
             <Label>
         Find contacts by name
          <Input
            type="text"
            name="filter"
            onChange={onChange}
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}