/* eslint-disable */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('general rendering', () => {
  it('renders App primary classname', () => {
    const {container} = render(<App />);

    expect(container.firstChild).toHaveClass("App");
  });
});