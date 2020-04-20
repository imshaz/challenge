import { UPDATE_CONFIG, SET_DATE } from "../constants/action-types";
// import moment from "moment";
const initialState = {

};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_CONFIG) {
    return { chartData: { ...action.payload } };
  }
  if (action.type === SET_DATE) {
    return { date: { ...action.payload } };
  }
  return state;
}

export default rootReducer;
