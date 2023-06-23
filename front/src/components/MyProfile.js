import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { getUsersFromServer } from "../Services/ApiServices";
export function MyProfile() {
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
  const [userDetails, setUserDetails] = useState([]);

  async function getUserDetails() {
    const response = await getUsersFromServer(email);

    setUserDetails(response.data);
  }
  useEffect(() => {
    getUserDetails();
  });
  //getUserDetails();
  console.log(userDetails);

  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <div>
          <div className="row p-5 justify-content-center">
            <div className="col-md-6  ">
              <div className="card   shadow">
                <div className="card-body p-5  mb-0">
                  <div className="col-md-12  text-center pb-2">
                    <h1 className=" alert alert-primary  ">My profile</h1>
                  </div>

                  <table class="table  ">
                    <tbody>
                      <tr>
                        <th>Name :</th>
                        <td>{userDetails.name}</td>
                      </tr>
                      <tr>
                        <th>City :</th>
                        <td>{userDetails.city}</td>
                      </tr>
                      <tr>
                        <th>Mobile no. :</th>
                        <td>{userDetails.mobile}</td>
                      </tr>
                      <tr>
                        <th>Email Id :</th>
                        <td>{userDetails.email}</td>
                      </tr>
                      <tr>
                        <th>Date of Birth :</th>
                        <td>{userDetails.dob}</td>
                      </tr>
                      <tr>
                        <th>Role :</th>
                        <td>{userDetails.role}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
    </>
  );
}
