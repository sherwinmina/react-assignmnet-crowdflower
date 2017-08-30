import { combineReducers } from "redux";
import TaskReducer from "./tasks_reducer";


const rootReducer = combineReducers({
  tasks: TaskReducer
});

export default rootReducer;
