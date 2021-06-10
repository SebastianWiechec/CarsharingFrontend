import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
  },
  textField: {
    width: "100%",
    padding: 15,
  },
}));

/**
 *
 */
export default function PaymentForm(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          value={props.value.startDate}
          name="startDate"
          className={classes.textField}
          onChange={props.onChange}
          InputLabelProps={{
            shrink: true,
            onChange: props.onChange,
          }}
        />
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          value={props.value.endDate}
          name="endDate"
          className={classes.textField}
          onChange={props.onChange}
          InputLabelProps={{
            shrink: true,
            onChange: props.onChange,
          }}
        />
      </form>
    </Container>
  );
}
