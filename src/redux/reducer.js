import * as types from "./actionType";

const initialState = {
  cars: [],
  car: {},
  loading: true,
};

const carsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default carsReducers;
