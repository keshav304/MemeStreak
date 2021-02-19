import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getMemes } from './actions/memes';
import cheems from './img/cheems.png';
import Form from './components/Form/Form.js';
import Memes from './components/Memes/Memes.js';
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <div className={classes.appBar}>
        <img className={classes.imageLeft} src={cheems} alt="logo" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">MemeStreak</Typography>
        <img className={classes.imageRight} src={cheems} alt="logo" height="60" />
      </div>

      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>

            <Grid item xs={12} sm={7}>
              <Memes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
