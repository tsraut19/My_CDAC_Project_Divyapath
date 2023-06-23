import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";

import InputGroup from "react-bootstrap/InputGroup";
import { Navigation } from "./Navigation";

export function GrievanSystem() {
  const [validated, setValidated] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");

  const [grievs, setGrievanceList] = useState([]);
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const griev = {
        fname,
        lname,
        email,
        mobile,
        subject,
        description,
      };

      console.log(griev);

      fetch("http://localhost:8585/grievance/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(griev),
      }).then(() => {
        console.log("New Complaint added");
        alert("Complaint Registered Successfully");
      });
    }
  };

  return (
    <>
      <Navigation></Navigation>
      {loggedIn && role === "user" ? (
        <div>
          <div className="signUpBody  ">
            <Container>
              <div className="row justify-content-center "></div>
              <Row className=" justify-content-center mt-5  ">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="m-5 mt-2"
                  action="/places">
                  <Row className="mb-3 justify-content-center">
                    <Col
                      md={6}
                      className="signupContent  border bg-white shadow  p-5 pt-4">
                      <div className="row mt-3 mb-3 text-center">
                        <h3 className="loginform justify-content-center">
                          Raise a grievance
                        </h3>
                      </div>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                        className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter First Name"
                          pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                          name="fname"
                          value={fname}
                          onChange={(e) => setFName(e.target.value)}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Enter Valid Name
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                        className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Last Name"
                          pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                          name="lname"
                          value={lname}
                          onChange={(e) => setLName(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Enter Valid Name
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom06"
                        className="mb-3">
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Email Address"
                          required
                          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Valid Email address
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                        className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            +91
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Mobile Number"
                            aria-describedby="inputGroupPrepend"
                            required
                            pattern="[6-9]{1}[0-9]{9}$"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Valid Mobile Number
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                        className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Mention Subject Here"
                          name="subject"
                          pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a description
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                        className="mb-3">
                        <Form.Label style={{ verticalAlign: "top" }}>
                          Description of Complaint
                        </Form.Label>
                        <textarea
                          value={description}
                          name="description"
                          pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                          placeholder="Mention Here"
                          onChange={(e) => setDescription(e.target.value)}
                          cols="67"
                          rows="3"
                          required></textarea>

                        <Form.Control.Feedback type="invalid">
                          Please Provide a Description
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button
                        type="submit"
                        className="loginbtn btn btn-primary w-100">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </Container>
          </div>
        </div>
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


