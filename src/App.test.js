import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const meElement = screen.getByText(/Inan Xu/i);
  expect(meElement).toBeInTheDocument();
});
