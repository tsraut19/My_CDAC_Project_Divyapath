import { Component, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
export function CourseInfo1() {
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
                <h1>Java Developer</h1>
              </Card.Header>
              <div className="row p-4">
                <Card.Body className="col-lg-7 ">
                  <Card.Title>
                    <h4>
                      Learn Java In This Course And Become a Computer
                      Programmer. Obtain valuable Core Java Skills And Java
                      Certification
                    </h4>
                  </Card.Title>
                  <Card.Text className="p-4">
                    Take your first step towards a career in software
                    development with this introduction to Java—one of the most
                    in-demand programming languages and the foundation of the
                    Android operating system. Designed for beginners, this
                    Specialization will teach you core programming concepts and
                    equip you to write programs to solve complex problems. In
                    addition, you will gain the foundational skills a software
                    engineer needs to solve real-world problems, from designing
                    algorithms to testing and debugging your program.
                  </Card.Text>
                </Card.Body>
                <div className="col-lg-5">
                  <Card.Img
                    variant="top"
                    className="cardImage "
                    src="./Images/java.jpg"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="   mt-3 shadow">
            <Card.Header className="alert alert-primary text-center ">
              <h3>Syllabus</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="row ">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <Card.Title>You will learn about</Card.Title>
                    <ul class="tick-list">
                      <li className="p-2">
                        {" "}
                        Java Programming: Principles of Software Design
                      </li>
                      <li className="p-2">
                        Java Programming: Arrays, Lists, and Structured Data
                      </li>
                      <li className="p-2">
                        Programming Foundations with JavaScript, HTML and CSS
                      </li>
                      <li className="p-2">
                        IBM Full Stack Software Developer: IBM Skills Network.
                      </li>{" "}
                      <li className="p-2">Introduction to JavaScript</li>
                    </ul>{" "}
                    <div className="text-center">
                      <a
                        href="https://www.udemy.com/course/java-the-complete-java-developer-course/"
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
                    <li>Install JDK 17 for Windows</li>
                    <li>Confirming installation and intro to JShell</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border ">
                <Accordion.Header>EXPRESSIONS AND STATEMENTS</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Code Blocks And The If Then Else Control Statement</li>
                    <li>Methods in Java</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border">
                <Accordion.Header>OBJECT ORIENTED PROGRAMMING</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>4 Pillars of OOPj</li>
                    <li>
                      Organizing Java Classes, Packages and Import Statements
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border">
                <Accordion.Header>COLELCTION FRAMEWORK</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Arrays, ArrayList & LinkedList - (Memory and Big O
                      Notation)
                    </li>
                    <li>Iterators</li>
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
