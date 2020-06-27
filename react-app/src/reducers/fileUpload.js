import {
  FILE_UPLOAD_INIT,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
  UPDATE_FILE_DATA_SUCCESS,
  UPDATE_FILE_DATA_FAILURE
} from "../actions/types/fileUpload";

const initialState = {
  fileData: null,
  isLoading: false,
  error: null
};

const fileUpload = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILE_UPLOAD_INIT: {
      return {
        ...initialState,
        isLoading: true
      };
    }

    case FILE_UPLOAD_SUCCESS:
    case UPDATE_FILE_DATA_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        isLoading: false,
        fileData: data
      };
    }

    case FILE_UPLOAD_FAILURE:
    case UPDATE_FILE_DATA_FAILURE: {
      const { error } = payload;
      return {
        ...state,
        isLoading: false,
        fileData: null,
        error
      };
    }

    default: {
      return initialState;
    }
  }
};

export default fileUpload;
