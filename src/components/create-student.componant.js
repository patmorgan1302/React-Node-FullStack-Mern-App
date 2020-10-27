import React, { Component } from "react";
import {Form, Button, Table} from 'react-bootstrap';
import axios from 'axios';

import StudentTableRow from '../components/StudentTableRow';


export default class CreateStudent extends Component {
  constructor(props) {
    super(props)

    this.onChangetName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
    this.state = {
     
      updateInterval: 1,
      name: '',
      students: []

    }
  };

  componentDidMount() {
    axios.get('http://localhost:8080/students/')
      .then(res => {
        this.setState({
          name: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const studentObject = {
      name: this.state.name,
    };
  

    axios.post('http://localhost:8080/students/', studentObject)
      .then(res => console.log(res.data));
      this.setState(prevState => ({
          students: [
            ...prevState.students,
            {
              updateInterval: prevState.updateInterval,
              id: Date.now()
            }
          ]
        }))
  
     
    };
          
    

  render() {


    return (
      <div>
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>To Do</Form.Label>
              <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
            </Form.Group>

            <Button style={{marginBottom: '6px'}} variant="success" size="lg" block="block" type="submit">
              Add To Do
            </Button>
          </Form>
        </div>

        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {this.DataTable()}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  updateIntervalSetting = increment => {
    this.setState(prevState => {
      if (prevState.updateInterval + increment <= 1) return { updateInterval: 1 }
      return {
        updateInterval: prevState.updateInterval + increment
      }
    })
  }

  handleAddTimer = () => {
    this.setState(prevState => ({
      students : [
        ...prevState.students,
        {
          updateInterval: prevState.updateInterval,
          id: Date.now()
        }
      ],
    }))
  }

};


