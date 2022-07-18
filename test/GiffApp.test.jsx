import { render, screen, fireEvent } from '@testing-library/react';
import { GiffApp } from '../src/GiffApp';

describe('Test estado inicial en <GiffApp/>', () => {
    test('Verificar estado inicial', () => {
        const initialState = 'Breaking bad';

        render(<GiffApp />);
        const category = screen.getByRole('heading', { level: 3 }).innerHTML;

        expect(category).toBe(initialState.trim());
    });
});


describe('Test funcionalidades en <GiffApp/>', () => {
    
    let inputValue1 = 'Goku';
    let inputValue2 = 'Vegeta';
    let input;
    let form;
    let btnBorrarCategoria;
    let btnBorrarTodo;

    beforeEach(() => {
        render(<GiffApp />);
        input = screen.getByRole('textbox');
        form = screen.getByRole('form');
        btnBorrarCategoria = screen.getByRole('button', { name: '✖' });
        btnBorrarTodo = screen.getByRole('button', { name: 'Borrar Todo' });

        fireEvent.change(input, { target: { value: inputValue1 } });
        fireEvent.submit(form);
        fireEvent.change(input, { target: { value: inputValue2 } });
        fireEvent.submit(form);
    });

    test('Verificar cambio en el estado de categorías al ejecutar handleAddCategory', () => {

        const categories = screen.getAllByRole('heading', { level: 3 });
        expect(categories.length).toBeGreaterThan(2);
    });

    test('Testear funcionalidad borar categoría.', () => {

        fireEvent.click(btnBorrarCategoria);
        let categories = screen.getAllByRole('heading', { level: 3 });
        expect(categories.length).toBe(2);
    });

    test('Testear funcionalidad borrar todo.', () => {

        fireEvent.click(btnBorrarTodo);

        const categories = screen.queryAllByRole('heading', { level: 3 });
        expect(categories.length).toBe(0);
    });
});
