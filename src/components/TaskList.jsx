import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask, updateTask, reorder } from "../actions";
import {
  Grid,
  Card,
  Icon,
  Item,
  List,
  Label,
  Modal,
  Button
} from "semantic-ui-react";
import ReactSortable from "react-sortablejs";



 
class TaskList extends Component {
  
  handleDelete(index, task){
    this.props.deleteTask(index, task);
  }
 
  render () {
    console.log(this.props)
   
    const list = this.props.tasks.all.map((task, index) => {
      return (
        <Card key={index} fluid style={{ minHeight: "120px" }}>
                <Card.Content>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Label>
                      <Icon
                        name="grid layout"
                        size="large"
                        onClick={() => {
                          alert(task + " updating");
                        }}
                      /> TASK
                    </Label>
                    
                      <Modal 
                          trigger={ <Icon name="trash outline" color="grey" size="large"
                                onClick={this.handleDelete.bind(this, index, task)}/>} 
                          closeIcon
                          style={{ textAlign: 'center', border: '2px solid orange'}}>
                          <Modal.Content>
                            
                            <h4>Deleted "{task}" task!</h4>
                            <p>Click save to permanently make these changes</p>
                        </Modal.Content>
                      </Modal>



                  </div>
                  <h2 style={{ textAlign: "center" }}>{task}</h2>
                </Card.Content>
              </Card>
            );
          });

         
        
        
      return (
        <div>
        <ReactSortable
            tag="ul"
            items={list}
        >
           
        </ReactSortable>
        </div>
      );   
    }
  }

  
function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { deleteTask, updateTask, reorder})(TaskList);
