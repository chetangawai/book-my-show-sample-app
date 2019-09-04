import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import "./BookingPanel.css";
import SeatingArrangement from "./SeatingArrangement";


function BookingPanel() {
  const [values, setValues] = React.useState({
    showNumber: "",
    availableSeats: []
  });
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    margin: {
      margin: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  const { showNumber } = values;

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div className="Show">
      <form autoComplete="off" className="showNumber">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="showNumber-label-placeholder">
            Show Number
          </InputLabel>
          <Select
            value={showNumber}
            onChange={handleChange}
            input={
              <Input name="showNumber" id="showNumber-label-placeholder" />
            }
            displayEmpty
            name="showNumber"
            className={classes.selectEmpty}
            data-testid="selectShowNumber"
          >
            <MenuItem value="">
              <em>Select show number</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} />
      </form>
      {showNumber && <SeatingArrangement showNumber={showNumber} />}
    </div>
  );
}

export default BookingPanel;
