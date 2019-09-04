import React from "react";
import { shallow } from "enzyme";
import Paper from "@material-ui/core/Paper";
import SalesInvoice from "./SalesInvoice";
import RevenueInvoice from './../model/RevenueInvoice';

describe("SalesInvoice", () => {
  it('Should render SalesInvoice component correctly', () => {
    const revenueInvoiceObj = new RevenueInvoice(100, 3.2, 1.6, 1.6);
    const wrapper = shallow(
      <SalesInvoice sales={revenueInvoiceObj}  />
    );
    expect(wrapper.find(Paper).dive()).toHaveLength(1);
  });
});
