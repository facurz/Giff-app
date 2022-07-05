
import { useFetchGif } from '../hooks/useFetchGif.js';
import { GifItem } from './GifItem';
import './gifGrid.css'

export const GifGrid = ({ category, removeCategory, index}) => {
    const { images, loading } = useFetchGif(category);

    const handleRemove = ()=>{
        removeCategory(index);
    }

    return (
        <>
            {category && (
                <div className='category-title'>
                    <h3>{category}</h3>
                    <button className='btn-eliminar' onClick={handleRemove}>X</button>
                </div>
            )}
            <div className='card-grid animate__animated animate__bounceInDown'>
                {loading ? (
                    <h3>Cargando...</h3>
                ) : (
                    images.map(img => <GifItem key={img.id} {...img} />)
                )}
            </div>
        </>
    );
};
