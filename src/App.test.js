import { render, screen } from '@testing-library/react';
import Reservations from './components/Reservations';
import TimesList from './components/TimesList';

test('Renders the Reservations heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText('Reservations');
  expect(headingElement).toBeInTheDocument();
});

describe('TimesList', () => {
  it('renders the correct number of time slots', () => {
    const mockTimes = [
      { time: '5:00', isAvailable: true },
      { time: '5:15', isAvailable: false },
    ];
    const { getAllByRole } = render(
      <TimesList times={mockTimes} selectedTime={null} onTimeSelect={() => {}} />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(mockTimes.length);
  });
});