import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from  './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import HeaderList from './components/layout/headerList';
import Addform from './components/pages/addform';
import Addbutton from './components/layout/addbutton';
import Axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }
  // Get technicians, OK
  componentDidMount() {
    Axios.get('https://rrcaldar.herokuapp.com/technicians')
      .then(res => this.setState({ todos: res.data }))
  }

  //Delete Todo, anda OK ojo q se eliminan en mongo
  delTodo = (id) => {
    Axios.delete(`https://rrcaldar.herokuapp.com/technicians/${id}`)
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
  addTodo = (first_name) => {
    Axios.post('https://rrcaldar.herokuapp.com/technicians', {
      //userId: uuidv4(),
      first_name,
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
                <HeaderList />
                <Todos todos={this.state.todos}  
                delTodo={this.delTodo} />
                <Addbutton />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path="/addform" component={Addform} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
