import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '../../src/components/modal/Modal';

describe('Test en <Modal />', () => {
    
    test('Vericar si abre el modal', () => {
        const isOpen = true;
        render(<Modal isOpen={isOpen} />);
        const article = screen.getByRole('article');

        expect(article.className).toContain('is-open');
    });

    test('Verificar si es llamada la funcion closeModal', () => {
        const closeModal = jest.fn();
        
        render(<Modal closeModal={closeModal} />);
        const btnCloseModal = screen.getByRole('button', { name: '✖' });

        fireEvent.click(btnCloseModal);

        expect(closeModal).toHaveBeenCalled();
    });
});
