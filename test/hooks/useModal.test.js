import { renderHook} from '@testing-library/react';
import { useModal} from '../../src/hooks/useModal';

describe('Test en hook useModal', () => {

    test('Verificar el estado inicial', () => {
        
        const { result } = renderHook(() => useModal());
        // console.log(result);
        const [ bolean ] = result.current;
        // console.log(bolean);

        expect(bolean).toBe(false);
    });

    
});
