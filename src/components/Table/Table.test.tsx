import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table', () => {
    render(<Table />)
    it('Deve exibir os ítens na tabela', () => {
        expect(screen.getByText('React')).toBeInTheDocument
        expect(screen.getByText('Frontend')).toBeInTheDocument
    })
})