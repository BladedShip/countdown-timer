import { useState } from 'react';
import { add } from 'date-fns';
import { Ticker } from 'components/Ticker';
import style from './App.module.scss';

const futureDate = add(new Date(), {
  days: 130,
  hours: 0,
  minutes: 0
});

function App() {
  const tickerEl = useState(true) ? <Ticker futureDate={futureDate} /> : null;

  return (
    <div className={ style.pageContainer }>
      <h1>Mom's Birthday</h1>
      <p>Countdown to January 23 2023</p>
      { tickerEl }
    </div>  
  );
}

export default App;
