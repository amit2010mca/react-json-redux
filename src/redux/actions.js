import * as types from "./actionType";
import axios from "axios";

const getCars = (cars) => ({
  type: types.GET_CARS,
  payload: cars,
});

export const loadCars = () => {
  return function (dispatch) {
    console.log("Amit singh I am here!");
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("Response:", resp);
        dispatch(getCars(resp.data));
      })
      .catch((e) => console.log(e));
  };
};
