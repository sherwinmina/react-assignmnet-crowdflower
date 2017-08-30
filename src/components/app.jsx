import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks, addTask, save} from "../actions";
import { Button, Container, Grid, Card, Icon, Item, List, Label, Message, Modal } from "semantic-ui-react";
import axios from 'axios';

import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);

  }

  componentWillMount() {
    this.props.fetchTasks();
  
  }

  handleSave() {
    this.props.save();
  }

  handleAddTask() {
    this.props.addTask();
  }

  render() {
    console.log(this.props)
    const { all, initialFetch } = this.props.tasks;

    let saveButton = null;
      if (all === initialFetch) {
        saveButton = <Button floated="right" disabled>Save</Button>;
      } else {
        saveButton = 
        <Modal trigger={<Button floated="right" color="teal" onClick={this.handleSave}>Save</Button> }
          closeIcon
          style={{ color: 'green', textAlign: "center", border: "2px solid" }}
        >
          <Modal.Content>
            <h4>Tasks saved succesfully!</h4>
            
          </Modal.Content>
        </Modal>

      }

    
    return (
      <div>
        <div style={{height: "60px", background: "#37474F"}}></div>  
          <Container >
            <Grid style={{paddingBottom: "20px", paddingTop: "60px"}} >
              <Grid.Column floated="left" width={8}>
              <h1 style={{color:'#607D8B'}}>Tasks </h1>

              </Grid.Column>
              <Grid.Column  width={8}>
               {saveButton}
                <Button floated='right' onClick={this.handleAddTask}>Add Task</Button>
              </Grid.Column>
            </Grid>

            <TaskList/>
          </Container>

      </div>
    );
  }
}
 

//to do add proptypes

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks, addTask, save })(App);
