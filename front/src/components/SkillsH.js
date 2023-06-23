import { Component } from "react";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export function SkillsH() {
  //---------------- session --------------------
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
                    <Link to="/home1" className="custom-card">
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
                            मुख्य पृष्ठ
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                <div className="col">
                  <a href="placesH" className="custom-card">
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
                          पहुंच योग्य स्थान
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="jobsH" className="custom-card">
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
                           नौकरी 
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="skillsH" className="custom-card">
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
                         शिक्षा
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="mentalHealthH" className="custom-card">
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
                          मानसिक स्वास्थ्य
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="govtSchemesH" className="custom-card">
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
                         महत्वपूर्ण योजना
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <Container fluid>
                <div className="container ">
                  <div className="row text-center ">
                    <h1 className="p-4 pt-1 HomePgTitle  ">शिक्षा</h1>
                  </div>

                  <div className="container pb-5 text-center">
                  भारत में लगभग 20% विकलांग वयस्क हैं
                    कार्यबल, लेकिन उन्हें खोजने में अक्सर अधिक चुनौतियों का सामना करना पड़ता है
                    और रोजगार बनाए रखना। ज्यादातर मामलों में, ऐसा इसलिए है
                    उन्हें विकसित होने का अवसर नहीं दिया जाता है
                    नौकरी कौशल जो आकर्षक उम्मीदवारों की विशेषता है।
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
                      <Card.Title>ग्राफिक डिजाइनिंग</Card.Title>
                      <Card.Text>
                      जानें कि ग्राफ़िक डिज़ाइन क्या है और ग्राफ़िक कैसे बनें
                        डिजाइनर। जानें कि एक ग्राफिक डिजाइनर क्या करता है
                        जॉब। आप अलग-अलग यूआई/यूएक्स तकनीक सीखेंगे। जानें
                        महान ग्राफिक डिजाइन के सिद्धांत। डिजाइन की पढ़ाई होगी
                        आपको अवसर प्रदान करते हैं।
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/courseinfo2">
                        <button className="btn btn-primary loginbtn">
                        और पढ़ें
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
                      <Card.Title>टेलिकॉलर</Card.Title>
                      <Card.Text>
                      यह कोर्स कस्टमर केयर सर्विस वालों के लिए है
                        जो कुछ कॉलिंग के बारे में सीखना चाहते हैं|
                        क्या उन्हें नहीं लगता कि वे अपने टेली
                        कॉलिंग कौशल। के लिए सभी महत्वपूर्ण पेशेवर लाइनें
                        कॉलिंग व्यवसाय का उल्लेख इस पाठ्यक्रम में किया गया है।
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link to="/courseinfoH">
                        <button className="btn btn-primary loginbtn">
                        और पढ़ें
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
                      <Card.Title>सॉफ्टवेयर डेवलपर</Card.Title>
                      <Card.Text>
                      यह एक प्रोग्रामिंग करियर या शौक की शुरुआत करने के लिए एक शानदार जगह है। यदि आप पहले कभी प्रोग्रामिंग नहीं कर चुके हैं, या यदि आप प्रोग्रामिंग में नए हैं, तो यह अच्छा विकल्प है। प्रोग्रामिंग एक विस्तृत विकल्प स्पेक्ट्रम प्रदान करेगा।
                      </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <Link to="/courseinfo1">
                        <button className="btn btn-primary loginbtn">
                        और पढ़ें
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
                  आप लॉग इन नहीं हैं।
                  </div>
                  <Link to="/login">
                    <div className="text-center pb-5 ">
                      <button className="text-center btn loginbtn me-md-2">
                      लॉगिन पर जाएं।
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
