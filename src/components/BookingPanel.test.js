import React from "react";
import { shallow } from "enzyme";
import BookingPanel from "./BookingPanel";

describe("BookingPanel", () => {
  it('Should render BookingPanel component correctly', () => {
    const wrapper = shallow(
      <BookingPanel  />
    );
    expect(wrapper.find('.showNumber')).toHaveLength(1);
  });

});
