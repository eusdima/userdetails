import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';


const ticketlistBlue = 'rgb(0,174,240)';
const ticketlistGrey = 'rgb(96, 125, 139)';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: ticketlistBlue,
    primary2Color: ticketlistBlue,
    primary3Color: ticketlistBlue,
    accent1Color: ticketlistGrey,
    accent2Color: ticketlistGrey,
    accent3Color: ticketlistGrey,
    pickerHeaderColor: ticketlistBlue,
  },
  appBar: {
    color: 'rgb(255,255,255)',
    textColor: ticketlistBlue
  }
});

const MaterialApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
  <MaterialApp/>,
  document.getElementById('app')
);
