import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import * as calculatorContainerReducer from "Containers/CalculatorContainer/reducers";

export default combineReducers({
  routing: routerReducer,
  ...calculatorContainerReducer
});
