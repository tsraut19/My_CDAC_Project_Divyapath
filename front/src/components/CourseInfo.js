import { Component, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export function CourseInfo() {
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
        <>
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
                  <h1>Telecalling</h1>
                </Card.Header>
                <div className="row p-4">
                  <Card.Body className="col-lg-7 ">
                    <Card.Title>
                      <h4>
                        This free online course provides telemarketing
                        strategies designed to get commitment from customers and
                        increase sales.
                      </h4>
                    </Card.Title>
                    <Card.Text className="pt-4">
                      The systematic use of the telephone is one of the
                      fastest-growing sales and marketing strategies used today.
                      Magazines, memberships, electricity, gas and many more
                      products and services are regularly sold over the phone.
                      This foundational sales training course focuses on
                      strategies that boost your telemarketing and telesales
                      skills. We explain how to overcome objections raised by
                      reluctant potential customers to make successful sales
                      calls.
                    </Card.Text>
                  </Card.Body>
                  <div className="col-lg-5">
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src="./Images/skill1.jpg"
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
                          Understanding Telemarketing & Telesales - Learning
                          Outcomes
                        </li>
                        <li className="p-2">
                          Sales Training and Verbal Communications
                        </li>
                        <li className="p-2">
                          Dealing with Objections and Rejections
                        </li>
                        <li className="p-2">
                          Understanding Telemarketing & Telesales - Lesson
                          Summary
                        </li>{" "}
                        <li className="p-2">
                          The tips and tricks to handle difficult customers
                        </li>
                      </ul>{" "}
                      <div className="text-center">
                        <a
                          href="https://www.udemy.com/course/learn-telecalling-etiquettes/"
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
                      <li>Meaning</li>
                      <li>Communication</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border ">
                  <Accordion.Header>PHONE CALL STAGES</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Importance of Phone etiquette</li>
                      <li>Elements of Phone Etiquette</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="border">
                  <Accordion.Header>
                    UNDERSTANDING COMMUNICATION
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Verbal & Non Verbal</li>
                      <li>Kinds-Verbal Communication</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="border">
                  <Accordion.Header>COMMUNICATION TECHNIQUES</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Techniques-At Workplace</li>
                      <li>Techniques-with Clients</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Container>
        </>
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
