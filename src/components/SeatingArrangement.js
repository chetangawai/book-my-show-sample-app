import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./SeatingArrangement.css";
import SeatingService from "../service/SeatingService";
import Checkout from "../service/Checkout";
import Button from "@material-ui/core/Button";
import BookingInvoice from "./BookingInvoice";
import Sales from "../service/Sales";
import SalesInvoice from "./SalesInvoice";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "25px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  control: {
    padding: theme.spacing(2)
  },
  margin: {
    margin: "25px"
  }
}));
const seatingServiceObj = new SeatingService();
const checkoutObj = new Checkout();
const salesObj = new Sales();

export default function SeatingArrangement(props) {
  const [values, setValues, booked] = useState({
    availableSeats: [],
    spacing: 2,
    selectedSeats: [],
    reservedSeats: [],
    bookingInvoice: null,
    totalSales: null,
    isDisabled: true,
    booked: false
  });
  const classes = useStyles();
  const { spacing, bookingInvoice, totalSales, isDisabled, selectedSeats } = values;
  const { showNumber } = props;

  useEffect(() => {
    const { showNumber } = props;
    const arrangementDetails = seatingServiceObj.getAvailableSeats(showNumber);
    setValues(oldValues => ({
      ...oldValues,
      availableSeats: arrangementDetails.availableSeats,
      reservedSeats: arrangementDetails.reservedSeats,
      bookingInvoice: null,
      totalSales: null,
      selectedSeats: [],
      isDisabled: true
    }));
  }, [props]);

  function onClickData(seat) {
    const { selectedSeats, availableSeats } = values;
    //Seat is deselected
    if (selectedSeats.indexOf(seat) > -1) {
      const modifiedSelection = selectedSeats.filter(res => res !== seat);
      const shouldBeDisabled = modifiedSelection.length > 0 ? false : true;
      setValues(oldValues => ({
        ...oldValues,
        availableSeats: availableSeats.concat(seat),
        selectedSeats: modifiedSelection,
        isDisabled: shouldBeDisabled
      }));
    } else {
      setValues(oldValues => ({
        ...oldValues,
        selectedSeats: selectedSeats.concat(seat),
        availableSeats: availableSeats.filter(res => res !== seat),
        isDisabled: false
      }));
    }
  }

  function bookSeats() {
    const { selectedSeats } = values;
    const { showNumber } = props;

    seatingServiceObj
      .bookSeats(selectedSeats, showNumber)
      .then(bookingDetails => {
        const data = checkoutObj.getInvoice(selectedSeats);
        const totalSales = salesObj.calculateRevenue(data);
        setValues(oldValues => ({
          ...oldValues,
          bookingInvoice: data,
          availableSeats: bookingDetails.availableSeats,
          reservedSeats: bookingDetails.reservedSeats,
          selectedSeats: [],
          totalSales: totalSales,
          booked: true
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  const createGridItem = data => {
    const { selectedSeats, reservedSeats } = values;
    return data.map(row => (
      <Grid key={row} item>
        <Paper
          className={
            selectedSeats.indexOf(row) > -1
              ? classes.paper + " seat selected "
              : reservedSeats.indexOf(row) > -1
              ? classes.paper + " seat reserved "
              : classes.paper + " seat available "
          }
          onClick={
            reservedSeats.indexOf(row) > -1 ? null : onClickData.bind(this, row)
          }
        >
          {row}{" "}
        </Paper>
      </Grid>
    ));
  };

  return (
    <div className={"seatingArrangement " + classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {createGridItem([
              "A1",
              "A2",
              "A3",
              "A4",
              "A5",
              "A6",
              "A7",
              "A8",
              "A9"
            ])}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {createGridItem([
              "B1",
              "B2",
              "B3",
              "B4",
              "B5",
              "B6",
              "B7",
              "B8",
              "B9"
            ])}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {createGridItem([
              "C1",
              "C2",
              "C3",
              "C4",
              "C5",
              "C6",
              "C7",
              "C8",
              "C9"
            ])}
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.margin}
        onClick={bookSeats}
        disabled={isDisabled}
      >
        Book
      </Button>
      <div> You have selected {selectedSeats.join()}
          
       </div>
      {bookingInvoice && (
        <div>
          <BookingInvoice
            bookingInvoice={bookingInvoice}
            showNumber={showNumber}
            isBooked = {booked}
          />
          <SalesInvoice sales={totalSales} />
        </div>
      )}
    </div>
  );
}

SeatingArrangement.propTypes = {
  showNumber: PropTypes.number.isRequired
};
