import React, { useState } from 'react';
import Avatar from '@material-ui/icons/Cake';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom"
import Footer from './Footer';
import axios from "axios";
// import {Link} from "react-router-dom"
import Home from './Home';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
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
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  const API_URL ='http://localhost:8081/';
  const classes = useStyles();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const Login = (e) => {
  
    e.preventDefault();
    return axios.post(API_URL + "authenticate", {
        mail,
        password,
      })
      
      .then((response) => {
    localStorage.setItem('token', response.data.jwt);
        if(response.data.jwt===localStorage.token) {
    console.log(localStorage.token); 

    history.push("/home");
} 
        return response.data;
        
      })
  };



  return (
<Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
         JOIN US
        </Typography>
        <form className={classes.form} noValidate onSubmit={Login}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mail"
            label="Email Address"
            name="mail"
            autoComplete="mail"
            autoFocus
            onChange={e => setMail(e.target.value)}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onChange={Login}
            >
     
              
            
          
            Sign In
          
          </Button>






           

            <Box mt={5}>
              <Footer />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}