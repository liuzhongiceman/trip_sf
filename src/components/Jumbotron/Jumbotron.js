import React, { Component } from 'react';
import './Jumbotron.css';
import Form from '../Form/Form';


class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <Form />
            </div>
        )
    }
}

export default Jumbotron;