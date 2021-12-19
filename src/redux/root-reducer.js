import { combineReducers } from "redux";
import carsReducers from "./reducer";

const rootReducer = combineReducers({
  carsData: carsReducers,
});

export default rootReducer;
