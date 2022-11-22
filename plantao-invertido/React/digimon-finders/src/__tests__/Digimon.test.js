import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Digimon from '../Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { queryByTestId } = render(<Digimon />);
    const digimon = queryByTestId('digimonName')
    expect(digimon).toBeNull()    
  });
});
