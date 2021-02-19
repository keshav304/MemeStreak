import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,CardActionArea,Container } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import useStyles from './styles'
import Box from "@material-ui/core/Box";
import {useDispatch} from "react-redux";
import {deleteMeme,likeMeme,dislikeMeme} from "../../../actions/memes";

const Meme = ({ meme }) => {
    const classes = useStyles()
    const dispatch = useDispatch()


    return (
        <Box my={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={meme.selectedFile}
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {meme.caption}
                        </Typography>

                        <div className={classes.title}>
                            <Typography variant="p">Meme by: {meme.name}</Typography>
                            <br/>
                            <Typography variant="p" >{moment(meme.createdAt).fromNow()}</Typography>
                        </div>
                        <div className={classes.details}>
                            <Typography variant="body2" color="textSecondary" component="h2">{meme.tags && meme.tags.map((tag) => `#${tag} `)}</Typography>
                        </div>

                    </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => dispatch(likeMeme(meme._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; {meme.likeCount}</Button>
                    <Button size="small" color="primary" onClick={() => dispatch(dislikeMeme(meme._id))}><ThumbDownAltIcon fontSize="small" /> &nbsp; {meme.unlikeCount}</Button>
                    <Button size="small" color="primary" onClick={() => dispatch(deleteMeme(meme._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Meme;