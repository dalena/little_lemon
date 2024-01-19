import { render, screen } from '@testing-library/react';
import Reservations from './components/Reservations';

test('Renders the Reservations heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText('Reservations');
  expect(headingElement).toBeInTheDocument();
});
