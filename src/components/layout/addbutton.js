import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './addbutton.css';

export class addbutton extends Component {
    render() {
        return (
            <React.Fragment>
                <Link style={linkStyle} to="/addform">
                    <div className="more">
                        <button className="addtech">
                            Add
                            <i className="material-icons">
                                add_circle_outline
                            </i>
                        </button>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default addbutton;
