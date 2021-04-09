import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from "./header.style";
  
const Header = () => {
const classes = useStyles();

return (
    <div className={classes.root}>
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
        >
          <NavLink to='/'>
            <HomeIcon fontSize="large" style={{color: 'grey'}} /></NavLink>
        </IconButton>
        <Typography className={classes.title} variant="h5" noWrap>
          The Movie Database
        </Typography>
        {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            />
        </div> */}
        <IconButton
            edge="start"
            className={classes.menuButton}
        >
          <NavLink to='/favorite'>
            <FavoriteIcon fontSize="large" style={{color: 'firebrick'}} /></NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
    </div>
    );
}

export {Header};