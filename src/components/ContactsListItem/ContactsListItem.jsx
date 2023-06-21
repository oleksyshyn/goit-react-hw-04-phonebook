import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';

const ContactsListItem = ({ contactId, name, number, onDeleteContact }) => {
    return (
        <li className={css.contacts_list_item}>
            <p className={css.contact}>{name}: {number}</p>
            <button className={css.button} onClick={() => onDeleteContact(contactId)}>Delete</button>
        </li>
    )
}

export default ContactsListItem;

ContactsListItem.propTypes = {
    contactId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};