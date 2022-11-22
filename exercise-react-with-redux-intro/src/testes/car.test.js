import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import renderWithRedux from './helpers/renderWithRedux';

describe('Cadastro de estudantes', () => {
  test('renderiza a página inicial ao entrar no app', () => {
    renderWithRedux(
      <App />
    );

    const numberCars = screen.getAllByRole('img');
    expect(numberCars).toBe(3);
  });
}