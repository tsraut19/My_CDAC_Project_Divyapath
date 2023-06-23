import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";

export function AddPlaces() {
  const [validated, setValidated] = useState(false);
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [linkOnMap, setLinkOnMap] = useState("");

  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setEmail(sessionStorage.getItem("userEmail"));
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
      const place = { nameOfPlace, description, location, linkOnMap, image };

      console.log(place);

      fetch("http://localhost:8585/place/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(place),
      }).then(() => {
        console.log("New place added");
      });
    }
  };

  return (
    <>
      <Navigation></Navigation>
      {loggedIn && (role === "admin" || role === "superadmin") && (
        <div className=" ">
          <Container>
            <div className="row justify-content-center "></div>
            <Row className=" justify-content-center mt-5  ">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="m-5 mt-2">
                <Row className="mb-3 justify-content-center">
                  <Col
                    md={5}
                    className="signupContent  border bg-white shadow  p-5 pt-4">
                    <div className="row mt-3 mb-3 text-center">
                      <h3 className="loginform justify-content-center">
                        Add new place
                      </h3>
                    </div>
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
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        pattern="^[a-zA-Z][a-zA-Z0-9 ]*$"
                        placeholder="Location of place"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
                        required
                        value={linkOnMap}
                        onChange={(e) => setLinkOnMap(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter the valid map link
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
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
