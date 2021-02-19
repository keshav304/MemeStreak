import React from 'react';
import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';

import Meme from './Meme/Meme.js'
import useStyles from './styles'

const Memes = () => {
    const classes = useStyles();

    // use selector is used to to get the state
    const memes = useSelector((state) => state.memes)

    console.log(memes)
    return (
        !memes.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    memes.map((meme)=>(
                        <Grid key={meme.id} item xs={12} sm={6}>
                            <Meme  meme={meme}/>
                        </Grid>
                    ))
                }

            </Grid>
        )
    );
}

export default Memes;