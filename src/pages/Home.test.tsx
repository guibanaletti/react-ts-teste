import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))
describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para a página de perfil', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
         )
        
         const button = screen.getByRole('button', { name: 'Entrar'})
         fireEvent.click(button)
         expect(mockNavigate).toHaveBeenCalled()
     })
}

)