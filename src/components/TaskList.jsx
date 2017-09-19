import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask, updateTask, reorder, inputValue } from "../actions";
import { Grid, Card, Icon, Item, List, Label, Modal,Button, Input, Form, Segment, Dimmer, Container } from "semantic-ui-react";
import DragSortableList from "react-drag-sortable";
require( "./TaskList.css");

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {value: '', showModal: false, indextoUpdate: ''};
    
    this.showModal = this.showModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  showModal(index, task){
    this.setState({showModal: true, indextoUpdate: index})
  }

  handleModal(index, task) {
    this.setState({ showModal: false, value: '' })
  }

  onSort(sortedList, dropEvent) {
    const reorderedTask = sortedList.map((item, i, array) =>{
      return item.task
    })
    this.props.reorder(reorderedTask);      
  }

  handleChange(event){
    event.preventDefault();
    this.setState({value: event.target.value});
  }


  handleSubmit(event){
    const {value, indextoUpdate } = this.state
    this.props.updateTask(value, indextoUpdate );
    this.setState({ showModal: false, indextoUpdate: '', value: '' });
  }

  handleDelete(index, task){
    this.props.deleteTask(index, task);
  }
 
  render () {
    const {all} = this.props.tasks;
    var {value} = this.state;

    const ShowModal = (
        <Container style={{display: 'flex', justifyContent: 'center'}}>
       
        <Form id="modal" onSubmit={this.handleSubmit}>
          <Form.Group id="modal-input">
            <Form.Input
              style={{width: '350px'}}
              placeholder="Update this Task"
              
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br/>
            <Form.Button color="teal" compact content="Update" onSubmit={this.handleSubmit}/>
            <Form.Button color="orange" compact content="cancel" onClick={this.handleModal} />
          </Form.Group>
        </Form>
        </Container>
      );

    const list = all.map((task, index) => {
      return {
        task: task,
        content: (
        <div style={{paddingBottom:"8px"}}>
        <Card id='list' key={index} fluid style={{ minHeight: "120px"}}>
                <Card.Content>
                  <div  id='tab' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >     
                    
                    <Icon name='grid layout' size="large" style={{color: 'grey', display: 'flex', flexDirection: 'row'}} 
                          onClick={this.showModal.bind(this, index, task)}>
                      <h4 style={{padding:'5px', paddingBottom: '500px'}}>TASK</h4>
                    </Icon>
          
                     <Icon id='tab'  name="trash outline" color="grey" size="large"
                           onClick={this.handleDelete.bind(this, index, task)}/>
                  </div>
                  <h3 style={{ textAlign: "center", color: 'grey' }}>{task}</h3>
                </Card.Content>
              </Card>
              </div>
            )}
          });
   
    return (
      <div>
        {this.state.showModal ? ShowModal :null }
        <Dimmer.Dimmable as={Segment} blurring dimmed={this.state.showModal}>
           <DragSortableList style={{padding:"30px"}} items={list} onSort={this.onSort.bind(this)} 
                          moveTransitionDuration={0.5} type="vertical" />
        </Dimmer.Dimmable>
      </div>
      );   
    }
  }
// add proptypes

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { deleteTask, updateTask, reorder })(TaskList);
