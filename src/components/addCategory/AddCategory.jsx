import { useState } from 'react';
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
            <form onSubmit={handleSubmit}>
                <input className='input-search'
                    type='search'
                    placeholder='Buscar Gif'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};
