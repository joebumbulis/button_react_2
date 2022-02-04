import './styling/App.css';
import React, { useState } from 'react';
import Button from './button';

function App() {
  const [displayText, setDisplayText] = useState(false);
  const [displaySecondText, setSecondDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;
  const secondText = <div className="display-text">Shablow!💥😜</div>;
  const buttonTitle = 'CLICK BUTTON 💣';
  const secondButtonTitle = 'CLICK ME TOO ☕️';

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} buttonTitle={buttonTitle} />
        {displayText && textToDisplay}

        <p />

        <Button onClick={() => setSecondDisplayText(true)} buttonTitle={secondButtonTitle} />
        {displaySecondText && secondText}
      </header>
    </div>
  );
}

export default App;
