import { render, screen, fireEvent } from '@testing-library/react';
import { GiffApp } from '../src/GiffApp';


describe('Test en <GiffApp/>', () => {
    
    test('Verificar estado inicial', () => {
        
        const initialState = 'Breaking bad';
        
        render(<GiffApp/>);
        const category = screen.getByRole('heading', {level: 3}).innerHTML;
        
        expect(category).toBe(initialState.trim());
    });
    

    
    test('Verificar cambio en el estado de categorías al ejecutar handleAddCategory', () => {
        
        const inputValue = 'Goku';
        render(<GiffApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        const categories = screen.getAllByRole('heading', {level: 3});
        
        expect(categories.length).toBeGreaterThan(1);
    });


    test('Testear funcionalidad borar categoría.', () => {
        
        const inputValue1 = 'Goku';
        const inputValue2 = 'Vegeta';
        render(<GiffApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const btnBorrarCategoria = screen.getByRole('button', {name:'✖'})
        
        fireEvent.change(input, {target: {value: inputValue1}});
        fireEvent.submit(form);
        fireEvent.change(input, {target: {value: inputValue2}});
        fireEvent.submit(form);
        fireEvent.click(btnBorrarCategoria);
        
        let categories = screen.getAllByRole('heading', {level: 3});
        expect(categories.length).toBe(2)
    });


    test('Testear funcionalidad borrar todo.', () => {
        
        const inputValue1 = 'Goku';
        render(<GiffApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const btnBorrarTodo = screen.getByRole('button', {name:'Borrar Todo'});
        
        fireEvent.change(input, {target: {value: inputValue1}});
        fireEvent.submit(form);
        fireEvent.click(btnBorrarTodo);
        
        const categories = screen.queryAllByRole('heading', {level: 3}) ;
        expect(categories.length).toBe(0);
    });
});

