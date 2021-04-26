import React from 'react';
// import classNames from "classnames";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
// import HeaderAccount from './HeaderAccount';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import Dashboard from "@material-ui/icons/Dashboard";
import Notifications from "@material-ui/icons/Notifications";
import Grow from "@material-ui/core/Grow";

import SinginName from './Login';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const history = useHistory();
  const name = SinginName.name;
  const user = JSON.parse(localStorage.getItem('token'));
  // const name= this.name;

  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);

    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
       setOpenProfile(null);
  };







  function logout() {
    localStorage.clear();
    history.push("/");
  }


  return (


    // <React.Fragment> 

    //     {/* <Toolbar className={classes.toolbar}> 

    //         <Typography 
    //             component="h2" 
    //             variant="h5" 
    //             color="inherit" 
    //             align="center" 
    //             noWrap 
    //             className={classes.toolbarTitle} 
    //         > 
    //             {title} 
    //         </Typography> 
    //         <Button variant="outlined" size="small"
    //             className={classes.submit}
    //             >
    //                 login




    // </Button> 
    //         <Button variant="outlined" size="small" 
    //             className={classes.submit} 
    //             onClick={logout}>
    //             Sign Out 
    // </Button> 
    //     </Toolbar>  */}
    //     <p>nigerigner</p>
    //     {/* <Paper>
    //         <ClickAwayListener onClickAway={handleCloseProfile}>
    //           <MenuList role="menu">
    //             <MenuItem
    //               onClick={handleCloseProfile}
    //               className={classes.dropdownItem}
    //             >
    //               Profile
    //             </MenuItem>
    //             <MenuItem
    //               onClick={handleCloseProfile}
    //               className={classes.dropdownItem}
    //             >
    //               Settings
    //             </MenuItem>
    //             <Divider light />
    //             <MenuItem
    //               onClick={handleCloseProfile}
    //               className={classes.dropdownItem}
    //             >
    //               Logout
    //             </MenuItem>
    //           </MenuList>
    //         </ClickAwayListener>
    //       </Paper> */}
    // </React.Fragment> 


    <div>
      <div className={classes.searchWrapper}>
        {/* <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        /> */}
        {/* <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button> */}
      </div>
      {/* <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </Button> */}
      <div className={classes.manager}>
        {/* <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </Button> */}


        {/* <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You{"'"}re now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers> */}
      </div>
      <div className={classes.manager}>
      <Grid container >
         <Grid item xs={11} sm={11} md={8} lg={11} xl={11}></Grid> 
         <Grid item xs={1} sm={1} md={1} lg={1} xl={1}> 
        <Button
          color={window.innerWidth > 959 ? "transparent" : "#BF5A36"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person style={{color:"#BF5A36", fontSize:40}} className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            // classNames({ [classes.popperClose]: !openProfile }) +
            // " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}

                    >
                     {user.mail}
                      </MenuItem>
                    {/* <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      Settings
                    </MenuItem>
                    <Divider light /> */}
                    <MenuItem




                      className={classes.submit}
                      onClick={logout}




                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
        </Grid>
        </Grid>
      </div>
      
    </div>
  
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
{/* <HeaderAccount/>    */ }