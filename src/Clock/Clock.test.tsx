import { Clock } from './Clock';
import { render, screen } from '@testing-library/react'

const date = { hours: 15, minutes: 30, seconds: 20 }
const { hours, minutes, seconds } = date;

test('should render a text with the current time', () => {
  render(<Clock
    isLoading={false}
    hours={hours}
    minutes={minutes}
    seconds={seconds}
  />)
  const textHours = screen.getByText(/15/i);
  const textMinutes = screen.getByText(/30/i);
  const textSeconds = screen.getByText(/20/i);

  expect(textHours).toBeInTheDocument()
  expect(textMinutes).toBeInTheDocument()
  expect(textSeconds).toBeInTheDocument()
})

test('should render a loading text when the date is loading', () => {
  render(<Clock
    isLoading={true}
    hours={hours}
    minutes={minutes}
    seconds={seconds}
  />)

  const loadingText = screen.getByText(/Loading.../i);
  expect(loadingText.textContent).toBe('Loading...')
})