import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from  './components/Todos';
import AddTodo from  './AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
//import { v4 as uuidv4 } from 'uuid'
import Axios from 'axios';
import technicians from './technicians-data';

class App extends Component {

  state = {
    todos: technicians
  }

  // componentDidMount() {
  //   Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }))
  // }

  //Delete Todo
  delTodo = (id) => {
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  //Toggle completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Add Todo
  addTodo = (title) => {
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      //userId: uuidv4(),
      title,
      completed: false
    })
      .then(res =>this.setState({ todos: [...this.state.todos, res.data] }));
    
  }

  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="conteiner">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
