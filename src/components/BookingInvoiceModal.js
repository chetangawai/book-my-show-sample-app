import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

export default function BookingInvoiceModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {isOpen, bookingInvoice, showNumber} = props;
  return (
    <div>
      {/* <p>Click to get the full Modal experience!</p>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
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
          </p>
          <BookingInvoiceModal />
        </div>
      </Modal>
    </div>
  );
}