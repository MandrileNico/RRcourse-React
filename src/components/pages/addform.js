import React, { Component } from 'react';
import AddTodo from '../../AddTodo';
import Axios from 'axios';
import PropTypes from 'prop-types';

export default class addform extends Component {
    //Add Todo
  addTodo = (id, first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity) => {
    Axios.post('https://rrcaldar.herokuapp.com/technicians', {
      id,
      first_name,
      last_name,
      email,
      typeIds,
      skillsId,
      hour_rate,
      daily_capacity
    })
      .then(res =>this.setState({ todos: this.state.todos }));
  }
    render() {
        return (
            <div className="about">
                <h1>Form for add a Technicians</h1>
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                </React.Fragment>
            </div>
        )
    }
}
addform.propTypes = {
    todos: PropTypes.array.isRequired,
}
