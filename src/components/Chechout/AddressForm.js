import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
  },
}));
/**
 *
 */
export default function CheckoutAddressForm(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={props.value.firstName}
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={props.value.lastName}
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={props.value.address1}
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={props.value.address2}
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={props.value.city}
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={props.value.zip}
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={props.onChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </Container>
  );
}
