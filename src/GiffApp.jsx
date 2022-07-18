import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { Link} from "react-scroll";
import 'animate.css';

export const GiffApp = () => {
    const [categories, setCategories] = useState(['Breaking bad']);

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
            <header id='header' className='header'>
                <h1>GiffApp</h1>
                <AddCategory addCategory={handleAddCategory} />

                <button className='btn-reset' onClick={handleRemoveAll}>
                    Borrar Todo
                </button>
            </header>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                {categories.map(category => <Link className='btn-category' to={category}>{category}</Link>)}
            </div>
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
