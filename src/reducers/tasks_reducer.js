import { FETCH_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, SAVE, REORDER } from "../actions";

const INITIAL_STATE = { all: [], initialFetch: [], error: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return { ... state, 
              all: action.payload.data.tasks, 
              initialFetch: action.payload.data.tasks, 
              error: action.payload.status

            };
    
    case ADD_TASK:
      return { ...state, all: [ action.payload, ...state.all] };
    
    case DELETE_TASK:
      
      return { ...state, all: [  ...state.all.slice(0, action.payload),
                                 ...state.all.slice(action.payload + 1)]};
    
    // case UPDATE_TASK:
    //   return { ...state, tasks: action.payload.data };
    
    case SAVE:
      return { ...state };
    
    // case REORDER:
    //   return { ...state, tasks: action.payload.data };
    
    default:
      return state;
  }
}
