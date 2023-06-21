import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

function ContactsList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                < ContactsListItem 
                    key={id}
                    contactId={id} 
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    )
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};