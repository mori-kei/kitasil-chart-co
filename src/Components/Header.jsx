import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Device from "../style/Device";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import UiButton from "./UIkit/UiButton";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow:1,
  }
}))
const Header = ({ruleshow,setRuleShow}) => {
  const classes = useStyles();

  const openRule = () => {
    setRuleShow(true);
  }
  return(
    <>
    <AppBar position="fixed">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            きたしる
          </Typography>
          <UiButton 
            buttonText="この診断について"
            color="secondary"
            onClick={openRule}
          />
        </Toolbar>
      </AppBar>
  </>
  )
  
}

export default Header;