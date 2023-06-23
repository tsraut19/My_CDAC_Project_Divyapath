import React, { useState, useEffect } from "react";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import { Container, Alert, Modal, Button } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { getMyGrievsFromServer } from "../Services/ApiServices";
import { Link } from "react-router-dom";

export function MyGrievances() {
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
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

  console.log(email);

  const [grievs, setGrievDetails] = useState([]);

  async function getmyGrievs() {
    const response = await getMyGrievsFromServer(email);

    setGrievDetails(response.data);
  }
  useEffect(() => {
    getmyGrievs();
  });
  //getUserDetails();
  console.log(grievs);

  return (
    <div>
      <Navigation></Navigation>
      {loggedIn ? (
        <div>
          <Container className="mt-5 mb-5 text-center">
            <Alert className="alert-primary">
              <h2>My grievances grievances</h2>
            </Alert>
          </Container>
          <Container>
            <div className="row p-2 pb-5">
              <table className="table table-striped table-bordered table-hover shadow">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {grievs.map((griev) => {
                    return (
                      <>
                        <tr key={griev.id}>
                          <td>{griev.gid}</td>
                          <td>{griev.subject}</td>
                          <td>{griev.description}</td>
                          <td>{griev.status}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Container>
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
