import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddRounded from '@material-ui/icons/AddRounded';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { green } from '@material-ui/core/colors';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tabs from '@material-ui/core/Tabs';


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
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Card className={classes.root}>
                <CardActionArea onClick={handleClickOpen} >
                    <CardContent >


                        <AddRounded style={{ fontSize: 100 }} />
                        <Typography gutterBottom variant="h6" component="h2">New Project
                </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               create project
      </Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create project</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="projectName"
                        label="Project name"
                        type="text"
                        fullWidth
                    />
                    {/* <TextareaAutosize
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
                    /> */}

                    <TextField
                        // mt={5}
                        id="outlined-textarea"
                        label="About project"
                        placeholder="Project is..."
                        multiline
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>

                <DialogActions>

                    {/* <Fab onClick={handleClose} size="medium" color="secondary" aria-label="exit">
                        <RemoveIcon />
                    </Fab>

                    <Fab onClick={handleClose} size="medium" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab> */}


                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}









