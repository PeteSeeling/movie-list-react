import { render, screen } from '@testing-library/react';
import App from './App';

test('Director', () => {
  render(<App />);
  const linkElement = screen.getByText(/Director/i);
  expect(linkElement).toBeInTheDocument();
});
