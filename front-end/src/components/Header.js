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

    <div>
      <div className={classes.searchWrapper}>

      </div>

      <div className={classes.manager}>

      </div>
      <div className={classes.manager}>
        <Grid container >
          <Grid item xs={11} sm={10} md={10} lg={10} xl={10}></Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Button
              color={window.innerWidth > 959 ? "transparent" : "#BF5A36"}
              justIcon={window.innerWidth > 959}
              simple={!(window.innerWidth > 959)}
              aria-owns={openProfile ? "profile-menu-list-grow" : null}
              aria-haspopup="true"
              onClick={handleClickProfile}
              className={classes.buttonLink}
            >
              <Person style={{ color: "#3f51b5", fontSize: 40 }} className={classes.icons} />
              <Hidden mdUp implementation="css">
                {/* <p className={classes.linkText}>Profile</p> */}
              </Hidden>
            </Button>
            <Poppers
              open={Boolean(openProfile)}
              anchorEl={openProfile}
              transition
              disablePortal
              className={

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