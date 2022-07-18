import { useState } from 'react';
import PropTypes from 'prop-types';
import './addCategory.css';

export const AddCategory = ({ addCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length < 1) return;

        addCategory(inputValue.trim());

        setinputValue('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} aria-label='form'>
                <input
                    className='input-search'
                    type='text'
                    placeholder='Buscar Gif'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
};
