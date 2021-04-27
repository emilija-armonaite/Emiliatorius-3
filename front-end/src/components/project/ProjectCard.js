import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
});

export default function ProjectCard({ name, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: "#c1c7c5", opacity: 0.93, color: "#232F32" }}>
      <CardActionArea style={{ height: 200 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="name">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="description">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
}
