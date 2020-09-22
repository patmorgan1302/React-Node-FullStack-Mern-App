import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {
  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  };

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.post('http://localhost:8080/students/', studentObject)
      .then(res => console.log(res.data));
      this.setState({
        name: '',
        email: '',
        rollno: ''
      });
    };
                                                                                
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>To Do</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>To Do Description</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button style={{marginBottom: '6px'}} variant="success" size="lg" block="block" type="submit">
          Add To Do
        </Button>
      </Form>
    </div>);
  }
}
