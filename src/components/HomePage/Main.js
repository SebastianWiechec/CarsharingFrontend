import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CarsCarousel from "./CarsCarousel";

export default function Main() {
  return (
    <Grid item xs={12} md={8}>
      <CarsCarousel />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
