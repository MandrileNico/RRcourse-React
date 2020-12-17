import React, { Component } from 'react';
import propTypes from 'prop-types';
import './AddTodo.css'
export default class AddTodo extends Component {
    state = {
        id:'',
        first_name: '',
        last_name:'',
        email:'',
        typeIds:[],
        skillsId: [],
        hour_rate:'',
        daily_capacity:'',
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.id,this.state.first_name, this.state.last_name, this.state.email, this.state.typeIds,
            this.state.skillsId, this.state.hour_rate, this.state.daily_capacity);
        this.setState({ id: '' }, { first_name: ''}, { last_name:'' }, { email:''}, { typeIds: ''}, { skillsId: ''},
        { hour_rate: ''}, { daily_capacity: ''});
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} className = "techform">
                <div className = "cage">
                <h2>Id:</h2>
                <input
                type="number"
                name="id"
                style={{flex: '2', padding: '5px' }}
                placeholder="Id"
                value={this.state.id}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>First Name:</h2>
                <input
                type="text"
                name="first_name"
                style={{flex: '2', padding: '5px' }}
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Last name:</h2>
                <input
                type="text"
                name="last_name"
                style={{flex: '2', padding: '5px' }}
                placeholder="First Name"
                value={this.state.last_name}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Email:</h2>
                <input
                type="text"
                name="email"
                style={{flex: '2', padding: '5px' }}
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Type Ids:</h2>
                <input
                type="string"
                name="typeIds"
                style={{flex: '2', padding: '5px' }}
                placeholder="Type Ids"
                value={this.state.typeIds}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Skills Id:</h2>
                 <input
                type="strig"
                name="skillsId"
                style={{flex: '2', padding: '5px' }}
                placeholder="Skills Id"
                value={this.state.skillsId}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Hour rate:</h2>
                 <input
                type="text"
                name="hour_rate"
                style={{flex: '2', padding: '5px' }}
                placeholder="Hour rate"
                value={this.state.hour_rate}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <h2>Daily capacity:</h2>
                 <input
                type="number"
                name="daily_capacity"
                style={{flex: '2', padding: '5px' }}
                placeholder="Daily capacity"
                value={this.state.daily_capacity}
                onChange={this.onChange}
                />
                </div>
                <div className = "cage">
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
                </div>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired,
}