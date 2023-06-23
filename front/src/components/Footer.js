import { Component } from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" ">
          <div className="footer-top">
            <div className="container">
              <div className="footer-day-time">
                <div className="row">
                  <div className="col-lg-4">
                    <h4>About </h4>
                    The Divya-Path project aims to provide a comprehensive
                    platform for people with special needs, particularly Divyang
                    individuals by providing them with essential services,
                    learning opportunities, and employment prospects.
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-md-4">
                    <h4>Information</h4>
                    <ul className="address1">
                      Address : Centre for Developmt of Advanced Computing,{" "}
                      <br />
                      en Raintree Marg, Near Bharati Vidyapeeth, <br />
                      Opp. Kharghar Railway Station, Sector 7, <br />
                      CBD Belapur Navi Mumbai - 400 614 - Maharashtra (India){" "}
                      <br />
                      <a
                        href="mailto:team45@cdac.com"
                        style={{ textDecoration: "none", color: "white" }}>
                        Mail us : team45@cdac.com
                      </a>
                      <br />
                      <a
                        href="tel:97 62 46 75 45"
                        style={{ textDecoration: "none", color: "white" }}>
                        Phone : 8788767697
                      </a>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h4>Follow us</h4>
                    <ul className="social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/cdacmumbai/"
                          target="_blank">
                          <FontAwesomeIcon
                            className="socialIconsFooter"
                            icon={faFacebook}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/dac_cdacmumbai/?hl=en"
                          target="_blank">
                          {/* <i className="fa fa-instagram" aria-hidden="true" /> */}
                          <FontAwesomeIcon
                            className="socialIconsFooter"
                            icon={faInstagram}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/cdacmumbai?lang=en"
                          target="_blank">
                          {/* <i className="fa fa-twitter" aria-hidden="true" /> */}
                          <FontAwesomeIcon
                            className="socialIconsFooter"
                            icon={faTwitter}
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/cdacindia/"
                          target="_blank">
                          {/* <i className="fa fa-linkedin" aria-hidden="true" /> */}
                          <FontAwesomeIcon
                            className="socialIconsFooter"
                            icon={faLinkedin}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p>Team 45 Kh</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
