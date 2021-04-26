import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
    textAlign: "center",
  },

  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'justify',
  //   color: theme.palette.text.secondary,
  //   marginTop: 20,
  // },
}));

export default function ProjectList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style= {{color: "#a5b5b3"}}> Project List</h1>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <AddProject />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  );
}
