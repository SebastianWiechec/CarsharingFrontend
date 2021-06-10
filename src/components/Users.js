import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/UserAction";
import api, { API_TYPES } from "../actions/api";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(),
  },
  Container: {
    marginTop: "100px",
  },
}));

const Users = (props) => {
  const [usersList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.request(API_TYPES.USER).fetchAll();
      setData(request.data);
      console.log(request.data);
    };

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.Container}>
      <ul>
        {usersList.map((item) => (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userList: state.userReducer.list,
});

const mapActionToProps = {
  fetchAllUsers: actions.fetchAll,
};
/**
 *
 */
export default connect(mapStateToProps, mapActionToProps)(Users);
