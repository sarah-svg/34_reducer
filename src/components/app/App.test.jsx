  
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  
  it('takes a snapshot test of App', async() => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();

  });

  it('checks the current color', async() => {
    render(<App />);
    const current = screen.getByTestId('current');
    fireEvent.change(current, {
      target: {
        value: '#FF0000'
      }
    });
    const display = await screen.findByTestId('display');
        
    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });

  it('checks the current color after hitting the undo button', async() => {
    render(<App />);
    const current = screen.getByTestId('before');
    fireEvent.change(current, {
      target: {
        value: '#00FF00'
      }
    });
    const display = await screen.findByTestId('display');
        
    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });

  it('checks the current color after hitting the redo button', async() => {
    render(<App />);
    const current = screen.getByTestId('after');
    fireEvent.change(current, {
      target: {
        value: '#FF0000'
      }
    });
    const display = await screen.findByTestId('display');
        
    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });
});
