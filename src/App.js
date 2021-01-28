import './App.css';
import { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Now!💥😸</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} />
        {displayText && textToDisplay}
      </header>
    </div>
  );
}

const Button = ({ onClick }) => {
  return (
    <button id="easy-button" className='button' onClick={onClick}>
      CLICK ME 💣
    </button>
  )
}

export default App;
