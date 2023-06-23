import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { allJobsFromServer, getAllJobsFromServer, } from "../Services/ApiServices";
import { datedJobsFromServer, getDatedJobsFromServer, } from "../Services/ApiServices";
import { deleteJobByIdFromServer } from "../Services/ApiServices";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

export function JobUserH() {
  const [jobs, setJobs] = useState([]);
  const [selectedJid, setSelectedJid] = useState("");
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setUserName(sessionStorage.getItem("userName"));
      fetch("http://localhost:8585/jobs")
        .then((response) => response.json())
        .then((result) => setData(result));
    } else {
      setLoggedIn(false);
    }
  }, []);

  async function getAllJobs() {
    const response = await getDatedJobsFromServer();
    setJobs(response.data);
  }
  useEffect(() => {
    // fetch data from database
    getAllJobs();
  }, []);

  console.log(jobs);

  const job = jobs.map((ele) => {
    return ele + 1;
  });

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteRequest = async () => {
    fetch(`http://localhost:8585/jobs-admin/delete-job/${selectedJid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      console.log("Place deleted");
    });
    closeModal();
    getAllJobs();
  };

  console.log(selectedJid);

  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <div>
          <div className="container pt-3">
            <div className="row justify-content-end">
              <div className="col-md-3   text-end">
                <h6>Logged in as : {userName}</h6>
              </div>
            </div>
            <div className="row pt-3 pb-4">
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
                    className="card navCards text-center pt-3 "
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
                        सुलभ स्थान
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <Link to="/jobsH" className="custom-card">
                  <div
                    className="card navCards text-center pt-3 activeNavCard"
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
                        नौकरियां
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/skillsH" className="custom-card">
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
                        शिक्षा
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/mentalHealthH" className="custom-card">
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
                        मानसिक स्वास्थ्य
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/govtSchemesH" className="custom-card">
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
                        सरकारी योजनाएं
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Container fluid>
            <div className="container ">
              <div className="row text-center ">
                <h1 className="p-4 HomePgTitle  "> आजीविका के अवसर</h1>
              </div>

              <div className="container pb-2 text-center">
              हमारा प्लेटफ़ॉर्म विकलांग व्यक्तियों के लिए विशेष रूप से कुशल रोजगार की खोज करने वालों के लिए एक व्यापक चयन प्रस्ताव प्रदान करता है। 
              हमारी टीम समान पहुंच और अवसरों को बढ़ावा देने के लिए संकल्पित है, जिसमें विकलांगता वाले लोग भी शामिल हैं। 
              हम शीर्ष नियोक्ताओं के साथ निरंतर संपर्क में रहते हैं ताकि रोजगार की विविध श्रृंखला और समावेशी भर्ती व्यवहार सुनिश्चित हो सके। 
              हमारा प्लेटफ़ॉर्म रिज्यूमे बनाने और साक्षात्कार की तैयारी जैसी संसाधनों और समर्थन का भी प्रदान करता है जो विकलांग रोजगार तलाशकों के लिए है। 
              हमारी समुदाय में शामिल हों और अपनी अद्वितीय कौशल और पैशन के साथ मेल खाते नए करियर निर्देशों और अवसरों की खोज करें।
              </div>
            </div>
          </Container>

          <div className="container p-5">
            {loggedIn && (role === "admin" || role === "superadmin") && (
              <div className="pb-3 d-flex justify-content-end ">
                {" "}
                <Link to="/add-job-admin">
                  <button className="btn loginbtn w-100">नया कार्य जोड़ें</button>
                </Link>
              </div>
            )}

            {jobs.map((job) => {
              return (
                <>
                  <div className="card shadow pb-3">
                    <h5 className="card-header">नौकरी प्रोफ़ाइल {job.jid}</h5>
                    <div className="card-body">
                      <div>
                        <h5 className="card-title">{job.job}</h5>
                        <span className="badge rounded-pill bg-success">
                          {job.status}
                        </span>
                      </div>
                      <p className="card-text">
                        <b>कार्य और जिम्मेदारियाँ</b>
                      </p>
                      <p>{job.description}</p>
                      <p />
                      <dl className="row">
                        <dt className="col-sm-2">अनुभव</dt>
                        <dd className="col-sm-10">{job.experience} year/(s)</dd>
                        <dt className="col-sm-2">स्थान</dt>
                        <dd className="col-sm-10">{job.location}</dd>
                        <dt className="col-sm-2">अंतिम तिथि</dt>
                        <dd className="col-sm-10">{job.lastDateToApply}</dd>
                        <dt className="col-sm-2">वर्ग</dt>
                        <dd className="col-sm-10">{job.category}</dd>
                        <dt className="col-sm-2">उद्योग प्रकार</dt>
                        <dd className="col-sm-10">{job.industry}</dd>
                        <dt className="col-sm-2">रोजगार प्रकार</dt>
                        <dd className="col-sm-10">{job.employmentType}</dd>
                        <dt className="col-sm-2">शिक्षा</dt>
                     <dd className="col-sm-10">{job.education}</dd>
                      </dl>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mt-2">
                            <a
                              href="mailto:jobsadmin05@cdac.com"
                              className="btn btn-primary loginbtn w-100">
                              आवेदन करे
                            </a>
                          </div>
                        </div>
                      
                        {loggedIn &&
                          (role === "admin" || role === "superadmin") && (
                            <div className="col-md-3">
                              <div className="mt-2">
                                <Button
                                  type=""
                                  className="loginbtn btn w-100"
                                  onClick={() => {
                                    setSelectedJid(job.jid);
                                    openModal();
                                  }}>
                                  हटाए
                                </Button>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <br />
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

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>पुष्टि करे</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        क्या आप सुनिश्चित हैं कि आप उस स्थान को हटाना चाहते हो? id=
          {selectedJid}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteRequest}>
          हा, हटाओ.
          </Button>
          <Button variant="danger" onClick={closeModal}>
          नहीं
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
