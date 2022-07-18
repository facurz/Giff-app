import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGif } from '../../src/hooks/useFetchGif';

describe('Test en hook useFetchGif', () => {
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGif('One Punch'));
        // console.log(result);
        const { images, loading } = result.current;

        expect(images.length).toBe(0);
        expect(loading).toBeTruthy();
    });

    test('Debe regresar un arreglo de imágenes y el loading en false', async () => {
        const { result } = renderHook(() => useFetchGif('One Punch'));

        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        );

        const {images, loading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
        });
});
