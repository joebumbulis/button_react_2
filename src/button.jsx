import React from 'react';
import { func } from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" id="easy-button" className="button" onClick={onClick}>
    CLICK ME 💣
  </button>
);

Button.propTypes = {
  onClick: func,
};

Button.defaultProps = {
  onClick: () => { },
};

export default Button;
