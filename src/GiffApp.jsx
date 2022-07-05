import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'animate.css';

export const GiffApp = () => {
    const [categories, setCategories] = useState(['']);

    const handleAddCategory = value => {
        setCategories([value, ...categories]);
    };

      const handleRemove = index => {
        const value = [...categories];
        value.splice(index, 1);
        setCategories(value);

        
        
      };

    const handleRemoveAll = ()=>{
        setCategories(['']);
    }
    


    return (
        <>
        <header className='header'>
        <h1>GiffApp</h1>
        <AddCategory addCategory={handleAddCategory} />

            <button className='btn-reset' onClick={handleRemoveAll}>Borrar Todo</button>
        </header>
            

            

            {categories.map((category, index) => (
                <GifGrid key={category} category={category} removeCategory={handleRemove} index={index} />
            ))}
        </>
    );
};
