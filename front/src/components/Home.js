import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import { Home1 } from "./Home1";


export function Home() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="container-fluid bg-light">
        <div className="container ">
          <div className="row justify-content-end pt-3">
            {/* <div className="col-md-2">
              <h5 className="card-title  fw-bold">Select language</h5>
            </div>
            <div className="col-md-1">
              <div className="card-body   ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1">
                    English
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <div className="card-body   ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2">
                    Hindi
                  </label>
                </div>
              </div>
            </div> */}
            <div className="col-md-2">
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn langbtn  active ">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  English
                </label>
                <label class="btn langbtn">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  Hindi
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedOption === "option1" && (
        <div>
          <div className=" bg-light">
            <Container fluid>
              <div className="container-fluid  ">
                <div className="row text-center ">
                  <h1 className="p-5 pb-4 pt-0 HomePgTitle"> Divya-Path </h1>
                </div>

                <div className="container pb-5 text-center">
                  "Empowering Special Needs Individuals with our Accessible Web
                  Platform".<br></br> Future belongs to us with the affirmative
                  actions taken by us as a Community to make this world better
                  place to live and thrive for everyone. <br></br>
                </div>
              </div>
            </Container>
            <div className="container  ">
              <div className="row   ">
                <div className="col">
                  <Link to="/" className="custom-card">
                    <div
                      className="card navCards text-center pt-3 activeNavCard"
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
              {/* Info cards */}
              <div className="row pt-5 pb-2 ">
                <div className="col">
                  <div
                    className="card infoCardLeft shadow "
                    style={{ width: "auto" }}>
                    <div className="card-body  ">
                      <h5 className="card-title p-1 fw-bold">
                        Language compatibility
                      </h5>
                      <p className="card-text">
                        Your portal with your language
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card infoCardRight shadow "
                    style={{ width: "auto" }}>
                    <div className="card-body ">
                      <h5 className="card-title p-1 fw-bold">
                        Accesible places
                      </h5>
                      <p className="card-text">Ensure accebility with us</p>
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
                      <h5 className="card-title p-1 fw-bold">Jobs</h5>
                      <p className="card-text">
                        Explore the career opportunities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card infoCardRight shadow "
                    style={{ width: "auto" }}>
                    <div className="card-body ">
                      <h5 className="card-title p-1 fw-bold">Courses</h5>
                      <p className="card-text">Upskill and Re-Skill yourself</p>
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
                      <h5 className="card-title p-1 fw-bold">Mental health</h5>
                      <p className="card-text">
                        Healthy minds keeps you healthy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card infoCardRight shadow "
                    style={{ width: "auto" }}>
                    <div className="card-body ">
                      <h5 className="card-title p-1 fw-bold">
                        Government schemes
                      </h5>
                      <p className="card-text">Know your benifits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedOption === "option2" && <Home1 />}
    </>
  );
}
