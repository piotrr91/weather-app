import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography  variant="h6" color="inherit">
            Pogoda w twoim mieście
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;