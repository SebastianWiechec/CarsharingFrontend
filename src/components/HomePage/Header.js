import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LogoutButton from "../Auth0Logout";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  const { sections, title } = props;
  let userPortal = localStorage.getItem("user");
  let userSocial;
  if (!isLoading && isAuthenticated) {
    userSocial = user.sub;
    if (userPortal == undefined) {
      localStorage.setItem("userId", userSocial);
    }
  }

  const logOutButton = () => {
    return (
      <React.Fragment>
        <LogoutButton variant="outlined" size="small">
          Wyloguj
        </LogoutButton>
      </React.Fragment>
    );
  };

  const logInButton = () => {
    return (
      <React.Fragment>
        <Button variant="outlined" size="small" href="/SignIn">
          Zaloguj przez portal
        </Button>
      </React.Fragment>
    );
  };

  let ButtonS;
  if (isAuthenticated || userPortal != undefined) {
    ButtonS = logOutButton;
  } else {
    ButtonS = logInButton;
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <ButtonS />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
