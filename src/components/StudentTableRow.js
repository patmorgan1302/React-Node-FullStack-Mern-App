import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {
    constructor(props){
        super(props);
        
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8080/students/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        };

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>
                    <Button variant="warning">
                        <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>Edit</Link>
                    </Button>
                    <Button onClick={this.deleteStudent} style={{marginLeft: '6px'}} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}