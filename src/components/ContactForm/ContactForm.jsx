import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <div className={css.contact_form}> 
                <form onSubmit={this.handleSubmit}>
                    <label className={css.label}>
                        Name 
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleInputChange}
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
                            value={this.state.number}
                            onChange={this.handleInputChange}
                            className={css.input}
                        />
                    </label>
                    <button type="submit" className={css.button}>Add contact</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};