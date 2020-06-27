import {
  FILE_UPLOAD_INIT,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  UPDATE_FILE_DATA,
  UPDATE_FILE_DATA_SUCCESS,
  UPDATE_FILE_DATA_FAILURE
} from "../types/fileUpload";
import { checkMimeType } from "../../helpers";

export const initFileUpload = files => dispatch => {
  dispatch({ type: FILE_UPLOAD_INIT });

  try {
    if (files.length) {
      const file = files[0];
      const isValidType = checkMimeType(file);
      if (isValidType) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = evt => {
          const contents = evt.target.result;
          const lines = contents.split("\n"); // split file content by space

          dispatch({
            type: FILE_UPLOAD_SUCCESS,
            payload: { data: lines }
          });
        };
      } else {
        dispatch({
          type: FILE_UPLOAD_FAILURE,
          payload: { error: "Not valid file" }
        });
      }
    }
  } catch (e) {
    dispatch({ type: FILE_UPLOAD_FAILURE, payload: { error: e } });
  }
};

export const updateFileData = (fileData, delimiter) => dispatch => {
  dispatch({ type: UPDATE_FILE_DATA });

  try {
    let updatedData = fileData.map(line => {
      if (delimiter && !Array.isArray(line)) return line.split(delimiter);
      return line;
    });

    dispatch({
      type: UPDATE_FILE_DATA_SUCCESS,
      payload: { data: updatedData }
    });
  } catch (e) {
    dispatch({
      type: UPDATE_FILE_DATA_FAILURE,
      payload: { error: "error while updating" }
    });
  }
};
