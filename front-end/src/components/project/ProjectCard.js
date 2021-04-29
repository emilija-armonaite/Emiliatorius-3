import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateProject from './UpdateProject';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
});


export default function ProjectCard({ name, description, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: "#9aa3ad", color: "#232F32" }}>
      <CardActionArea style={{ height: 165 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="name">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="description">
            {description}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p" className="id">
            {id}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" style={{ width: '100%', textAlign: "center" }}
        //  onClick={UpdateProject}
         >
          Edit
        </Button> */}
        <Button onClick={() => UpdateProject({ id })} size="small" color="primary" style={{ width: '100%', textAlign: "center" }}>
          Update
        </Button>
        {/* <UpdateProject/> */}
        <Button size="small" color="primary" style={{ width: '100%', textAlign: "center" }}>
          Delete
        </Button>
      </CardActions>
    </Card>

  );
}
