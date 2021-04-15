import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Emiliatorius'3
      </Link>


        </Typography>
    );
}
function TimeY() {
    return (
        <Typography variant="body2" color="textSecondary">

            {new Date().getFullYear()}
        </Typography>

    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    {/* <Typography variant="body1"> Lorem ipsum dolor sit ameticing elit.</Typography> */}
                    <Copyright />
                    <TimeY />
                </Container>
            </footer>
        </div>
    );
}