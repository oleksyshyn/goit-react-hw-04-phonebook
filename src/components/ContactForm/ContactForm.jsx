import React, {useState} from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    }

    return (
        <div className={css.contact_form}>
            <form onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleNameChange}
                        className={css.input}
                    />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleNumberChange}
                        className={css.input}
                    />
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        </div>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};