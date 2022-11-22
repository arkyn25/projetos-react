import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { getByText, getByTestId } = render(<Digimon />)
    const linkElement = getByText(/Search Digimon/i);
      const makeASearch = getByText(/Faça uma pesquisa/i);

      expect(linkElement).toBeInTheDocument();
      expect(makeASearch).toBeInTheDocument();

      const searchInput = getByTestId('input')
      expect(searchInput).toHaveTextContent('')

    });
});