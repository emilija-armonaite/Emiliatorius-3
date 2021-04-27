import Avatar from '@material-ui/icons/Cake';
import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer';
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import logo from './../images/start_fight.gif';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => (
  {
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4), display: 'flex',
      flexDirection: 'column', alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      color: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
export default function SignIn() {
  const API_URL = 'http://localhost:8081/';
  const classes = useStyles();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);



  const turnOnAlert = () => {
    setOpen(true);
  };
  const turnOffAlert = () => {
    setOpen(false);
  };

  const login = (e) => {
    turnOffAlert();
    e.preventDefault();
    return axios.post(API_URL + "authenticate", {
      mail,
      password,
    })
      .then((response) => {
        // returns json from back with username and jwt token returns name as a string
        localStorage.setItem('token', JSON.stringify(response.data));
        console.log(localStorage.getItem('token'))
        history.push("/api/projects");
        const name = Object.keys(response.data)
        // console.log(name[0])
        // console.log(response);
        return response;
      },
        (error) => {
          turnOnAlert();
          console.log("wrong");
        });
  }
 

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <Typography component="h1" variant="h5">
            JOIN US
         <img src={logo} alt="loading..." />
          </Typography>

          <form className={classes.form} noValidate onSubmit={login}>
            <TextField variant="outlined" margin="normal" required fullWidth
              id="mail" label="Email Address" name="mail"
              autoComplete="mail"
              autoFocus onChange={e => setMail(e.target.value)} handlekeydown={classes.submit}
            />

            <TextField variant="outlined" margin="normal" required fullWidth
              name="password" label="Password" type="password"
              id="password" autoComplete="current-password"
              onChange={e => setPassword(e.target.value)} handlekeydown={classes.submit}
            />

            <Button type="submit" fullWidth variant="contained" color="primary"
              className={classes.submit} disabled={!password && !mail}>
              Sign In</Button>

            <Snackbar open={open}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}>
              <Alert variant="outlined" severity="warning">
                Incorrect password or email
                  </Alert>
            </Snackbar>
            <Box mt={5}>
              <Footer />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
