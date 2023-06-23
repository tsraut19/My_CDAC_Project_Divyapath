import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";

import InputGroup from "react-bootstrap/InputGroup";
import { Navigation } from "./Navigation";

export function GrievanSystemH() {
  const [validated, setValidated] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");

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
        alert("Comaplaint Registered Successfully");
      });
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="signUpBody">
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
                    शिकायत प्रणाली
                    </h3>
                  </div>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="mb-3">
                    <Form.Label>पहला नाम</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="प्रथम नाम दर्ज करें"
                      // pattern="[a-z,A-Z]{3,20}"
                      pattern="[^[a-zA-Z]*$
                      {2,20}]"
                      name="fname"
                      value={fname}
                      onChange={(e) => setFName(e.target.value)}
                    />

                    <Form.Control.Feedback>ठीक</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                    कृपया मान्य नाम दर्ज करें
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="mb-3">
                    <Form.Label>उपनाम</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="अंतिम नाम दर्ज करो"
                      // pattern="[a-z,A-Z]{3,20}"
                      pattern="[^[a-zA-Z]*$
                      {2,20}]"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                    />
                    <Form.Control.Feedback>ठीक</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                    कृपया मान्य नाम दर्ज करें
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom06"
                    className="mb-3">
                    <Form.Control.Feedback>ठीक</Form.Control.Feedback>
                    <Form.Label>ईमेल आईडी</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="अपना ईमेल पता दर्ज करें"
                      required
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    कृपया सही ईमेल पता दें
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                    className="mb-3">
                    <Form.Label>मोबाइल नंबर</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        +91
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="अपना मोबाइल दर्ज करे"
                        aria-describedby="inputGroupPrepend"
                        required
                        pattern="[6-9]{1}[0-9]{9}$"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                      कृपया मान्य मोबाइल नंबर दर्ज करें
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label>विषय</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="यहां विषय का उल्लेख करें"
                      name="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    कृपया एक विवरण प्रदान करें
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom03"
                    className="mb-3">
                    <Form.Label style={{ verticalAlign: "top" }}>
                    शिकायत का विवरण
                    </Form.Label>
                    <textarea
                      value={description}
                      name="description"
                      placeholder="यहाँ उल्लेख करें"
                      onChange={(e) => setDescription(e.target.value)}
                      cols="67"
                      rows="3"
                      required></textarea>

                    {/* <Form.Control
                      type="textarea"
                      placeholder="Mention Here"
                      name="description"
                      required
                      value={description}
                      cols="67"
                      rows="3"
                      onChange={(e) => setDescription(e.target.value)}
                    /> */}
                    <Form.Control.Feedback type="invalid">
                    कृपया एक विवरण प्रदान करें
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom04"
                    className="mb-3">
                    <Form.Label>Upload File</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Choose File"
                      name="file"
                      onClick={handleUploadClick}
                      
                    />
                    <Form.Control.Feedback type="invalid">
                      Format Not Supprted
                    </Form.Control.Feedback>
                  </Form.Group> */}

                  <Button
                    type="submit"
                    className="loginbtn btn btn-primary w-100">
                   जमा करें
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}
