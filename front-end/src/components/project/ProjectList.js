import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"
import GetProjects from './GetProjects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
    textAlign: "center",
  },
}));

export default function ProjectList() {
  const classes = useStyles();
  // const projects = [{}, {}, {}];

  return (
    <div className={classes.root}>
      <h1 style={{ color: "#232F32", fontSize: "35px", width: '100%', textAlign: 'center' }}> My Projects</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <AddProject />
        </Grid>
        <GetProjects />
        {/* {
          projects && projects.map(p => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <ProjectCard key={p} />)
              </Grid>
            )
          })
        } */}
      </Grid>
    </div>
  );
}