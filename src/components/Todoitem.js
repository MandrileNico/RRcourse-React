import { Component } from 'react';
import PropTypes from 'prop-types';
import './todoitem.css';
var f = new Date();

export class TodosItem extends Component{
    getStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'space-between',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    render() {
        const { id, first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                </p>
                <p className="nametec">
                    { first_name } 
                </p>
                <p className="name2tech">
                    { last_name } 
                </p>
                <p className="emailtech">
                    { email } 
                </p>
                <p className="typeid">
                    { typeIds } 
                </p>
                <p className="skillid">
                    { skillsId } 
                </p>
                <p className="hourrate">
                    { hour_rate } 
                </p>
                <p className="dailycap">
                    { daily_capacity }
                </p>
                <p>
                    <span className="dateStyle">{ f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() }</span>
                    <button onClick={this.props.delTodo.bind(this, id)} className="btnStyle">x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


export default TodosItem; 