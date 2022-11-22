import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import { fireEvent } from '@testing-library/react';

describe('Test router', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar historys', () => {
    const { getByText, history } = renderWithRouter(<App />);
    
    fireEvent.click(getByText(/sobre/i));
    const  pathname  = history.location.pathname;
    expect(pathname).toBe('/about');
    const about = getByText('Você está na página Sobre');
    expect(about).toBeInTheDocument();
  });

  it('deve renderizar pagina nao encontrada', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/aleatoria');
    const noMatch  = getByText('Página não encontrada');
    expect(noMatch).toBeInTheDocument();
  })
})
