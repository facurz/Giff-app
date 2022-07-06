import { useFetchGif } from '../../hooks/useFetchGif';
import { GifItem } from '../gifItem/GifItem';
import './gifGrid.css'

export const GifGrid = ({ category, removeCategory}) => {
    const { images, loading } = useFetchGif(category);

    return (
        <>
            {category && (
                <div className='category-title'>
                    <h3>{category}</h3>
                    <button className='btn-eliminar' onClick={()=>removeCategory(category)}>X</button>
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
