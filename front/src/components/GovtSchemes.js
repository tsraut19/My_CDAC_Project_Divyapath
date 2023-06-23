import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export function GovtSchemes() {
  //----------------session
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
        <div className=" ">
          <body
            //   background="../Images/mentalhealth.jpg"
            className="mentalhealthbg pb-5">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-3  pt-3 text-end">
                  <h6>Logged in as : {userName}</h6>
                </div>
              </div>
              <div className="row pb-5  pt-3">
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
                  <a href="places" className="custom-card">
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
                  </a>
                </div>
                <div className="col">
                  <a href="jobs" className="custom-card">
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
                  </a>
                </div>
                <div className="col">
                  <a href="skills" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 "
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
                  </a>
                </div>
                <div className="col">
                  <a href="mentalHealth" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 "
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
                  </a>
                </div>
                <div className="col">
                  <a href="govtSchemes" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 activeNavCard"
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
                  </a>
                </div>
              </div>
            </div>
            <Container fluid>
              <div className="container  ">
                <div className="row text-center pb-4">
                  <h1 className=" HomePgTitle  "> Government Schemes</h1>
                </div>
                <div className="container pb-5 text-center">
                  Governments around the world have implemented various schemes
                  and programs aimed at supporting people with disabilities.
                  These initiatives aim to enhance their quality of life,
                  improve their access to essential services, and promote their
                  inclusion in society. Here are some of the government schemes
                  available to disabled people, outlining their objectives,
                  eligibility criteria, and benefits. We hope that this
                  information will be helpful to individuals with disabilities
                  and their families in accessing the support they need.
                </div>
                <div className="container pb-2  ">
                  <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/disha.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>
                            Early Intervention and School Readiness Scheme
                          </MDBCardTitle>
                          <MDBCardText>
                            The Disha scheme aims at setting up Disha Centres
                            for early intervention for Person with Disability
                            (PwD) in 0-10 years of age covered under the
                            National Trust Act, through therapies, trainings and
                            providing support to family members. The Scheme is
                            available in the entire country
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Day Care</li>
                                <li>Infrastructure</li>
                                <li>Health Assesment</li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/disha.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/gharuda1.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "80%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>Group Home for Adults</MDBCardTitle>
                          <MDBCardText>
                            {" "}
                            This scheme aims at setting up Gharaunda Centres for
                            life long shelter and care of Persons with
                            Disability (PwD) covered under the National Trust
                            Act. Gharaunda Centre should provide at a minimum
                            following facilities:
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Care services for PwD</li>
                                <li>Vocational activities</li>
                                <li>Basic medical care </li>
                                <li>Mental health care </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/gharaunda.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/niramaya1.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "80%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>Health Insurance Scheme</MDBCardTitle>
                          <MDBCardText>
                            It covers Facility for OPD treatment including the
                            medicines, pathology, diagnostic tests, etc, Regular
                            Medical checkup for non-ailing disabled, Dental
                            Preventive Dentistry, Surgery to prevent further
                            aggravation of disability, Non- Surgical/
                            Hospitalization.
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Insurance cover upto Rs.1.0 lakh</li>
                                <li>
                                  Treatment can be taken from any hospital
                                </li>
                                <li>Have a single premium across age band</li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/niramaya.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/sahyog.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "80%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>
                            Care Associate Training Scheme
                          </MDBCardTitle>
                          <MDBCardText>
                            This scheme aims at setting up Care Associate Cells
                            (CACs) to provide training and create a skilled
                            workforce of care associates to provide adequate and
                            nurturing care for Person with Disabilities (PwD)
                            and their families who require it.This scheme will
                            provide a choice of training through two levels of
                            courses
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Setting up Care Associate Cells (CACs).</li>
                                <li>
                                  Provide training and create a skilled
                                  workforce
                                </li>
                                <li>
                                  To provide parents an opportunity to get
                                  trained
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/sahyogi.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/sambhav.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>
                            Aids and Assistive Devices
                          </MDBCardTitle>
                          <MDBCardText>
                            These centres aim to provide information and easy
                            access to devices, appliances, aids, software etc.
                            for betterment and empowerment of PwDs of the
                            National Trust disabilities. There shall also be
                            provision of display and demonstration of the
                            devices to the concerned stakeholders.
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Setup an additional resource centre</li>
                                <li>
                                  Information and easy access to devices,
                                  appliances, aids
                                </li>
                                <li>
                                  Display and demonstration of the devices
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/sambhav.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="h-100 shadow">
                        <MDBCardImage
                          src="../Images/kadam.jpg"
                          alt="..."
                          position="top"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>
                            Awareness, Community Interaction and Innovative
                            Project
                          </MDBCardTitle>
                          <MDBCardText>
                            Badhte Kadam aims at community awareness,
                            sensitisation, social integration and mainstreaming
                            of Persons with Disabilities.Raise awareness in the
                            public, regarding Person with Disability (PwD)
                            covered under the NationalTrust Act and encourage
                            their inclusion in the society, social integration.
                            <div className="p-4 pb-0">
                              <ul>
                                <li>Sensitize community stakeholders</li>
                                <li>Publicize and maximize benefits </li>
                                <li>
                                  Spread awareness about myths and
                                  misconceptions
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/badhte-kadam.php"
                                target="_blank">
                                Read more
                              </a>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </Container>
          </body>
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
