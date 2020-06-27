import { checkMimeType } from "./";

describe("Helpers", () => {
  test("checkMimeType should be falsy", () => {
    const mockFileData = {
      type: "application/pdf"
    };
    const isValidType = checkMimeType(mockFileData);
    expect(isValidType).toBeFalsy();
  });

  test("checkMimeType should be truthy", () => {
    const mockFileData = {
      type: "text/plain"
    };
    const isValidType = checkMimeType(mockFileData);
    expect(isValidType).toBeTruthy();
  });
});
