import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { allJobsFromServer, getAllJobsFromServer, } from "../Services/ApiServices";
import { datedJobsFromServer, getDatedJobsFromServer, } from "../Services/ApiServices";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

export function JobUser() {
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
      sessionStorage.getItem("isActive") === "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setUserName(sessionStorage.getItem("userName"));
      fetch("http://localhost:8585/jobs-admin/get-job-list")
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

  //------------ delete job -------------
  const deleteRequest = async () => {
   await fetch(`http://localhost:8585/jobs-admin/delete-job/${selectedJid}`, {
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
            <div className="row pt-3 pb-4 justify-content-evenly">
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
                        Accesible places
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/jobs" className="custom-card">
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
                    <div className="card-body">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{
                          textDecoration: "initial",
                          color: "black",
                        }}>
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
                    <div className="card-body">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{
                          textDecoration: "initial",
                          color: "black",
                        }}>
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
                    <div className="card-body">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{
                          textDecoration: "initial",
                          color: "black",
                        }}>
                        Govt Schemes
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
                <h1 className="p-4 HomePgTitle  "> Career opportunities</h1>
              </div>

              <div className="container pb-2 text-center">
                Our platform offers a comprehensive selection of job
                opportunities, specifically curated for disabled individuals
                seeking meaningful careers. Our team is committed to promoting
                equal access and opportunities for all, including people with
                disabilities. We work closely with top employers to ensure a
                diverse range of job listings and inclusive hiring practices.Our
                platform also offers resources and support for disabled job
                seekers, including resume building and interview preparation.
                Join our community and discover new career paths and
                opportunities that align with your unique skills and passions.
              </div>
            </div>
          </Container>

          <div className="container p-5">
            {loggedIn && (role === "admin" || role === "superadmin") && (
              <div className="pb-3 d-flex justify-content-end ">
                {" "}
                <Link to="/add-job-admin">
                  <button className="btn loginbtn w-100">Add new job</button>
                </Link>
              </div>
            )}

            {jobs.map((job) => {
              return (
                <>
                  <div className="card shadow pb-3 mb-3">
                    <h5 className="card-header">Job Profile {job.jid}</h5>
                    <div className="card-body">
                      <div>
                        <h5 className="card-title">{job.job}</h5>
                        <span className="badge rounded-pill bg-success">
                          {job.status}
                        </span>
                      </div>
                      <p className="card-text">
                        <b>Roles and Responsibilities</b>
                      </p>
                      <p>{job.description}</p>
                      <p />
                      <dl className="row">
                        <dt className="col-sm-2">Experience</dt>
                        <dd className="col-sm-10">{job.experience} year/(s)</dd>
                        <dt className="col-sm-2">Location</dt>
                        <dd className="col-sm-10">{job.location}</dd>
                        <dt className="col-sm-2">Last Date to apply</dt>
                        <dd className="col-sm-10">{job.lastDateToApply}</dd>
                        <dt className="col-sm-2">Category</dt>
                        <dd className="col-sm-10">{job.category}</dd>
                        <dt className="col-sm-2">Industry Type</dt>
                        <dd className="col-sm-10">{job.industry}</dd>
                        <dt className="col-sm-2">Employment Type</dt>
                        <dd className="col-sm-10">{job.employmentType}</dd>
                        <dt className="col-sm-2">Education</dt>
                        <dd className="col-sm-10">{job.education}</dd>
                      </dl>
                      <div className="row">
                        {loggedIn && role === "user" && (
                          <div className="col-md-3">
                            <div className="mt-2">
                              <a
                                href="mailto:jobsadmin05@cdac.com"
                                className="btn btn-primary loginbtn w-100">
                                Apply
                              </a>
                            </div>
                          </div>
                        )}

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
                                  Delete
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

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the place with id=
          {selectedJid}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteRequest}>
            Yes, Delete
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
