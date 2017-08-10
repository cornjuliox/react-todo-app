import React from 'react';
import {FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class TodoListUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('submitted')
    if (this.state.todo === '') {
      event.preventDefault();
      return;
    } else {
      this.props.onSubmit(this.state.todo)
      this.setState({todo: ''});
      event.preventDefault();
    }
  }

  render() {
    return (
      <div flex layout="row">
        <form onSubmit={this.handleSubmit}>
          <ControlLabel>
            Enter a task here:
          </ControlLabel>
          <FormControl 
            type="text"
            value={this.state.todo}
            placeholder="Enter your text here"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  };
}
