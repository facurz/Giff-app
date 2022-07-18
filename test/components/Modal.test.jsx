import { render, screen } from "@testing-library/react";
import { Modal  } from "../../src/components/modal/Modal";


describe('Test en <Modal />', () => {
    const isOpen = true;
    test('Vericar si abre el modal', () => { 
        
        render(<Modal isOpen={isOpen}/>)
        const article = screen.getByRole('article');
        const button = screen.getByRole('button');
        
        expect(article.className).toContain('is-open');
        
     })
});
