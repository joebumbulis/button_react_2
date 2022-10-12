import './styling/App.css';
import React, { useState } from 'react';
import Button from './button';

function App() {
  const [displayText, setDisplayText] = useState(false);
  const [displaySecondText, setCoffeeDisplayText] = useState(false);
  const [displayLastText, setLastDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;
  const secondText = <div className="display-text">Shablow!💥😜</div>;
  const lastText = <div className="display-text">Kablow!💥😜</div>;
  const coffeeButtonTitle = 'CLICK ME TOO ☕️';
  const bombButtonTitle = 'CLICK 💣';
  const lastButtonTitle = 'CLICKETY TADA';

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} buttonTitle={bombButtonTitle} />
        {displayText && textToDisplay}

        <p />

        <Button onClick={() => setCoffeeDisplayText(true)} buttonTitle={coffeeButtonTitle} />
        {displaySecondText && secondText}
        <p />

        <Button onClick={() => setLastDisplayText(true)} buttonTitle={lastButtonTitle} />
        {displayLastText && lastText}
      </header>
    </div>
  );
}

export default App;
