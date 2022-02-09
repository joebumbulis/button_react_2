import './styling/App.css';
import React, { useState } from 'react';
import Button from './button';

function App() {
  const [displayText, setDisplayText] = useState(false);
  const [displaySecondText, setCoffeeDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;
  const secondText = <div className="display-text">Shablow!💥😜</div>;
  const buttonTitle = 'CLICK BUTTON 💣';
  const coffeeButtonTitle = 'CLICK ME TOO ☕️';

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} buttonTitle={buttonTitle} />
        {displayText && textToDisplay}

        <p />

        <Button onClick={() => setCoffeeDisplayText(true)} buttonTitle={coffeeButtonTitle} />
        {displaySecondText && secondText}
      </header>
    </div>
  );
}

export default App;
