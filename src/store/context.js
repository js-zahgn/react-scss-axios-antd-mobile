import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext(PropTypes.string);

export const ThemeContext = React.createContext({
  message: 'default message',
  fn: () => {}
});