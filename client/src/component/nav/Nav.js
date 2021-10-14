import {
  AppBar,
  Badge,
  Box,
  Container,
  Fab,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import useStyles from "./style";
import { Link } from "react-router-dom";

export const Nav = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar className={classes.flexLayout}>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Link to="/creat">
            <Fab>
              <AddIcon />
            </Fab>
          </Link>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
