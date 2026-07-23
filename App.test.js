import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the updated portfolio experience by default', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /FRANCISCO\s+AGUERO/i })).toBeInTheDocument();
  expect(screen.getByText(/ACTIVE_OPERATIONS/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /ESTABLISH_CONTACT/i })).toBeInTheDocument();
  expect(screen.getByText(/Send a message or find me on:/i)).toBeInTheDocument();
});
