import { Component, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../css/Navigation.css";
import { FaEdit, FaUser } from "react-icons/fa";

export function Navigation() {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    localStorage.getItem("session_token") || ""
  );
  function handleLogout() {
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("isActive");

    navigate("/login");
    console.log(token);
  }
  return (
    <Navbar expand="lg" class=" shadow pb-5 navigationBar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="./Images/Logo12.png"
            className="d-inline-block align-top logoimg"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <LinkContainer to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/sign-up"}>
              <Nav.Link>Sign-Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/sign-out"} onClick={handleLogout}>
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/my-profile"}>
              <Nav.Link>
                <div className=" text-right editDeleteIcons">
                  <FaUser
                    style={{
                      color: "#FFDC00",
                    }}
                  />
                </div>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
