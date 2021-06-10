import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  let history = useHistory();
  function LogoutUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" size="small" onClick={LogoutUser}>
        Wyloguj
      </Button>
    </div>
  );
};

export default LogoutButton;
