import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Button, Carousel } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CreateStudent from "./components/create-student.component";
// import EditStudent from "./components/edit-student.component";
// import StudentList from "./components/student-list.component";



const App = () => {
  return (
        <div>
          <section className="cover text-center">
            <div className="cover-container pb-5">
            <Button style={{marginLeft: "21px"}} className="github-button" variant="outline-light">Github</Button>{' '}
            <Button className="github-button" variant="outline-light">Blog</Button>{' '}
                <div className="cover-inner container" style={{marginTop: "155px"}}>
                    <h1 className="header-one"><strong>Patrick Morgan</strong></h1>
                    <h2 className="header-two"><em>Full-Stack Web Developer</em></h2>
                    <p className="lead">A passionate designer and web application devoloper, hardworking and always looking to learn more.</p>
                    <p style={{marginTop: "155px", marginRight: "35px"}}>
                      <a href="/" className="btn btn-white btn-lg mb-2 ml-2 ml-2">View Portfolio</a>
                      <a href="/" className="btn btn-outline-white btn-lg mb-2 ml-2 ml-2">Contact Me</a>
                    </p>
                </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="font-weight-light">Page Content</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
            </div>
          </section>

          <section className="cover text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
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

          <section className="py-5">
            <div className="container">
              <h2 className="font-weight-light">Page Content</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
            </div>
          </section>
         
        </div>
      )
    };

export default App;




