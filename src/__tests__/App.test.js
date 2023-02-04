import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const h2Element = screen.getByText(/surreal estate/i);
  expect(h2Element).toBeInTheDocument();
});
