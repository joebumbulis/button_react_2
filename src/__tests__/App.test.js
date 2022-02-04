/* eslint-disable */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('general rendering', () => {
  it('renders click button button', () => {
    render(<App />);
    const button = screen.getByText(/CLICK BUTTON 💣/i);
    expect(button).toBeInTheDocument();
  });
  
  it('calls onClick on button click', () => {
    render(<App />);
    expect(/Right Meow/).not.toBeInTheDocument;
    const button = screen.getByText(/CLICK BUTTON 💣/i);
    fireEvent.click(button);
    expect(screen.getByText(/Right Meow/i)).toBeInTheDocument;
  });

  it('renders click me too button', () => {
    render(<App />);
    const button = screen.getByText(/CLICK ME TOO ☕️/i);
    expect(button).toBeInTheDocument();
  });

  it('calls onClick on second button click', () => {
    render(<App />);
    expect(/Shablow!💥😜/).not.toBeInTheDocument;
    const button = screen.getByText(/CLICK ME TOO ☕️/i);
    fireEvent.click(button);
    expect(screen.getByText(/Shablow!💥😜/i)).toBeInTheDocument;
  });
})
