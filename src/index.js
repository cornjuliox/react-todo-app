import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid, 
  Row, 
  Col,
  Panel,
  Jumbotron,
  Button } from 'react-bootstrap';
import { 
  BrowserRouter as Router, 
  Route,
  Link } from 'react-router-dom';

import './index.css';
import TodoListComponent from './todolist.component';
import TodoListUpdateForm from './todolist-updateform.component';
import NavComponent from './navcomponent.component';


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
        <Col md={2}></Col>
        <Col md={8}>
          <TodoListUpdateForm onSubmit={this.handleSubmit}></TodoListUpdateForm>
          <Row><hr></hr></Row>
          <TodoListComponent todos={this.state.todos} handleDelete={this.handleDelete}></TodoListComponent> 
        </Col>
        <Col md={2}></Col>
      </Row>
    );
  }
}

class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> More coming! </h1>
      </div>
    )
  }
}

class HomeComponent extends React.Component {
  render() {
    return ( 
      <Row>
        <Jumbotron>
          <h1>Making To-Do Simple</h1>
          <p>Spend less time thinking about things to do, and more time actually doing things</p>
          <p><Link to="/todo"><Button>Try it!</Button></Link></p>
        </Jumbotron>
        <Panel header="Introduction">
          Made by the same brilliant mind that brought classics such as 'Hello World' and 'Fizzbuzz', Todo App hopes to revolutionize the way the
          world works by leveraging the latest in front-end technologies to maximize value and advance your personal agenda - one task at a time.
        </Panel>
      </Row>
      
   )
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
