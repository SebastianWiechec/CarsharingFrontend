import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        size="small"
        onClick={() => loginWithRedirect()}
      >
        Zaloguj przez Google
      </Button>
    </div>
  );
};

export default LoginButton;
