import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid, 
  Row, 
  Col
} from 'react-bootstrap';
import { 
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

import TodoListComponent from './todolist.component';
import TodoListUpdateForm from './todolist-updateform.component';
import NavComponent from './navcomponent.component';
import HomeComponent from './homecomponent.component';
import AboutComponent from './aboutcomponent.component';


class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(newTodo) {
    console.log('received new todo! ' + newTodo);
    let currentTodos = this.state.todos.slice();
    currentTodos.push(newTodo)
    this.setState({
      todos: currentTodos
    }, () => console.log(this.state.todos));
  }

  handleDelete(index) {
    console.log('deleting: ' + this.state.todos[index]);
    let data = this.state.todos.slice();
    data = data.filter( (el, i_index) => {
      return  i_index !== index;
    } )

    this.setState({
      todos: data
    });
  }

  render() {
    return (
      <Row>
        <br />
        <Col md={8} mdOffset={2} lg={8} lgOffset={2} sm={8} smOffset={2} xs={8} xsOffset={2}>
          <TodoListUpdateForm onSubmit={this.handleSubmit}></TodoListUpdateForm>
          <Row><hr></hr></Row>
          <TodoListComponent todos={this.state.todos} handleDelete={this.handleDelete}></TodoListComponent> 
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(
  <Router>
    <Grid >
      <Row>
        <NavComponent />
      </Row>
      <Row>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/todo" component={MainComponent}/>
        <Route path="/about" component={AboutComponent}/>
      </Row>
    </Grid>
  </Router>,
  document.getElementById('root')
);
