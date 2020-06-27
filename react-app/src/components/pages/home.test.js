import React from "react";
import renderer from "react-test-renderer";
import Home from "./home";

describe("Home", () => {
  const mockProps = {
    fileUpload: { fileData: null },
    actions: { initFileUpload: jest.fn() }
  };

  test("renders correctly", () => {
    const wrapper = renderer.create(<Home {...mockProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
