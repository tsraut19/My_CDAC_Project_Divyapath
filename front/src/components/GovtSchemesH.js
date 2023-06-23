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

export function GovtSchemesH() {
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
                          सुलभ स्थान
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
                          नौकरियां
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="skillsH" className="custom-card">
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
                          शिक्षा
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="mentalHealthH" className="custom-card">
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
                          मानसिक स्वास्थ्य
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="govtSchemesH" className="custom-card">
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
                         सरकारी योजनाएं
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
                  <h1 className=" HomePgTitle  "> सरकारी योजनाएं</h1>
                </div>
                <div className="container pb-5 text-center">
                दुनिया भर में सरकारों ने विकलांग लोगों को समर्थन देने के लक्ष्य से विभिन्न योजनाएं और कार्यक्रम लागू किए हैं। इन पहलों का उद्देश्य उनकी जीवन गुणवत्ता को बढ़ाना, आवश्यक सेवाओं तक पहुँच में सुधार करना और समाज में उनकी समावेशीता को प्रोत्साहित करना है। यहां विकलांग लोगों के लिए सरकारी योजनाएं हैं, जिनमें उनके उद्देश्य, पात्रता मानदंड और लाभों का उल्लेख है। हम आशा करते हैं कि यह जानकारी विकलांगता वाले व्यक्तियों और उनके परिवारों के लिए समर्थन तक पहुँच में मददगार साबित होगी।
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
                          प्रारंभिक हस्तक्षेप और स्कूल तैयारी योजना
                          </MDBCardTitle>
                          <MDBCardText>
                          दिशा योजना का उद्देश्य राष्ट्रीय ट्रस्ट अधिनियम के अंतर्गत 0-10 वर्ष आयु के विकलांग व्यक्तियों के लिए डिशा केंद्रों की स्थापना करना है, उन्हें थेरेपी, प्रशिक्षण और परिवार के सदस्यों को समर्थन प्रदान करके समय रहती सहायता प्रदान करना। यह योजना पूरे देश में उपलब्ध है।
                            <div className="p-4 pb-0">
                              <ul>
                                <li>डे केयर</li>
                                <li>आधारभूत संरचना</li>
                                <li>स्वास्थ्य आकलन</li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/disha.php"
                                target="_blank">
                               और पढ़ें
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
                          <MDBCardTitle>वयस्कों के लिए ग्रुप होम</MDBCardTitle>
                          <MDBCardText>
                            {" "}
                            यह योजना राष्ट्रीय ट्रस्ट अधिनियम के अंतर्गत शामिल विकलांग व्यक्तियों (PwD) के लिए जीवन भर के आश्रय और समर्थन के लिए घरौंडा केंद्रों की स्थापना करने का उद्देश्य है। घरौंडा केंद्र कम से कम निम्नलिखित सुविधाएं प्रदान करनी चाहिए:
                            <div className="p-4 pb-0">
                              <ul>
                                <li>PwD के लिए देखभाल सेवाएं</li>
                                <li>व्यावसायिक गतिविधियाँ</li>
                                <li>बुनियादी चिकित्सा देखभाल</li>
                                <li>मानसिक स्वास्थ्य सुरक्षा </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/gharaunda.php"
                                target="_blank">
                                और पढ़ें
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
                          <MDBCardTitle>स्वास्थ्य बीमा योजना</MDBCardTitle>
                          <MDBCardText>
                          यह सुविधा ओपीडी उपचार (दवाओं, पैथोलॉजी, निदान परीक्षण आदि), अस्वस्थ विकलांग के लिए नियमित चिकित्सा जांच, दंत रोगों के लिए वर्तमान चिकित्सा, विकलांगता को और बढ़ने से रोकने के लिए सर्जरी, गैर-सर्जिकल/ अस्पतालीकरण की सुविधाएं शामिल होती है।
                            <div className="p-4 pb-0">
                              <ul>
                                <li>1 लाख रुपये तक का बीमा कवर</li>
                                <li>
                                किसी भी अस्पताल से इलाज कराया जा सकता है
                                </li>
                                <li>आयु सीमा में एक ही प्रीमियम रखें</li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/niramaya.php"
                                target="_blank">
                                और पढ़ें
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
                          देखभाल सहयोगी प्रशिक्षण योजना
                          </MDBCardTitle>
                          <MDBCardText>
                          यह योजना केयर एसोसिएट सेल (सीएसी) स्थापित करने का उद्देश्य रखती है, जो उन व्यक्तियों के लिए उपयुक्त और पोषणात्मक देखभाल प्रदान करने के लिए प्रशिक्षण देते हुए केयर एसोसिएट की कुशल श्रमिक बनाते हैं जो विकलांगता से प्रभावित व्यक्तियों (वीडी) और उनके परिवारों की जरूरत होती है। इस योजना से दो स्तरों के पाठ्यक्रम के माध्यम से प्रशिक्षण का चयन प्रदान किया जाएगा।
                            <div className="p-4 pb-0">
                              <ul>
                                <li>केयर एसोसिएट सेल (सीएसी) की स्थापना</li>
                                <li>
                                प्रशिक्षण प्रदान करें और एक कुशल बनाएं
                                </li>
                                <li>
                                प्रशिक्षण प्राप्त करने का अवसर प्रदान करना
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/sahyogi.php"
                                target="_blank">
                                और पढ़ें
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
                          सहायक उपकरण
                          </MDBCardTitle>
                          <MDBCardText>
                          ये केंद्र राष्ट्रीय ट्रस्ट विकलांगताओं के विकलांग व्यक्तियों के सुधार और सशक्तिकरण के लिए डिवाइस, उपकरण, सहायक और सॉफ्टवेयर आदि की जानकारी और आसान पहुंच प्रदान करने का उद्देश्य रखते हैं।जनता में जागरूकता उत्पन्न करना और उन्हें समाज में सम्मिलित करना संबंधित हितधारकों के लिए डिवाइस के प्रदर्शन और प्रदर्शन का भी प्रावधान होगा
                            <div className="p-4 pb-0">
                              <ul>
                                <li>अतिरिक्त संसाधन केंद्र स्थापित करें</li>
                                <li>
                                सूचना और उपकरणों के लिए आसान पहुँच
                                </li>
                                <li>
                                उपकरणों का प्रदर्शन और प्रदर्शन
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/sambhav.php"
                                target="_blank">
                                और पढ़ें
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
                          जागरूकता, सामुदायिक सहभागिता और अभिनव
                            परियोजना
                          </MDBCardTitle>
                          <MDBCardText>
                          "बढ़ते कदम" का उद्देश्य समुदाय जागरूकता, संवेदनशीलता, सामाजिक एकीकरण और राष्ट्रीय ट्रस्ट अधिनियम के अंतर्गत विकलांग व्यक्तियों का सम्मिलन है। राष्ट्रीय ट्रस्ट अधिनियम के अंतर्गत विकलांग व्यक्तियों के बारे में जनता में जागरूकता उत्पन्न करना और उन्हें समाज में सम्मिलित करना और सामाजिक एकीकरण को प्रोत्साहित करना है।
                            <div className="p-4 pb-0">
                              <ul>
                                <li>सामुदायिक  संवेदनशील बनाएं</li>
                                <li>अधिक से अधिक लाभ प्राप्त करें </li>
                                <li>
                                मिथकों के बारे में जागरूकता फैलाएं
                                </li>
                              </ul>
                            </div>
                            <div className="row text-end">
                              <a
                                href="https://thenationaltrust.gov.in/content/scheme/badhte-kadam.php"
                                target="_blank">
                                और पढ़ें
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
                  आप लॉग इन नहीं हैं।
                  </div>
                  <Link to="/login">
                    <div className="text-center pb-5 ">
                      <button className="text-center btn loginbtn me-md-2">
                      लॉगिन पेज पर जाएं।
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
