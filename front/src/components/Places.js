import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Tab, Tabs, Button, tabKey, initTabKey, Card } from "react-bootstrap";
import { Container, Alert, Table, Row, Form, Col } from "react-bootstrap";
import { AddPlaces } from "./AddPlaces";
import { Link, Navigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import { deletePlace, getAllPlace } from "../Services/ApiServices";

export function Places() {
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [tabKey, initTabKey] = useState("one");
  const [selectedPid, setSelectedPid] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validated, setValidated] = useState(false);

  const [nameOfPlace, setNameOfPlace] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [linkOnMap, setLinkOnMap] = useState("");
  const [image, setImage] = useState("");

  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setUserName(sessionStorage.getItem("userName"));
      fetch("http://localhost:8585/place")
        .then((response) => response.json())
        .then((result) => setData(result));
    } else {
      setLoggedIn(false);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    fetchPlaces();
  };

  //------- text to speech---------
  const synth = window.speechSynthesis;
  const contentRef = useRef(null);
  const utteranceRef = useRef(null);

  const handleSpeak = () => {
    const text = contentRef.current.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleStop = () => {
    synth.cancel();
    utteranceRef.current = null;
  };

  // ----------- fetching places from db------------
  const [data, setData] = useState([]);

  const fetchPlaces = async () => {
    const response = await getAllPlace();
    console.log(response.data);
  };
  // ----------------------------------------
  const deleteRequest = async () => {
    const response = await deletePlace(selectedPid);
    console.log(response.data);
    closeModal();
  };

  // -------------edit ----------------------------------------------------------
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  //--------------------------
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const pid = selectedPid;
      const place = {
        pid,
        nameOfPlace,
        description,
        location,
        linkOnMap,
      };

      console.log(place);

      fetch("http://localhost:8585/place/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place),
      }).then(() => {
        console.log("Place updated");
        alert("Place updated");
      });
    }
  };
  console.log(formValues);
  console.log(formValues.name);
  console.log(formValues.description);

  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <div>
          <div className="container-fluid p-0">
            <div className="bg-light">
              {/*-------------- Navigation section ---------------*/}
              <div className="container pt-3">
                <div className="row justify-content-end">
                  <div className="col-md-3   text-end">
                    <h6>Logged in as : {userName}</h6>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3">
                  {loggedIn && role == "superadmin" && (
                    <div>
                      <Link to="/super-admin">
                        <button className="btn loginbtn me-md-2">
                          Approve newly registered admins
                        </button>
                      </Link>
                      <Link to="/super-admin2">
                        <button className="btn loginbtn me-md-2">
                          Remove admins
                        </button>
                      </Link>
                    </div>
                  )}
                  {loggedIn && role == "admin" && (
                    <div>
                      <Link to="/view-griev">
                        <button className="btn loginbtn me-md-2">
                          Pending grievances
                        </button>
                      </Link>
                      {/* <Link to="/addplaces">
                        <button className="btn loginbtn me-md-2">
                          Remove admins
                        </button>
                      </Link> */}
                    </div>
                  )}
                </div>
                <div className="row pt-3 pb-4">
                  <div className="col">
                    <Link to="/" className="custom-card">
                      <div
                        className="card navCards text-center pt-3 "
                        style={{ width: "12rem", display: "inline-block" }}>
                        <img
                          src="../Images/home.png"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Home
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/places" className="custom-card">
                      <div
                        className="card navCards text-center pt-3 activeNavCard"
                        style={{ width: "13rem", display: "inline-block" }}>
                        <img
                          src="../Images/Places.png"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Accesible places
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/jobs" className="custom-card">
                      <div
                        className="card navCards text-center pt-3"
                        style={{ width: "12rem", display: "inline-block" }}>
                        <img
                          src="../Images/Jobs.png"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Jobs
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/skills" className="custom-card">
                      <div
                        className="card navCards text-center pt-3"
                        style={{ width: "12rem", display: "inline-block" }}>
                        <img
                          src="../Images/Courses.png"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Courses
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/mentalHealth" className="custom-card">
                      <div
                        className="card navCards text-center pt-3"
                        style={{ width: "12rem", display: "inline-block" }}>
                        <img
                          src="../Images/MentalHealth1.jpg"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Mental Health
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/govtSchemes" className="custom-card">
                      <div
                        className="card navCards text-center pt-3"
                        style={{ width: "12rem", display: "inline-block" }}>
                        <img
                          src="../Images/GovtSchemes.png"
                          className="card-img-top navCardsImg"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className="card-title pt-2 fw-bold"
                            style={{
                              textDecoration: "initial",
                              color: "black",
                            }}>
                            Govt Schemes
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Container fluid>
                <div className="container pb-4">
                  <div className="row text-center ">
                    <h1 className="p-4 HomePgTitle  ">Accessible places</h1>
                  </div>

                  <div className="container pb-2 text-center">
                    Our platform is dedicated to promoting accessibility and
                    inclusion for people with disabilities by providing
                    information on accessible places. Our user-friendly database
                    features a wide range of accessible locations, from
                    restaurants to tourist attractions, and everything in
                    between. Our team works tirelessly to ensure that all of our
                    listed locations meet the highest accessibility standards.
                    Whether you're planning a night out with friends or a family
                    vacation, our platform makes it easy to find accessible
                    places that meet your needs. Join our community and help us
                    make the world a more accessible and inclusive place for
                    all.
                  </div>
                </div>
              </Container>
              {/*--------------- search in your city   ----------------*/}
              <div className="container ">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3">
                  <button
                    type="submit"
                    className="btn loginbtn me-md-2"
                    onClick={handleSpeak}>
                    Read aloud
                    <img style={{ height: 20 }} src="../Images/Speaker2.png" />
                  </button>
                  <button
                    type="submit"
                    className="btn loginbtn me-md-2"
                    onClick={handleStop}>
                    Stop reading
                  </button>
                  {loggedIn && (role == "admin" || role == "superadmin") && (
                    <div>
                      <Link to="/addplaces">
                        <button className="btn loginbtn me-md-2">
                          Add new place
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                <div ref={contentRef}>
                  <div className="card mb-5 shadow">
                    <div>
                      <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                        <Tab eventKey="one" title="See the list of places">
                          <div className="p-3">
                            <div className="row">
                              {data.map((row) => (
                                <div className="col-md-6">
                                  <div className="card mb-3 shadow">
                                    <div className="row g-0">
                                      <div className="col-md-4">
                                        <img
                                          src={`Images/${row.image}`}
                                          className="img-fluid rounded-start"
                                          alt="..."
                                          style={{ height: "100%" }}
                                        />
                                      </div>
                                      <div className="col-md-8">
                                        <div className="card-body pb-0">
                                          <h5 className="card-title">
                                            {row.nameOfPlace}
                                          </h5>
                                          <p className="card-text">
                                            {row.description}
                                          </p>
                                          <p>{row.location}</p>
                                          <p>
                                            <a
                                              href={row.linkOnMap}
                                              target="_blank">
                                              View this place on map
                                            </a>
                                          </p>
                                        </div>
                                        {loggedIn &&
                                          (role === "admin" ||
                                            role === "superadmin") && (
                                            <div className="p-3 pt-0 text-right editDeleteIcons">
                                              <FaEdit
                                                style={{
                                                  fontSize: "30px",
                                                  padding: "5px",
                                                  color: "#FFDC00",
                                                  backgroundColor: "#03154d",
                                                  border: "1px solid #999",
                                                }}
                                                onClick={() => {
                                                  setSelectedPid(row.pid);
                                                  openModal2();
                                                }}
                                              />
                                              <FaTrash
                                                style={{
                                                  fontSize: "30px",
                                                  padding: "5px",
                                                  color: "#FFDC00",
                                                  backgroundColor: "#03154d",
                                                  border: "1px solid #999",
                                                }}
                                                onClick={() => {
                                                  setSelectedPid(row.pid);
                                                  openModal();
                                                }}
                                              />
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="two"
                          title="See on Map"
                          className="p-3 navtabsplaces  text-dark">
                          <div className="  navtabsplaces">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30695877.226850357!2d64.44971223914894!3d20.08997399421576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1677579451317!5m2!1sen!2sin"
                              width="100%"
                              height={450}
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
                {loggedIn && role == "user" && (
                  <div className="  pb-5  ">
                    <Card className=" shadow  ">
                      <Card.Body className="alert alert-primary mb-0">
                        <Card.Text>
                          <div className="row text-left ">
                            <div className="col-md-6">
                              <h5 className="p-2">
                                Not able to find a place you want ?
                              </h5>
                            </div>
                            <div className="col-md-6">
                              <div className="text-end">
                                {/* <Link to="/add-griev">
                                <button className="btn loginbtn me-md-2">
                                  Click here to raise a grievance
                                </button>
                              </Link> */}
                                <Link to="/add-griev" rel="noopener noreferrer">
                                  <Button className="btn loginbtn me-3 ">
                                    Click here to raise a grievance
                                  </Button>
                                </Link>
                                <Link
                                  to="/view-my-griev"
                                  rel="noopener noreferrer">
                                  <Button className="btn loginbtn  ">
                                    View my previous grievances
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* -----------------Delete---------------- */}
          <Modal show={isModalOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete the place with id=
              {selectedPid}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={deleteRequest}>
                Yes, Delete
              </Button>
              <Button variant="danger" onClick={closeModal}>
                No
              </Button>
            </Modal.Footer>
          </Modal>

          {/* -----------------Edit---------------- */}
          <Modal
            show={isModal2Open}
            onHide={closeModal2}
            className="modal-lg  ">
            <Modal.Header closeButton>
              <Modal.Title className="p-4 pb-2">
                {" "}
                Edit the place with id= {selectedPid}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 pt-4">
              <Container>
                <div className="row justify-content-center "></div>
                <Row className=" justify-content-center   ">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className=" ">
                    <Row className="mb-3 justify-content-center">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                        className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Name of place"
                          pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*[A-Za-z]*$"
                          name="nameOfPlace"
                          value={nameOfPlace}
                          onChange={(e) => setNameOfPlace(e.target.value)}
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
                        controlId="validationCustom02"
                        className="mb-3">
                        <Form.Label>Description</Form.Label>

                        <Form.Control
                          as="textarea"
                          rows={3}
                          type="text"
                          placeholder="Description"
                          name="description"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
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
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Location of place"
                          name="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Enter Valid location
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                        className="mb-3">
                        <Form.Label>Link from map</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter the location link"
                          name="linkOnMap"
                          required
                          value={linkOnMap}
                          onChange={(e) => setLinkOnMap(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter the map link
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                        className="mb-3">
                        <Form.Label>Image of place</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Upload the image of place"
                          name="image"
                          id="formFile"
                          required
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Enter the file name
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button type="submit" className="loginbtn btn   w-100">
                        Update
                      </Button>
                    </Row>
                  </Form>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
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
