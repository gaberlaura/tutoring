/*
  This component serves as a reusable button element in the application.
  It imports styles from the './button.styles.scss' file.
  The buttonType prop determines the specific style, while the BUTTON_TYPE_CLASSES object maps different types to corresponding style classes. 
*/

import React from 'react';
import './button.styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  buttonType: 'google' | 'inverted';
  [otherProps: string]: any; // Allow any other prop
}

const BUTTON_TYPE_CLASSES: Record<string, string> = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
