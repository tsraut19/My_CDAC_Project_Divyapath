import { Component, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
export function CourseInfo2() {
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setUserName(sessionStorage.getItem("userName"));
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <Container className="p-5">
          <div className="row justify-content-end">
            <div className="col-md-3   text-end">
              <h6>Logged in as : {userName}</h6>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3">
            <div>
              <Link to="/skills">
                <button className="btn loginbtn me-md-2">All courses</button>
              </Link>
            </div>
          </div>
          <Card className="text-center mt-2 shadow">
            <div>
              <Card.Header className="alert alert-primary ">
                <h1>Graphic Designing</h1>
              </Card.Header>
              <div className="row p-4">
                <Card.Body className="col-lg-7 ">
                  <Card.Title>
                    <h4>
                      Make Compelling Design.Learn and apply the principles of
                      graphic design towards a comprehensive branding project.
                    </h4>
                  </Card.Title>
                  <Card.Text className="pt-4">
                    Graphic design is all around us, in a myriad of forms, both
                    on screen and in print, yet it is always made up of images
                    and words to create a communication goal. This four-course
                    sequence exposes students to the fundamental skills required
                    to make sophisticated graphic design: process, historical
                    context, and communication through image-making and
                    typography. The sequence is completed by a capstone project
                    that applies the skills of each course and peer feedback in
                    a finished branding project suitable for a professional
                    portfolio.
                  </Card.Text>
                </Card.Body>
                <div className="col-lg-5">
                  <Card.Img
                    variant="top"
                    className="cardImage"
                    src="./Images/skills2.jpg"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="  mt-3 shadow">
            <Card.Header className="alert alert-primary text-center ">
              <h3>Syllabus</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="row text-left">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <Card.Title>You will learn about</Card.Title>
                    <ul class="tick-list">
                      <li className="p-2">
                        {" "}
                        Gain the fundamental skills needed to be a graphic
                        designer
                      </li>
                      <li className="p-2">
                        Communicate through image-making and typography
                      </li>
                      <li className="p-2">
                        Complete a capstone project to add to your professional
                        portfolio
                      </li>
                      <li className="p-2">
                        Learn everything you need to know to work in interface
                        design, motion graphics, and editorial design
                      </li>
                    </ul>{" "}
                    <div className="text-center">
                      <a
                        href="https://www.udemy.com/course/graphic-design/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className="btn loginbtn  ">Enroll</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="pt-5 pb-4">
            <Accordion flush>
              <h3>Course content</h3>
              <Accordion.Item eventKey="0" className="border ">
                <Accordion.Header>CONCEPT & EXPLANATION</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>How to Get Photoshop, Illustrator, and InDesign</li>
                    <li>
                      Adobe Creative Cloud Versions and Customizing the Toolbar
                      in Illustrato
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border ">
                <Accordion.Header>EAdvance Design</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Graphic Design as Powerful, Beautiful, Visual Communicatio
                    </li>
                    <li>Adjust Composition in a Photo and Layout</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border">
                <Accordion.Header>Color Setting and Layout</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Useful Color Terminology and Color Modes to Know and Apply
                    </li>
                    <li>Applying the Beauty of Color Harmony</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border">
                <Accordion.Header>Master Design</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Techniques of Photoshop</li>
                    <li>Design an Aligned Grid Layout</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      ) : (
        <div className="container p-5 ">
          <div className="container p-5 ">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div class="alert alert-danger" role="alert">
                  <div className="container p-5 text-center">
                    You are not logged in
                  </div>
                  <Link to="/login">
                    <div className="text-center pb-5 ">
                      <button className="text-center btn loginbtn me-md-2">
                        Go to Login
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
