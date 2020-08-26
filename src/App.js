import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Form from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], //my list
      text: '', // text of input
      completed: {}, //logical flags
      id: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleChange = e => {
    this.setState({text: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length < 34) {
      this.state.items.push(this.state.text);
      this.setState({
        items: this.state.items,
        text: ''
      });
    } else {
      alert("limit 33 characters");
    }
  }

  handleCheck = (id, e) => {
    this.setState({
      completed: {...this.state.completed, [id]: !this.state.completed[id]}
    });
  }

  handleDeleteItem = id => {
    this.state.items.splice(id, 1);
    this.setState({
      items: this.state.items
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row container__row container_colored">
          <div className="col-12 container__columns">
            <div className="todo-main" id="todo">
              <h2 className="todo-title"><span className="todo-title__text">To do:</span></h2>
              <TodoList 
                todos={this.state.items}
                finished={this.state.completed}
                handlerCheck={(e) => {this.handleCheck(e)}}
                handlerDeleteItem={(e) => {this.handleDeleteItem(e)}} 
              />
              <Form 
                handlerSubmit={this.handleSubmit} 
                handlerChange={this.handleChange}
                field={this.state.text} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}