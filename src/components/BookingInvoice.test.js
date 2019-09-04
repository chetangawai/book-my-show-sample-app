import React from "react";
import { shallow } from "enzyme";
import Paper from "@material-ui/core/Paper";
import BookingInvoice from "./BookingInvoice";
import Booking from './../model/Booking';

describe("BookingInvoice", () => {
  it('Should render BookingInvoice component correctly', () => {
    const bookingInvoiceObj = new Booking(100, 3.2, 1.6, 1.6, 180);
    const wrapper = shallow(
      <BookingInvoice bookingInvoice={bookingInvoiceObj} showNumber={1} />
    );
    expect(wrapper.find(Paper).dive()).toHaveLength(1);
  });
});
