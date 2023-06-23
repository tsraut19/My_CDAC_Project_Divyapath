import { Component, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export function CourseInfoH() {
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
          {/* <div className="container pt-3">
            <div className="row justify-content-end">
              <div className="col-md-3   text-end">
                <h6>Logged in as : {userName}</h6>
              </div>
            </div>
          </div> */}
          <Container className="p-5">
            {/* <div className="row justify-content-end">
              <div className="col-md-3   text-end">
                <Link to="http://localhost:3000/skills">All Courses</Link>
              </div>
            </div> */}
            <div className="row justify-content-end">
              <div className="col-md-3   text-end">
                <h6>Logged in as : {userName}</h6>
              </div>
            </div>

            <Card className="text-center mt-2 shadow">
              <div>
                <Card.Header className="alert alert-primary ">
                  <h1>टेलिकॉलर</h1>
                </Card.Header>
                <div className="row p-4">
                  <Card.Body className="col-lg-7 ">
                    <Card.Title>
                      <h4>
                      यह मुफ्त ऑनलाइन पाठ्यक्रम टेलीमार्केटिंग प्रदान करता है
                        ग्राहकों से प्रतिबद्धता प्राप्त करने के लिए डिज़ाइन की गई रणनीतियाँ और
                        बिक्री बढ़ाने के लिए पर्याप्त है.
                      </h4>
                    </Card.Title>
                    <Card.Text className="pt-4">
                    टेलीफोन का व्यवसाय और विपणन करने के एक तेजी से बढ़ते हुए उपयोग में से एक है। पत्रिकाएँ, सदस्यता, बिजली, गैस और बहुत से अन्य उत्पादों और सेवाओं को नियमित रूप से फोन पर बेचा जाता है। यह मौलिक बिक्री प्रशिक्षण पाठ्यक्रम आपके टेलीमार्केटिंग और टेलीसेल्स कौशल को बढ़ाने वाली रणनीतियों पर ध्यान केंद्रित करता है। हम बताते हैं कि कैसे रुचिहीन संभावित ग्राहक द्वारा उठाई गई आपत्तियों को दूर करना और सफल बिक्री कॉल बनाना है।
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
                <h3>पाठ्यक्रम</h3>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <div className="row ">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <Card.Title>के बारे में जानेंगे</Card.Title>
                      <ul class="tick-list">
                        <li className="p-2">
                        टेलीमार्केटिंग और टेलीसेल्स को समझना - सीखना
                        </li>
                        <li className="p-2">
                        बिक्री प्रशिक्षण और मौखिक संचार
                        </li>
                        <li className="p-2">
                        आपत्तियों और अस्वीकृतियों से निपटना
                        </li>
                        <li className="p-2">
                        टेलीमार्केटिंग और टेलीसेल्स को समझना - पाठ
                        </li>{" "}
                        <li className="p-2">
                        मुश्किल ग्राहकों को संभालने के टिप्स और ट्रिक्स
                        </li>
                      </ul>{" "}
                      <div className="text-center">
                        <a
                          href="https://www.udemy.com/course/learn-telecalling-etiquettes/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Button className="btn loginbtn  ">प्रवेश करे</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="pt-5 pb-4">
              <Accordion flush>
                <h3>पाठ्यक्रम सामग्री</h3>
                <Accordion.Item eventKey="0" className="border ">
                  <Accordion.Header>अवधारणा और व्याख्या</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>अर्थ</li>
                      <li>संचार</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border ">
                  <Accordion.Header>फोन कॉल</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>फोन शिष्टाचार का महत्व</li>
                      <li>फोन शिष्टाचार के तत्व</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="border">
                  <Accordion.Header>
                  संचार को समझना
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>मौखिक और गैर मौखिक</li>
                      <li>प्रकार-मौखिक संचार</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="border">
                  <Accordion.Header>संचार तकनीक</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>तकनीक-कार्यस्थल पर</li>
                      <li>तकनीक-ग्राहकों के साथ</li>
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
