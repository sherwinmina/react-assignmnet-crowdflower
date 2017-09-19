import React, { Component } from "react";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Button, Container, Grid, Card, Icon, Item, List, Label, Message, Modal } from "semantic-ui-react";

import { fetchTasks, addTask, postData, closeModal, showModalSucces, showModalFailed } from "../actions";
require("./app.css");
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchTasks();
  }
 
  handleSave() {
    const {all} = this.props.tasks;
    this.props.postData(all)
  }

  handleAddTask() {
    this.props.addTask();
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    const{all, initialFetch , error, showModalSuccess, showModalFailed } = this.props.tasks;
    const SuccesModal = (
              <Container style={{display: 'flex', justifyContent: 'center'}}>
                <div id='confirm'>
                  <h4>Task succesfully saved.</h4>
                  <Icon name='close' onClick={this.closeModal}/>
                </div>
              </Container>
            );

    const FailedModal = (
              <Container style={{display: 'flex', justifyContent: 'center'}}>
                <div id='failed-modal'>
                  <h4>Unable to save your tasks.</h4>
                  <Icon name='close' onClick={this.closeModal}/>
                </div>
              </Container>
            );


    let saveButton = null;
      if (all === initialFetch || all.length === 0 || error === null ) {
        saveButton = <Button floated="right" disabled>Save</Button>;
      } else {
        saveButton = 
        <Button floated="right" color="teal" onClick={this.handleSave}>Save</Button> 
      }

      let conditionalRender = null;
        if( error === null ) {
          conditionalRender = <Message negative>
                                <Message.Header>Sorry unable to fetch your task list.</Message.Header>
                                <p>Please try again later.</p>
                              </Message>

        } else {
          conditionalRender = <TaskList />
        }

    return (
      <div>
      
        <div style={{height: "60px", background: "#37474F"}}></div>  
        
          { showModalSuccess ? SuccesModal : null}
          { showModalFailed ? FailedModal : null}

          <Container>
            <Grid style={{paddingBottom: "20px", paddingTop: "60px"}} >
              <Grid.Column floated="left" width={8}>
              <h1 style={{color:'#607D8B'}}>Tasks </h1>

              </Grid.Column>
              <Grid.Column  width={8}>
               {saveButton}
                <Button floated='right' onClick={this.handleAddTask}>Add Task</Button>
              </Grid.Column>
            </Grid>
            {conditionalRender}
            
          </Container>

      </div>
    );
  }
}


 

//to do add proptypes

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { fetchTasks, addTask, postData, closeModal })(App);
