import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiffApp = () => {
    const [categories, setCategories] = useState(['']);

    const handleAddCategory = value => {
        setCategories([value, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GiffApp</h1>

            <AddCategory addCategory={handleAddCategory} />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
