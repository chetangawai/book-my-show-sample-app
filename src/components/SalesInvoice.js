import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import RevenueInvoice from "./../model/RevenueInvoice";

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

export default function SalesInvoice(props) {
  const classes = useStyles();
  const { sales } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        Owner's Total Sales
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Revenue: Rs. {sales.revenue}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Service Tax: Rs. {sales.serviceTax}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Swachh Bharat Cess: Rs. {sales.swachBharatTax}</Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>Krishi Kalyan Cess: Rs. {sales.krishiKalyanTax}</Grid>
        </Grid>
      </Paper>
    </div>
  );
}

SalesInvoice.propTypes = {
  sales: PropTypes.instanceOf(RevenueInvoice).isRequired
};
