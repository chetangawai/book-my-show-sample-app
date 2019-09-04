import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Booking from '../model/Booking';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

export default function BookingInvoice(props) {
  const classes = useStyles();
  const { bookingInvoice, showNumber } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item> <b>Customer Booking Invoice</b></Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Successfully booked ticket for Show {showNumber}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Subtotal: Rs. {bookingInvoice.subTotal}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Service Tax: Rs. {bookingInvoice.serviceTax}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            Swachh Bharat Cess: Rs. {bookingInvoice.swachBharatTax}
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            Krishi Kalyan Cess: Rs. {bookingInvoice.krishiKalyanTax}
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Total: Rs. {bookingInvoice.totalAmount}</Grid>
        </Grid>
      </Paper>
    </div>
  );
}

BookingInvoice.propTypes = {
  bookingInvoice: PropTypes.instanceOf(Booking).isRequired,
  showNumber: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired
};
