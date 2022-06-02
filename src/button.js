import React from 'react';
import { func, string } from 'prop-types';

const Button = ({ onClick, buttonTitle }) => (
  <button type="button" id="easy-button" className="button fake" onClick={onClick}>
    {buttonTitle}
  </button>
);

Button.propTypes = {
  onClick: func,
  buttonTitle: string,
};

Button.defaultProps = {
  onClick: () => { },
  buttonTitle: string,
};

export default Button;
