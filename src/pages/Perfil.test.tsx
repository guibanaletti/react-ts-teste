import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Perfil from './Perfil';

describe('Perfil', () => {
    render(
    <BrowserRouter>
        <Perfil />
    </BrowserRouter>
    );


    it('Deve renderizar a tabela na página caso não tenha dados', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})