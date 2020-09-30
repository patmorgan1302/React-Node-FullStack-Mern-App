import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Button, Carousel, Nav, Container, Row, Col, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import PPImage from "./patspad.jpeg";

const App = () => {
  return (
        <div>
          <section className="cover text-center">
            <div className="cover-container pb-5">
            <Button href="https://github.com/" style={{marginLeft: "21px"}} className="github-button" variant="outline-light">Github</Button>{' '}
            <Button className="github-button" variant="outline-light">Blog</Button>{' '}
                <div className="cover-inner container" style={{marginTop: "155px"}}>
                    <h1 className="header-one"><strong>Patrick Morgan</strong></h1>
                    <h2 className="header-two"><em>Full-Stack Web Developer</em></h2>
                    <p style={{fontSize: '22px'}} className="lead">A passionate designer and web application devoloper, hardworking and always looking to learn more.</p>
                    <p style={{marginTop: "155px", marginRight: "35px"}}>
                      <a href="/" className="btn btn-white btn-lg mb-2 ml-2 ml-2">View Portfolio</a>
                      <a href="/" className="btn btn-outline-white btn-lg mb-2 ml-2 ml-2">Contact Me</a>
                    </p>
                </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="font-weight-dark">Project Examples</h2>
              <br />
              <br />
              <p style={{fontSize: '20px'}}>Below are some examples of fluid SPA apps that I have built using various web-based technologies and languages. 
                Some of the projects I've incluced are a mock social-media site build on the MERN stack, a React-Redux shopping cart,
                 and a real time chat-app built on Socket.io.
              </p>
              <br />
              {/* <CreateStudent /> */}
            </div>
          </section>

          <section className="cover text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={PPImage}
                alt="First Slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </section>

          <section>
            <Router>
              <div className="App">
              <section className="py-5">
                <div className="container">
                <h2 className="font-weight-dark">CRUD Example Project</h2>
                <Navbar bg="none" variant="light">
                    <Container >
                      <Nav style={{marginBottom: '35px'}}className="justify-content-end" >
                        <Nav>
                          <Link to={"/create-student"} className="nav-link">
                            Create To-Do
                          </Link>
                        </Nav>
                        <Nav>
                          <Link to={"/student-list"} className="nav-link">
                            To-Do List
                          </Link>
                        </Nav>
                      </Nav>
                    </Container>
                  </Navbar>
                  <Container>
                    <Row>
                      <Col md={12}>
                        <div className="wrapper">
                          <Switch>
                            <Route exact path='/' component={CreateStudent} />
                            <Route path="/create-student" component={CreateStudent} />
                            <Route path="/edit-student/:id" component={EditStudent} />
                            <Route path="/student-list" component={StudentList} />
                          </Switch>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>
              </div>
            </Router>
          </section>
        </div>
        )
      };

export default App;




