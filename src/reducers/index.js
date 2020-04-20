import { ADD_LOG, DELETE_LOG } from "../constants/action-types";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  logs: [
    {
      id: uuidv4(),
      title: "Alarm hight energy consumption is triggered",
      message: "Energy consumption of this asset is high. Please resolve this issue ASAP",
      time: new Date()
    }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_LOG) {
    return { ...state, logs: [...state.logs, action.payload] }
  };
  if (action.type === DELETE_LOG) {
    const newState = state.logs.filter(item => {
      return item.id !== action.payload
    });
    return { logs: newState }
  }
  return state;
}
export default rootReducer;
