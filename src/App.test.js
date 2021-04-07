import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders click me button', () => {
  render(<App />);
  const button = screen.getByText(/CLICK ME 💣/i);
  expect(button).toBeInTheDocument();
});

test('calls onClick on button click', () => {
  render(<App />);
  expect(/Right Meow/).not.toBeInTheDocument;
  const button = screen.getByText(/CLICK ME 💣/i);
  fireEvent.click(button);
  expect(screen.getByText(/Right Meow/i)).toBeInTheDocument;
})
