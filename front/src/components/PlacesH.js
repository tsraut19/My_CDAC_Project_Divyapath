import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Tab, Tabs, Button, tabKey, initTabKey } from "react-bootstrap";
import { AddPlaces } from "./AddPlaces";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Container } from "react-bootstrap";

export function PlacesH() {
  const [tabKey, initTabKey] = useState("one");

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

  // -------- add place btn
  const [goToAddPlaces, setgoToAddPlaces] = useState(false);

  const handleShowClick = () => {
    setgoToAddPlaces(true);
  };

  // ----------- fetching places from db------------
  const [data, setData] = useState([]);
  const [selectedPid, setSelectedPid] = useState([]);

  useEffect(() => {
    // fetch data from database
    fetch("http://localhost:8585/place")
      .then((response) => response.json())
      .then((result) => setData(result));
    console.log(data);
  }, []);

  // ----------------------------------------

  return (
    <>
      <>
        <Navigation></Navigation>
        <div className="container-fluid p-0">
          <div className="bg-light">
            {/*-------------- Navigation section ---------------*/}
            <div className="container">
              <div className="row pt-5 pb-5">
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
                      <div className="card-body">
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
                      <div className="card-body">
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
                      <div className="card-body">
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
            </div>
            <Container fluid>
              <div className="container pb-4">
                <div className="row text-center ">
                  <h1 className="p-4 HomePgTitle  ">दिव्यांग सुलभ स्थान</h1>
                </div>

                <div className="container pb-2 text-center">
                हमारा प्लेटफॉर्म सुलभता और को बढ़ावा देने के लिए समर्पित है|
                सेवा प्रदान करके विकलांग लोगों के लिए समावेश
                  सुलभ स्थानों की जानकारी उपलब्ध किया जा रहा है। हमारा उपयोगकर्ता के अनुकूल डेटाबेस
                  से सुलभ स्थानों की एक विस्तृत श्रृंखला पेश करता है
                  रेलवे स्टेशन से लेकर पर्यटकों के आकर्षण तक, और बीच में सब कुछ 
                  हमारी टीम यह सुनिश्चित करने के लिए अथक रूप से काम करती है कि हमारे सभी सूचीबद्ध
                  स्थान उच्चतम पहुंच-योग्यता मानकों को पूरा करते हैं। चाहे
                  आप दोस्तों के साथ नाइट आउट या फैमिली वेकेशन प्लान कर रहे हैं,
                  हमारा प्लेटफ़ॉर्म मिलने वाले सुलभ स्थानों को ढूंढना आसान बनाता है
                  आपकी ज़रूरतें। हमारे समुदाय में शामिल हों और दुनिया को एक बनाने में हमारी मदद करे| सभी के लिए अधिक सुलभ और समावेशी स्थान।
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
                  जोर से पढ़ें
                  <img style={{ height: 20 }} src="../Images/Speaker2.png" />
                </button>
                <button
                  type="submit"
                  className="btn loginbtn me-md-2"
                  onClick={handleStop}>
                  पढ़ना बंद करो
                </button>
                <div>
                  {" "}
                  <Link to="/addplaces">
                    <button className="btn loginbtn me-md-2">
                    नया स्थान जोड़ें
                    </button>
                  </Link>
                </div>
              </div>

              <div ref={contentRef}>
                {/* <div className="pb-5">
                  <form action="action_page.php">
                    Enter your city to see the accessile places :
                    <input
                      className="w-25"
                      type="text"
                      placeholder="Search the places in your city"
                      name="search"
                    />
                    <button className="w-20" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div> */}
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
                                        src="../Images/place1.jpg"
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
                                            इस स्थान को Map पर देखें
                                          </a>
                                        </p>
                                      </div>
                                      <div className="p-3 pt-0 text-right editDeleteIcons">
                                        <FaEdit
                                          style={{
                                            fontSize: "30px",
                                            padding: "5px",
                                            color: "#FFDC00",
                                            backgroundColor: "#03154d",
                                            border: "1px solid #999",
                                            // onClick={() => handleedit(id)}
                                          }}
                                        />
                                        <FaTrash
                                          style={{
                                            fontSize: "30px",
                                            padding: "5px",
                                            color: "#FFDC00",
                                            backgroundColor: "#03154d",
                                            border: "1px solid #999",
                                            // onClick={() => handleDelete(id)}
                                          }}
                                        />
                                      </div>
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
                        className="p-3 navtabsplaces">
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
            </div>
          </div>
        </div>
      </>
    </>
  );
}
