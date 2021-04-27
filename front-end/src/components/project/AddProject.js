import React, { useState } from 'react';
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
import Hidden from '@material-ui/core/Hidden';



import axios from "axios";
import { Box } from '@material-ui/core';
import GetProjects from './GetProjects';

const useStyles = makeStyles({
    root: {
        height: 200,
    },
});




export default function AddProject() {

    const API_URL = 'http://localhost:8081';
    const nameIsEmpty = "inline";
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
const [test123] =useState("");
 


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        removeText();
    };
    const removeText = () => {

        setName("");
        setDesc("");
     
    }

    const user = JSON.parse(localStorage.getItem("token"));





    const writeName = e => {
        setName(e.target.value);

    }


    const writeDesc = e => {
        // console.log(`Typed => ${e.target.value}`);
        setDesc(e.target.value);
    }

    const submitB = () => {
        console.log({ name });
        console.log({ description });
        setOpen(false);

        window.location.reload(true);
    }



    const submitProject = (e) => {

        e.preventDefault();
        return axios.post(API_URL + "/api/projects", {
            description,
            name
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
        )
            .then((response) => {

                return response;
            },
                (error) => {

                    console.log("wrong");
                }

            );
    }



    return (
        <div>
            <Card className={classes.root} style={{ backgroundColor: "#576978", opacity: 0.85, color: "#232F32" }}>
                <CardActionArea onClick={handleClickOpen} style={{ height: 200 }}>
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
                <form className={classes.form} noValidate onSubmit={submitProject}>
                    <DialogTitle id="form-dialog-title" style={{ backgroundColor: "#c1c7c5" }} >Create project</DialogTitle>
                    <DialogContent style={{ backgroundColor: "#c1c7c5" }}>
                        <DialogContentText>

                        </DialogContentText>




                        <TextField
                            // autoFocus
                            // margin="dense"
                            id="projectName"
                            label="Project name"

                            multiline
                            fullWidth
                            variant="outlined"

                            value={name}
                            onChange={writeName}
                            margin="normal"

                        />

                        <Box display={nameIsEmpty}>

                            <TextField

                                id="outlined-textarea"
                                label="About project"
                                placeholder="Project is..."
                                multiline
                                fullWidth
                                variant="outlined"
                                value={description}
                                onChange={writeDesc}
                            />
                        </Box>
                    </DialogContent>

                    <DialogActions style={{ backgroundColor: "#c1c7c5" }}>


                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button type="submite" onClick={submitB} color="primary" className={classes.submit} disabled={!name}>
                            Confirm
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>

        </div>
    );
}


