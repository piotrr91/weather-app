import React, {Component} from 'react';
import './App.css';
import AppBar from './AppBar';
import AccComponent from './Actual-weather';
import ForecastComponent from './Forecast-weather';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
  return (
    <Router>
      <AppBar/>
      <Link to="/acctual">
        <Button variant="contained" color="primary">
        Aktualna pogoda
        </Button>
      </Link>
      <Link to="/forrecast">
        <Button variant="contained" color="primary">
          Prognoza 5 dniowa
        </Button>
      </Link>
      <Route exact path="/acctual" component={AccComponent} />
      <Route path="/forrecast" component={ForecastComponent} />
    </Router>
  );
}
}

export default App;
