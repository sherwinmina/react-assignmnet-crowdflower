# React Assignment Crowd Flower

A working prototype of a sortable list for Tasks and load/save that list to the server using React and Redux.

It has two endpoints for fetching and saving your tasks. Provided endpoints will fail randomly to help you and us manually test unhappy paths.

  ####Component Behavior####
  * A sortable list for Tasks and load/save that list to the server.

  * Sortable list of tasks. User can drag and drop tasks to change their order. Load the list when the app starts.
  * “New task” button will create a new task and place it on top of the list
  * “Save” button
    * Is disabled by default
    *   Is set enabled when current state of the list doesn’t match it’s initial state (the list have been reordered, task    added, deleted or renamed)
    * On click will send a POST request to the server with current state of the list. Show success/failure alert after     successful/failed request.
  * “trash” button
      * deletes the task from the list
  * Alert component
    * “x” button will remove the alert
  * "Task" label should be editable and set in focus when new task is added

 
## Getting Started

```
run npm install --to download node modules
run npm start  --runs webpack-dev-server, the file will be serve on http://localhost:8080/
```

## Running the tests

```
npm run test
```

### List of things to test

Test the response from the end point are handled for success and error cases





