import React from 'react';
import { func } from 'prop-types';

const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;
const CustomButton = ({ onClick, displayText }) => (

  <button type="button" id="easy-button" className="button" onClick={onClick}>
    CLICK BUTTON 💣
    { displayText && textToDisplay}
  </button>
);

CustomButton.propTypes = {
  onClick: func,
  displayText: Boolean,
};

CustomButton.defaultProps = {
  onClick: () => { },
  displayText: false,
};

export default CustomButton;
