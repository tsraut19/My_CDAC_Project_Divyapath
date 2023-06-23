import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import { Link } from "react-router-dom";
const questions = [
  {
    id: 1,
    text: "पिछले दो हफ्तों में, आप कितनी बार ऐसा महसूस किया है कि कुछ काम करने में कम रुचि या खुशी होती है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 2,
    text: "पिछले दो हफ्तों में, आपने कितनी बार उदास, निराश या निराश महसूस किया है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 3,
    text: "पिछले दो हफ्तों में, आपने कितनी बार उदास और अकेला महसूस किया है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 4,
    text: "पिछले दो हफ्तों में, आपने कितनी बार किसी से बात करने का मन बनाया है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 5,
    text: "पिछले दो सप्ताहों में, आपने कितनी बार निर्णय लेने में कठिनाई महसूस की है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 6,
    text: "पिछले दो हफ्तों में, आपने कितनी बार थकान और ऊर्जा की कमी महसूस की है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 7,
    text: "पिछले दो हफ्तों में, आपने कितनी बार महसूस किया है कि मेरे लिए कुछ भी काम नहीं करेगा?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 8,
    text: "पिछले दो हफ्तों में, आपने कितनी बार ध्यान केंद्रित करने में कठिनाई महसूस की है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 9,
    text: "पिछले दो हफ्तों में, आपने कितनी बार चिड़चिड़ापन या गुस्सा महसूस किया है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  {
    id: 10,
    text: "पिछले दो हफ्तों में, आपने कितनी बार बेचैन और चिंतित महसूस किया है?",
    options: [
      { id: "not_at_all", text: "बिल्कुल नहीं" },
      { id: "several_days", text: "कई दिन" },
      { id: "more_than_half_the_days", text: "आधे से ज्यादा दिन" },
      { id: "nearly_everyday", text: "लगभग हर दिन" },
    ],
  },
  // Add more questions here
];

export function MentalHealthTestH() {
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
                          पहुंच योग्य स्थान
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="jobsH" className="custom-card">
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
                           नौकरी 
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="skillsH" className="custom-card">
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
                          शिक्षा
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="mentalHealthH" className="custom-card">
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
                          मानसिक स्वास्थ्य
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="govtSchemesH" className="custom-card">
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
                          महत्वपूर्ण योजना
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="container pt-3">
              <div className=" row  d-flex justify-content-center align-items-center text-center">
                <div className="col-md-10 ">
                  <h1 className="  HomePgTitle  ">मानसिक स्वास्थ्य परीक्षण</h1>
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
                    सबमिट करें।
                    </button>
                  </div>
                </form>
              </div>

              {score !== null && score > 20 && (
                <div className=" row  d-flex justify-content-center align-items-center text-center">
                  <div className="col-md-10 p-2 pt-5">
                    <h2>आपका स्कोर है: {score}</h2>
                    <p>
                    आपके स्कोर के आधार पर, आप एक पेशेवर मानसिक स्वास्थ्य प्रदाता से संपर्क करना चाहते हो सकते हैं। कृपया अधिक जानकारी के लिए एक मानसिक स्वास्थ्य प्रदाता से संपर्क करें।
                    </p>
                    <a
                      href="https://www.felicity.care/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="p-2 loginbtn w-20" type="submit">
                      मदद
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {score !== null && score <= 20 && (
                <div className=" row  d-flex justify-content-center align-items-center text-center">
                  <div className="col-md-10 p-2 pt-5">
                    <h2>आपका स्कोर है: {score}</h2>
                    <p>आपका स्वास्थ्य अच्छा है</p>
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
    </>
  );
}
