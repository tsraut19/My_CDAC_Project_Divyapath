import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Link } from "react-router-dom";
const questions = [
  {
    id: 1,
    text: "In the last two weeks, how often have you felt little interest or pleasure in doing things?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 2,
    text: "In the last two weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 3,
    text: "In the last two weeks, how often have you felt sad and lonely?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 4,
    text: "In the last two weeks, how often have you felt to talk someone?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 5,
    text: "In the last two weeks, how often have you felt difficulty making decisions?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 6,
    text: "In the last two weeks, how often have you felt tired and low on energy?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 7,
    text: "In the last two weeks, how often have you felt that nothing will ever work out for me?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 8,
    text: "In the last two weeks, how often have you felt difficulty in concentrating?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 9,
    text: "In the last two weeks, how often have you felt irritated or angry often?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  {
    id: 10,
    text: "In the last two weeks, how often have you felt restless and anxious?",
    options: [
      { id: "not_at_all", text: "Not at all" },
      { id: "several_days", text: "Several days" },
      { id: "more_than_half_the_days", text: "More than half the days" },
      { id: "nearly_everyday", text: "Nearly every day" },
    ],
  },
  // Add more questions here
];

export function MentalHealthTest() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let totalScore = 0;

    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      const answerId = answers[questionId];

      if (answerId === undefined) {
        setScore(null);
        return;
      }

      const answerIndex = questions[i].options.findIndex(
        (option) => option.id === answerId
      );
      const answerScore = answerIndex + 1;

      totalScore += answerScore;
    }

    setScore(totalScore);
  };
  //----------------session
  const [loggedIn, setLoggedIn] = useState("false");
  const [role, setRole] = useState("");
  const [data, setData] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (
      sessionStorage.getItem("isActive") != null &&
      sessionStorage.getItem("isActive") == "true"
    ) {
      setLoggedIn(true);
      setRole(sessionStorage.getItem("role"));
      setUserName(sessionStorage.getItem("userName"));
      
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Navigation></Navigation>
      {loggedIn ? (
        <div className=" ">
          <body
            //   background="../Images/mentalhealth.jpg"
            className="mentalhealthbg pb-5">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-3  pt-3 text-end">
                  <h6>Logged in as : {userName}</h6>
                </div>
              </div>
              <div className="row pb-5  pt-3">
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
                      className="card navCards text-center pt-3"
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
                      className="card navCards text-center pt-3 "
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
                      className="card navCards text-center pt-3 activeNavCard"
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
            </div>
            <div className="container pt-3">
              <div className=" row  d-flex justify-content-center align-items-center text-center">
                <div className="col-md-10 ">
                  <h1 className="  HomePgTitle  ">Mental Health Test</h1>
                </div>
              </div>

              <div className="pt-3 d-flex justify-content-center ">
                <form onSubmit={handleSubmit} className="testform  ">
                  <div>
                    {questions.map((question) => (
                      <div
                        key={question.id}
                        className="question p-3 border m-2 shadow bg-white">
                        <h4>{question.text}</h4>
                        {question.options.map((option) => (
                          <div key={option.id}>
                            <input
                              className="p-1"
                              type="radio"
                              id={`${question.id}-${option.id}`}
                              name={`${question.id}`}
                              value={option.id}
                              checked={answers[question.id] === option.id}
                              onChange={() =>
                                handleAnswer(question.id, option.id)
                              }
                            />
                            <label
                              className="p-2"
                              htmlFor={`${question.id}-${option.id}`}>
                              {option.text}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                    <button className="p-2 loginbtn w-100" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {score !== null && score > 20 && (
                <div className=" row  d-flex justify-content-center align-items-center text-center">
                  <div className="col-md-10 p-2 pt-5">
                    <h2>Your score is: {score}</h2>
                    <p>
                      Based on your score, you may want to seek professional
                      help. Please contact a mental health provider for more
                      information.
                    </p>
                    <a
                      href="https://www.felicity.care/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="p-2 loginbtn w-20" type="submit">
                        Help
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {score !== null && score <= 20 && (
                <div className=" row  d-flex justify-content-center align-items-center text-center">
                  <div className="col-md-10 p-2 pt-5">
                    <h2>Your score is: {score}</h2>
                    <p>You are in good shape.</p>
                  </div>
                </div>
              )}
            </div>
          </body>
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
