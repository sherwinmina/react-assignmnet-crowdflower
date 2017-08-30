import axios from "axios";

export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const SAVE = "SAVE";
export const REORDER = "REORDER";

const ROOT_URL = "http://cfassignment.herokuapp.com/kevin/tasks";

export function fetchTasks() {
  const request = axios.get(`${ROOT_URL}`)
    .catch(function(error) {
      console.log(error);
    });;

  return {
    type: FETCH_TASKS,
    payload: request
  };
}

export function addTask(props) {
  let task = "Make some Noodles";

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


export function updateTask(id) {
  
  return {
    type: UPDATE_TASK,
    payload: request
  };
}

export function save() {
  // const request = axios.post(`${ROOT_URL}`, props);

  // axios
  // .post("http://cfassignment.herokuapp.com/kevin/tasks", {
  //   tasks: this.state.tasks.all
  // })
  // .then(response => {
  //   console.log(response);
  //   alert("saved tasks sucessfully");
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });
  // console.log(this.state)
  
  return {
    type: SAVE,
    payload: 1
  };
}

export function reorder(id) {
  return {
    type: REORDER,
    payload: request
  };
}




