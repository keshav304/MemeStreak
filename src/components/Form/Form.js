import React, { useState } from 'react';
import useStyles from './styles'
import FileBase from 'react-file-base64';
import { TextField, Button, Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createMeme } from '../../actions/memes';

const Form = () => {
    const [memeData, setMemeData] = useState({ name: '', caption: '', tags: '', selectedFile: '' })

    const classes = useStyles()

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (memeData.name === '') {
            alert("Name is Required")
        }
        else if (memeData.selectedFile === '') {
            alert("Image is required")
        } else {
            // dispatching actions
            dispatch(createMeme(memeData))

            clear()
        }

    }
    const clear = () => {
        setMemeData({
            name: '',
            caption: '',
            tags: '',
            selectedFile: "",
        })
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Submite a Meme</Typography>
                <TextField className={classes.textfield} name="name" variant="outlined" label="name" fullWidth value={memeData.name} onChange={(e) => setMemeData({ ...memeData, name: e.target.value })} />
                <TextField className={classes.textfield} variant="outlined" label="caption" fullWidth value={memeData.caption} onChange={(e) => setMemeData({ ...memeData, caption: e.target.value })} />
                <TextField className={classes.textfield} variant="outlined" label="tags" fullWidth value={memeData.tags} onChange={(e) => setMemeData({ ...memeData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setMemeData({ ...memeData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    );
}

export default Form;