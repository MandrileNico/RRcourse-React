import React, { Component } from 'react';
import './headerList.css';

class headerList extends Component{
    getStyle = () => {
        return {
            display: 'flex',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // textDecoration: this.props.todo.completed ?
            // 'line-through' : 'none'
        }
    }
    render() {
        return (
        <div style={this.getStyle()}>
            <p className="idheader">
                Id
            </p>
            <p className="nameheader">
                 First name  
            </p>
            <p className="name2header">
                 Last name  
            </p>
            <p className="emailheader">
                Email 
            </p>
            <p className="typeidheader">
                Type Ids  
            </p>
            <p className="skillidheader">
                Skills Id  
            </p>
            <p className="hourrateheader">
                 Hour rate  
            </p>
            <p className="dailycapheader">
                Daily capacity 
            </p>
            <p className='updateheader'>
                    Last update
                </p>
            <p className="actions">
                Actions
            </p>
        </div> 
        )

    }
}

export default headerList;