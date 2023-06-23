import { React, useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
export function AddJobAdmin() {
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [industry, setIndustry] = useState("");
  const [education, setEducation] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [lastDateToApply, setLastDateToApply] = useState("");
  const [validated, setValidated] = useState(false);
  const [addedJob, setAddedJob] = useState("");
  const today = new Date().toISOString().substr(0, 10);

  const [loggedIn, setLoggedIn] = useState(false);
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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const addedJob = {
        job: job,
        description: description,
        education: education,
        experience: experience,
        industry: industry,
        employmentType: employmentType,
        lastDateToApply: new Date(lastDateToApply),
        location: location,
        category: category,
        status: status,
      };

      setJob("");
      setDescription("");
      setEducation("");
      setExperience("");
      setIndustry("");
      setEmploymentType("");
      setLocation("");
      setCategory("");
      setStatus("");
      setLastDateToApply("");
      setAddedJob("");

      console.log("Job details submitted:", addedJob);

      fetch("http://localhost:8585/jobs-admin/add-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addedJob),
      }).then(() => {
        console.log("New Job added");
        alert("New Job Added");
      });

    }
    
  };

  return (
    <>
      <Navigation></Navigation>
      {loggedIn && role === "admin" ? (
        <div>
          <div className="container d-flex align-items-center justify-content-center p-5">
            <Card className="col-md-8 shadow ">
              <Card.Body className="p-5 pt-3">
                <Card.Title className="text-center mt-4 mb-4">
                  <h3>Enter Job Details</h3>
                </Card.Title>
                <Card.Text></Card.Text>
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                  <Form.Group className="mb-3" controlId="formJobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      placeholder="Write job title"
                      value={job}
                      required
                      pattern="^[a-zA-Z0-9\s&,'-]+$"
                      onChange={(e) => setJob(e.target.value)}
                    />
                  </Form.Group>

                  <br />

                  <InputGroup>
                    <InputGroup.Text>Roles & Responsibilities</InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      aria-label="Write job description"
                      value={description}
                      required
                      pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </InputGroup>
                  <br />

                  <InputGroup>
                    <InputGroup.Text>&nbsp;Required Education</InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      aria-label="Write required education"
                      value={education}
                      required
                      pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </InputGroup>

                  <br />

                  <Row>
                    <Col>
                      <Form.Label>Required Experience</Form.Label>
                      <Form.Control
                        placeholder="In Years"
                        value={experience}
                        required
                        pattern="^(?:[1-9]|[1-4][0-9]|50)$"
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Industry Type</Form.Label>
                      <Form.Control
                        placeholder=""
                        value={industry}
                        required
                        pattern="^[a-zA-Z0-9\s&,'-]+$"
                        onChange={(e) => setIndustry(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <br />

                  <Row>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={employmentType}
                        required
                        onChange={(e) => setEmploymentType(e.target.value)}>
                        <option value="">Employment Type</option>
                        <option>Permanent/Full time</option>
                        <option>Permanent/Part time</option>
                        <option>Contract Basis/Full time</option>
                        <option>Contract Basis/Part time</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <div
                        className="lastdate"
                        value={lastDateToApply}
                        required
                        //  pattern="^[0-9]{4}-(?:0[1-9]|1[0-2])-(?:[0-2][1-9]|[1-3][0-1])|([0-9]{4}-(?:0[1-9]|1[0-2])-(?:[0-2][1-9]|[1-3][0-1])T[0-2][0-3]:[0-5][0-9]:[0-5][0-9])$"
                        pattern="^\d{4}-\d{2}-\d{2}$"
                        onChange={(e) =>
                          setLastDateToApply(
                            new Date(e.target.value).toISOString().split('T')[0])
                          // date.getFullYear()}-${date.getMonth()+1}-${date.getDate()
                        }>
                        <label>Last Date to apply for job :</label>
                        {/* <input type="date" min={today}></input> */}
                        <input type="date" ></input>
                      </div>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={location}
                        required
                        onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Select Location</option>
                        <option>Kurla</option>
                        <option>Andheri</option>
                        <option>Powai</option>
                        <option>Marine Lines</option>
                        <option>Belapur</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={category}
                        required
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option>Visual Impairment</option>
                        <option>Locomotor / Orthopedic Disability</option>
                        <option>Speech</option>
                        <option>Hearing Disability</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        value={status}
                        required
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Set Status</option>
                        <option>Active</option>
                        {/* <option>In-Active</option> */}
                      </Form.Select>
                    </Col>
                  </Row>

                  <br />

                  <br />
                
                  <Button
                    variant="primary"
                    type="submit"
                    value="Send"
                    className="loginbtn w-100"
                    data-show-if="">
                    Add
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div className="container p-5 ">
          <div className="container p-5 ">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div class="alert alert-danger" role="alert">
                  <div className="container p-5 text-center">
                    You are not authorised to view this
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
