import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function SignUp() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [disabiltyType, setDisType] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [deptId, setDeptId] = useState("");
  const [empId, setEmpId] = useState("");

  const [role, setRole] = useState("user");
  const [authenticate, setAuthenticate] = useState("");
  const [sex, setSex] = useState("");

  const today = new Date().toISOString().substr(0, 10);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const authenticate = role === "admin" ? 0 : 2;
      //setAuthenticate(authvalue);
      const user = {
        name,
        mobile,
        email,
        city,
        role,
        disabiltyType,
        dob,
        password,
        deptId,
        empId,
        authenticate,
        sex,
      };

      console.log(user);
      console.log("authenticate: ", authenticate);

      fetch("http://localhost:8585/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(() => {
        console.log("New User added");
      });
    }
  };
  // -----------------role based fields-------------
  const handleRoleChange = (e) => {
    if (e.target.value === "admin") {
      setRole("admin");
      setAuthenticate(0);
    } else {
      setRole("user");
      setAuthenticate(2);
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
              action="/login">
              <Row className="mb-3 justify-content-center">
                <Col
                  md={8}
                  className="signupContent  border bg-white shadow  p-5 pt-4">
                  <div className="row mt-3 mb-3 text-center">
                    <h3 className="loginform justify-content-center">
                      Sign Up
                    </h3>
                  </div>
                  <Row className="mb-3 justify-content-center">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        // pattern="[a-z,A-Z]{3,50}"
                        pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                        name="fname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Valid Name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustomUsername"
                      className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          +91
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile Number"
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
                      md="6"
                      controlId="validationCustom04"
                      className="mb-3">
                      <Form.Label>Enter Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email Address"
                        required
                        // pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                        pattern="^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$"
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
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="City"
                        // pattern="[a-z,A-Z]{3,50}"
                        pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Valid City
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        max={today}
                        placeholder="Enter DOB"
                        // pattern="[a-z,A-Z]{2,50}"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Enter Valid education
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom03"
                      className="mb-3">
                      <Form.Label>Set password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Row className="m-0 p-0">
                      <div className="  mb-3">
                        <label htmlFor="role">Role:</label>
                        <input
                          type="radio"
                          name="role"
                          value="user"
                          required
                          checked={role === "user"}
                          onChange={handleRoleChange}
                          //onChange={() => setRole("user")}
                        />
                        User
                        <input
                          type="radio"
                          name="role"
                          value="admin"
                          checked={role === "admin"}
                          //onChange={() => setRole("admin")}
                          //checked={isAdmin}
                          onChange={handleRoleChange}
                        />
                        Admin
                      </div>
                      {role === "admin" && (
                        <div>
                          <Row>
                            <Col>
                              <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                                className="mb-3"
                                htmlFor="admin-field">
                                <Form.Label>Dept Id </Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter Department ID"
                                  // pattern="[/^[0-9]+$/]"
                                  pattern="^[a-zA-Z0-9\-]+$"
                                  name="admin-field"
                                  value={deptId}
                                  onChange={(e) => setDeptId(e.target.value)}
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                  Please Enter Valid deptId
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                                className="mb-3"
                                htmlFor="admin-field">
                                <Form.Label>Emp Id </Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter Employee ID"
                                  pattern="^[a-zA-Z0-9\-]+$"
                                  name="admin-field"
                                  value={empId}
                                  onChange={(e) => setEmpId(e.target.value)}
                                />
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                  Please Enter Valid empId
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      )}
                      {role === "user" && (
                        <Col data-show-if="role:user">
                          <label
                            htmlFor="exampleCategory"
                            className="form-label">
                            Disability type
                          </label>
                          <select
                            className="form-control mb-3"
                            id="exampleCategory"
                            value={disabiltyType}
                            required
                            onChange={(e) => setDisType(e.target.value)}>
                            <option value="" disabled="disabled">
                              Select
                            </option>
                            <option value="physicalDisabilities">
                              Physical disabilities(Cerebral palsy, spinal cord
                              injury, amputation)
                            </option>
                            <option value="sensoryDisabilities">
                              Sensory disabilities (Deafness, blindness)
                            </option>{" "}
                            <option value="intellectualDisabilities">
                              Intellectual disabilities (Down syndrome, Autism,
                              Schizophrenia)
                            </option>
                          </select>
                        </Col>
                      )}
                      
                      <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={sex}
                        required
                        onChange={(e) => setSex(e.target.value)}>
                        <option value="">Add Sex</option>
                        <option>Male</option>
                        <option>FeMale</option>
                        {/* <option>In-Active</option> */}
                      </Form.Select>
                    </Col>

                    </Row>
                    <input
                      type="text"
                      name="authenticate"
                      value={authenticate}
                      style={{ display: "none" }}
                    />
                    {/* <input
                      type="text"
                      name="Authenticate"
                      value={authenticate}
                      onChange={(event) => setAuthenticate(event.target.value)}
                      //style={{ display: "none" }}
                    /> */}
                    <Button
                      type="submit"
                      className="loginbtn btn btn-success w-100  ">
                      Sign Up
                    </Button>
                    <div className=" text-center pt-3">
                      <span>
                        {" "}
                        Already have an account?
                        <p className="text-center">
                          <Link to="/login" className="">
                            {" "}
                            Login
                          </Link>
                        </p>
                      </span>
                    </div>
                  </Row>
                </Col>
              </Row>

              {/* {AddLibrary(
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')} */}
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}

// render(<SignUpForm />);
