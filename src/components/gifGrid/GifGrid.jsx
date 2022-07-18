import { useFetchGif } from '../../hooks/useFetchGif';
import { GifItem } from '../';
import './gifGrid.css'
import { Link } from 'react-scroll';

export const GifGrid = ({ category, removeCategory}) => {
    const { images, loading } = useFetchGif(category);

    return (
        <>
            {category && (
                <div className='category-title' id={category}>
                    <h3>{category}</h3>
                    <button className='btn-eliminar' onClick={()=>removeCategory(category)}>✖</button>
                    <Link className='btn-volver' to='header'>🠕</Link>
                </div>
            )}
            <div className='card-grid animate__animated animate__bounceInDown'>
                {
                loading 
                ? (<h4>Cargando...</h4>) 
                : (images.map(img => <GifItem key={img.id} {...img} />))
                }
            </div>
        </>
    );
};

