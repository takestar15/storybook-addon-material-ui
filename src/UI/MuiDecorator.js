import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import withChannel from '../adk/WithChannel';
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from '../config';

const currentTheme = data => {
  try {
    const theme = data.themes[data.themeInd];
    return createMuiTheme(theme);
  } catch (err) {
    return createMuiTheme({});
  }
};

const MuiDecorator = ({ data, story }) => (
  <ThemeProvider theme={currentTheme(data)}>
    <div>{story}</div>
  </ThemeProvider>
);

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  MuiDecorator
);
