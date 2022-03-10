import './styling/App.css';
import React from 'react';
import Pricing from './Pricing';
// import CustomButton from './customButton';

function App() {
  // const [displayText, setDisplayText] = useState(false);

  return (
    <div className="App">
      <Pricing />
      {/* <CustomButton onClick={setDisplayText} displayText={displayText} /> */}
    </div>
  );
}

export default App;
