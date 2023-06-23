import { Component } from "react";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export function Skills() {
  //---------------- session --------------
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [userName, setUserName] = useState("");
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

  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <div>
          <div className=" bg-light ">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-3  pt-3 text-end">
                  <h6>Logged in as : {userName}</h6>
                </div>
              </div>
              <div className="row pb-5 pt-4">
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
                      className="card navCards text-center pt-3"
                      style={{ width: "13rem", display: "inline-block" }}>
                      <img
                        src="../Images/Places.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body ">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
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
                      <div className="card-body ">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Jobs
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/skills" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 activeNavCard"
                      style={{ width: "12rem", display: "inline-block" }}>
                      <img
                        src="../Images/Courses.png"
                        className="card-img-top navCardsImg"
                        alt="..."
                      />
                      <div className="card-body ">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
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
                      <div className="card-body ">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
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
                      <div className="card-body ">
                        <h5
                          className="card-title pt-2 fw-bold"
                          style={{ textDecoration: "initial", color: "black" }}>
                          Govt Schemes
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Container fluid>
                <div className="container ">
                  <div className="row text-center ">
                    <h1 className="p-4 pt-1 HomePgTitle  "> Courses</h1>
                  </div>

                  <div className="container pb-5 text-center">
                    Adults with disabilities make up nearly 20% of the Indian
                    workforce, but they often face greater challenges in finding
                    and maintaining employment. In most cases, this is because
                    they’re not given the opportunity to develop soft and hard
                    job skills that characterize appealing candidates.
                  </div>
                </div>
              </Container>
              <Row className="pb-5">
                <Col>
                  <Card className="shadow">
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src="./Images/skills3.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Graphic Designing</Card.Title>
                      <Card.Text>
                        Learn what graphic design is and how to become a graphic
                        designer. Learn what a graphic designer does on the
                        job.You will learn differ UI/UX technology. Learn the
                        principles of great graphic design. Design studies will
                        offer you opportunities.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/courseinfo2">
                        <button className="btn btn-primary loginbtn">
                          Enroll
                        </button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow">
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src="./Images/skills2.jpg"
                    />
                    <Card.Body>
                      <Card.Title>TeleCaller</Card.Title>
                      <Card.Text>
                        This course is for the ones in customer care services
                        who want to learn about some of the calling dos and
                        don'ts they think are missing to polish their Tele
                        calling skills. All important professional lines for the
                        calling business are mentioned in this course.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/courseinfo">
                        <button className="btn btn-primary loginbtn">
                          Enroll
                        </button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col>
                  <Card className="shadow">
                    <Card.Img
                      variant="top"
                      className="cardImage"
                      src="./Images/skills4.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Software developer</Card.Title>
                      <Card.Text>
                        This is a great place to start your programming career
                        or hobby. This course is best for you,If you have never
                        programmed before, or If you are fairly new to
                        programming.Programming will offer a broad spectrum of
                        opportunities.
                      </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <Link to="/courseinfo1">
                        <button className="btn btn-primary loginbtn">
                          Enroll
                        </button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </div>
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
