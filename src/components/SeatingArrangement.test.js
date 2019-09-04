import React from "react";
import { shallow } from "enzyme";
import SeatingArrangement from "./SeatingArrangement";

describe("SeatingArrangement", () => {
  it('Should render SeatingArrangement component correctly', () => {
    const wrapper = shallow(
      <SeatingArrangement  />
    );
    expect(wrapper.find('.seatingArrangement')).toHaveLength(1);
  });

});
