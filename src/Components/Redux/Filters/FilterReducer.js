import { SEARCHVALUE } from "./ActionType";

// Post Feature image

const intialValue = {
  value: "",
};

const FilterReducer = (state = intialValue, action) => {
  switch (action.type) {
    case SEARCHVALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
