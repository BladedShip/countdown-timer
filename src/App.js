import { useState } from 'react';
import { add } from 'date-fns';
import { Ticker } from 'components/Ticker';
import style from './App.module.scss';

const futureDate = add(new Date(), {
  days: 135,
  hours: 12,
  minutes: 12
});

function App() {
  const tickerEl = useState(true) ? <Ticker futureDate={futureDate} /> : null;

  return (
    <div className={ style.pageContainer }>
      //<h1>Class</h1>
      <p>Countdown to Spetember 25 2023</p>
      { tickerEl }
    </div>  
  );
}

export default App;
