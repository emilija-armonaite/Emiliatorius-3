import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddRounded from '@material-ui/icons/AddRounded';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        // margin: 15,
        height: 200,
    },
    media: {
        height: 140,
    },
});

export default function AddProject() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <AddRounded style={{ fontSize: 100 }} />
                    <Typography gutterBottom variant="h6" component="h2">New Project
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
