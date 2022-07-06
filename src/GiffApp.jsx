import React, { useState } from 'react';
import { AddCategory } from './components/addCategory/AddCategory';
import { GifGrid } from './components/gifGrid/GifGrid';
import 'animate.css';

export const GiffApp = () => {
    const [categories, setCategories] = useState(['Breaking Bad']);

    const handleAddCategory = value => {
        setCategories([value, ...categories]);
    };
    const handleRemove = categoryToRemove => {
        setCategories(
            categories.filter(category => category !== categoryToRemove)
        );
    };

    const handleRemoveAll = () => {
        setCategories(['']);
    };

    return (
        <>
            <header className='header'>
                <h1>GiffApp</h1>
                <AddCategory addCategory={handleAddCategory} />

                <button className='btn-reset' onClick={handleRemoveAll}>
                    Borrar Todo
                </button>
            </header>

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                    removeCategory={handleRemove}
                />
            ))}
        </>
    );
};
