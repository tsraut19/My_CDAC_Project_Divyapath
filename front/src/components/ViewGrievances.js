import React, { useState, useEffect } from "react";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import { Container, Alert, Modal, Button } from "react-bootstrap";
import { Navigation } from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { updateStatusInServer } from "../Services/ApiServices";

export function ViewGrievances() {
  const [grievs, setGrievanceList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
  const [status, setStatus] = useState("");
  const [selectedGid, setSelectedGid] = useState("");


  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setEmail(sessionStorage.getItem("userEmail"));
    } else {
      setLoggedIn(false);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:8585/griev/pending")
      .then((response) => response.json())
      .then((result) => setGrievanceList(result));
  }, []);

  const updateStatus = async () => {
    const response = await updateStatusInServer(selectedGid);
    console.log(response.data);
    console.log(selectedGid);
    closeModal();
  };

  function HandleStatusChange() {
    updateStatus(selectedGid);
  }

  return (
    <div>
      <Navigation></Navigation>
      {loggedIn && (role === "admin" || role === "superadmin") ? (
        <div>
          <Container className="mt-5 mb-5 text-center">
            <Alert className="alert-primary">
              <h2>All grievances</h2>
            </Alert>
          </Container>
          <Container>
            <div className="row p-2 pb-5">
              <table className="table table-striped table-bordered table-hover shadow">
                <thead className="table-dark">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {grievs.map((griev) => {
                    return (
                      <>
                        <tr key={griev.id}>
                          <td>{griev.fname}</td>
                          <td>{griev.lname}</td>
                          <td>{griev.subject}</td>
                          <td>{griev.description}</td>
                          <td>{griev.status}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success me-2"
                              onClick={() => {
                                setSelectedGid(griev.gid);
                                openModal();
                              }}>
                              Resolve
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Container>

          <Modal show={isModalOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to resolve?</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={updateStatus}>
                Yes, Resolve
              </Button>
              <Button variant="danger" onClick={closeModal}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
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
    </div>
  );
}
