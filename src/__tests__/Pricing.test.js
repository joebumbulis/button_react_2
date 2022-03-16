import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('general rendering', () => {
  it('renders get started button', () => {
    render(<App />);
    const button = screen.getByText(/get started/i);
    expect(button).toBeInTheDocument();
  });

  it('renders sign up button', () => {
    render(<App />);
    const button = screen.getByText(/Sign up for free/i);
    expect(button).toBeInTheDocument();
  });
});