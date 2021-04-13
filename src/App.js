import './App.css';
import React, { useState } from 'react';
import Button from './button';

function App() {
  const [displayText, setDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} />
        {displayText && textToDisplay}
      </header>
    </div>
  );
}

export default App;
