import {useFetchGif} from '../hooks/useFetchGif.js'
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    
  const {images, loading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                loading 
                ? <h3>Cargando...</h3> 
                : images.map(img => (
                    <GifItem key={img.id} {...img} />
                ))
                }
            </div>
        </>
    );
};
