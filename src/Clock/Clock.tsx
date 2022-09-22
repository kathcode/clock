import './clock.css'

interface ClockTime {
  hours: number;
  minutes: number;
  seconds: number;
  isLoading: boolean;
}

export const Clock = ({ hours, minutes, seconds, isLoading }: ClockTime) => {
  return (
    <section className='clock-container'>
      {isLoading ?
        <p>Loading...</p> :
        <>
          <span className="time time-hours">{hours}h : </span>
          <span className="time time-minutes">{minutes}m </span>
          <span className="time time-seconds">{seconds}s</span>
        </>
      }
    </section>
  )
}