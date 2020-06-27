import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Input from "./";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Input", () => {
  const mockeInputHandler = jest.fn();
  const mockFileTypeHandler = jest.fn();

  test("render correctly", () => {
    const mockProps = {
      type: "text",
      name: "name",
      changeHandler: mockeInputHandler
    };
    let wrapper = renderer.create(<Input {...mockProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test("should handle input type file", () => {
    const mockProps = {
      type: "file",
      name: "fileInput",
      changeHandler: mockFileTypeHandler
    };
    const mockFile = new File(["sample"], "sample.txt", {
      type: "text/plain"
    });
    const { container } = render(<Input {...mockProps} />);
    const input = container.firstChild;
    fireEvent.change(input, { target: { files: [mockFile] } });

    expect(mockFileTypeHandler).toHaveBeenCalledTimes(1);
  });

  test("should handle input type text", () => {
    const { container } = render(
      <Input type="text" changeHandler={mockeInputHandler} />
    );
    const input = container.firstChild;
    fireEvent.change(input, { target: { value: "value" } });
    expect(mockeInputHandler).toHaveBeenCalledTimes(1);
    expect(input.value).toEqual("value");
  });
});
