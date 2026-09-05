import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
}));

test('renders the login page', async () => {
  render(<App />);
  expect(await screen.findByText(/welcome back/i)).toBeInTheDocument();
});
