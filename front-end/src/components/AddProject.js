import React, {useState} from 'react';
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

 
export default function AddProject() {
    const [open, setOpen] = React.useState(false);

    
    const [nameNewProject, setName] = useState("");
    const [newDesc, setDesc] = useState();

    const writeName = e=>{
        // console.log(`Typed => ${e.target.value}`);
        setName(e.target.value);
    }
    const writeDesc = e=>{
        // console.log(`Typed => ${e.target.value}`);
        setDesc(e.target.value);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        
        setOpen(false);
      
    };
    const submitB = () =>{
        console.log({nameNewProject});
        console.log({newDesc});
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               create project
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       text
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="projectName"
                        label="Project name"
                        type="text"
                        value={nameNewProject}
                        onChange ={writeName}

                        fullWidth
                        // value={this.state.name}
                        // onChange={e => this.setState({ name: e.target.value })}
                    //    nameProject(value);

                    // onChange={e=>setName({e})}
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
                        value={newDesc}
                        onChange ={writeDesc}
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
                    <Button onClick={submitB} color="primary">
                        Subscribe
                        
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}