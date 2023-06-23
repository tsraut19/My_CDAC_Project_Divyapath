import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

export class Home1 extends Component {
  render() {
    return (
      <>
        <div className=" bg-light">
          <Container fluid>
            <div className="container-fluid  ">
              <div className="row text-center ">
                <h1 className="p-5 pt-0 HomePgTitle"> दिव्य पथ </h1>
              </div>

              <div className="container pb-5 text-center">
                दिव्यांग व्यक्तियों के समुदाय के लिए यह एक परस्पर संवाद मंच है
                जो सम्मिलित डोमेन मे सामूहिक अधिगम प्रक्रिया में संलग्न है। इससे
                लोगों को अपने क्षेत्र से संबन्धित जानकारी, अधिगम और सूचनाएँ
                बांटने में मदद मिलेगी। दिव्यांगता वार समुदाय सक्रिय रूप से इस
                मंच पर अपने कल्याण और पुनर्वास के लिए संपर्क कर सकते हैं।
              </div>
            </div>
          </Container>
          <div className="container ">
            <div className="row  ">
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
                    className="card navCards   text-center pt-3"
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
                    className="card navCards text-center pt-3"
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
                <a href="skillsH" className="custom-card">
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
            {/* Info cards */}
            <div className="row pt-5 pb-2 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">भाषा अनुकूलता</h5>
                    <p className="card-text">आपकी सुविधा,आपके भाषा में</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">
                      पहुंच योग्य स्थान
                    </h5>
                    <p className="card-text">
                      हमारे साथ पहुंच योग्य स्थान सुनिश्चित करें
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-2 pb-2 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">नौकरी </h5>
                    <p className="card-text">आजीविका सुरक्षित करे</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">शिक्षा</h5>
                    <p className="card-text">
                      अपने आप को कुशल और री-स्किल करें
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  pt-2 pb-5 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">मानसिक स्वास्थ्य</h5>
                    <p className="card-text">स्वस्थ मन आपको स्वस्थ रखता है</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">महत्वपूर्ण योजना</h5>
                    <p className="card-text">जानिए अपने फायदे</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
