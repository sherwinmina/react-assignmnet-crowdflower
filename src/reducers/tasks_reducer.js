import {  FETCH_TASKS, ADD_TASK, DELETE_TASK, 
          UPDATE_TASK, REORDER, POST_DATA_SUCCES,
          POST_DATA_FAIL, SHOW_MODAL_SUCCESS, 
          SHOW_MODAL_FAILED, CLOSE_MODAL } 
      from "../actions";

const INITIAL_STATE = { all: [], initialFetch: [], error: null, showModalSuccess: false, showModalFailed: false };

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
                                 ...state.all.slice(action.payload + 1)]
              };
    
    case UPDATE_TASK:
      return { ...state, all: [...state.all.slice(0,
                                action.payload.index),
                                action.payload.replacement, 
                                ...state.all.slice(action.payload.index + 1)] 
              };
    
    case REORDER:
      return { ...state, all: action.payload};

    case POST_DATA_SUCCES:
      return { ...state, all: action.payload.data.tasks, 
              initialFetch: action.payload.data.tasks, 
              error: '' };
    
    case POST_DATA_FAIL:
      return { ...state, error: action.payload };
      
    case CLOSE_MODAL:
      return { ...state, showModalSuccess: false, 
                showModalFailed: false };
    
    case SHOW_MODAL_SUCCESS:
      return { ...state, showModalSuccess: action.payload };
    
    case SHOW_MODAL_FAILED:
      return { ...state, showModalFailed: action.payload };
  
    default:
      return state;
  }
}
