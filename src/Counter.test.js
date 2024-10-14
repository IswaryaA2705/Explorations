import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders the Counter component with initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0'); 
});

test('increments the counter when increment button is clicked', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByTestId('increment');

  fireEvent.click(incrementButton); 
  expect(countElement.textContent).toBe('1'); 
});

test('decrements the counter when decrement button is clicked', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByTestId('decrement');

  fireEvent.click(decrementButton); 
  expect(countElement.textContent).toBe('-1'); 
});
