/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 * The BlankPage component provides a theme wrapper for all child components
 */
import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplashPage from './SplashPage.js';
import siteTheme from './customTheme';

const muiTheme = getMuiTheme(siteTheme);

class BlankPage extends Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
              {this.props.children || <SplashPage />}
              {/* SplashPage is displayed if there are no children */}

      </MuiThemeProvider>
    );
  }
}

export default BlankPage;
