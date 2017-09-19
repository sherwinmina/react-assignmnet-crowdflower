import axios from "axios";

export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const REORDER = "REORDER";

export const POST_DATA_SUCCES = "POST_DATA_SUCCES";
export const POST_DATA_FAIL = "POST_DATA_FAIL";
export const SHOW_MODAL_SUCCESS = "SHOW_MODAL_SUCCESS";
export const SHOW_MODAL_FAILED= "SHOW_MODAL_FAILED";
export const CLOSE_MODAL = "CLOSE_MODAL";

const ROOT_URL = "http://cfassignment.herokuapp.com/kevin/tasks";

export function fetchTasks() {
  const request = axios.get(`${ROOT_URL}`)
  
  return {
    type: FETCH_TASKS,
    payload: request
  };
}

export function addTask(props) {
  let task = "Just Added a Task";
  
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function deleteTask(index, task) {
  return {
    type: DELETE_TASK,
    payload: index
  };
}


export function updateTask(replacement, index) {
  return {
    type: UPDATE_TASK,
    payload: {replacement, index}
  };
}

export function postDataFail(error) {
  return {
    type: POST_DATA_FAIL,
    payload: error
  };
}

export function postDataSuccess(data) {
  return {
    type: POST_DATA_SUCCES,
    payload: data
  }
}

export function postData(task) {
  
  return (dispatch) => {
    axios.post("http://cfassignment.herokuapp.com/kevin/tasks", {
      tasks: task
    })
    .then(response => {
      console.log(response);
      dispatch(postDataSuccess(response))
      dispatch(showModalSuccess())
      // alert("saved tasks sucessfully");
    })
    .catch((error) => {
      dispatch(postDataFail(error));
      // alert("Failed to save your task")
      dispatch(showModalFailed())
      console.log(error);
    });
  }
}

export function showModalSuccess() {
  return {
    type: SHOW_MODAL_SUCCESS,
    payload: true
  };
}

export function showModalFailed() {
  return {
    type: SHOW_MODAL_FAILED,
    payload: true
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
}

export function reorder(reorderedTask) {
  return {
    type: REORDER,
    payload: reorderedTask
  };
}




