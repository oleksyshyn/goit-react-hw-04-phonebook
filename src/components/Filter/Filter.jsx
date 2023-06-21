import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <div>
            <p className={css.filter_title} >Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};