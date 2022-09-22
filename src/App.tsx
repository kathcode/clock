import './App.css';
import { Clock } from './Clock/Clock';
import { useDate } from './hooks/useDate';

function App() {
  const { hours, minutes, seconds, isLoadingDate } = useDate()

  return (
    <main>
      <h1>Clock App</h1>
      <Clock
        isLoading={isLoadingDate}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </main>
  );
}

export default App;
