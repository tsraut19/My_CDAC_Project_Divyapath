import { useEffect, useState } from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { getAllUnauthenticated } from "../Services/ApiServices";
import { approveAdmin } from "../Services/ApiServices";
import { Link } from "react-router-dom";

export function SuperAdminApproval() {
  const [data, setData] = useState([]);
  const [selectedUserEmail, setSelectedUserEmail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
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
      setUnauthenticatedAdmins();
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
  async function setUnauthenticatedAdmins() {
    const response = await getAllUnauthenticated();
    setData(response.data);
  }
  // useEffect(() => {
  //   setUnauthenticatedAdmins();
  // }, []);

  const approveRequest = async () => {
    const response = await approveAdmin(selectedUserEmail);
    console.log(response.data);
    closeModal();
    setUnauthenticatedAdmins();
  };
  console.log(data);
  console.log(selectedUserEmail);

  return (
    <>
      <Navigation></Navigation>
      {loggedIn && role === "superadmin" ? (
        <div>
          <Container className="mt-5 mb-5 text-center">
            <Alert className="alert-primary">
              <h2>Approve newly registered admins</h2>
            </Alert>
          </Container>
          <Container>
            <div className="pb-5">
              <table className="table table-striped table-bordered table-hover">
                <thead className="table table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Emp Id</th>
                    <th>Dept Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr key={row.uid}>
                      <td>{row.name}</td>
                      <td>{row.mobile}</td>
                      <td>{row.email}</td>
                      <td>{row.empId}</td>
                      <td>{row.deptId}</td>
                      <td>
                        <Button
                          variant="success"
                          className="btn-sm"
                          onClick={() => {
                            setSelectedUserEmail(row.email);
                            openModal();
                          }}>
                          Approve
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
          <Modal show={isModalOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to approve the user with email=
              {selectedUserEmail}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={approveRequest}>
                Yes, Approve
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
                    You are not authorised to view this
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
    </>
  );
}
