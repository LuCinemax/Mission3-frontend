import React, { useState } from "react";
import NavBar from "../components/TurnersNavBar";
import TopHeader from "../components/TurnersTopHeader";
import Footer from "../components/TurnersFooter";
import styles from "./TurnersInterviewPage.module.css";
import logo from "../assets/Images/turnerscars_logo.png";
import finance from "../assets/Images/finance.jpg";
import userIcon from "../assets/Images/user.png";
import phoneIcon from "../assets/Images/phone.png";
import locationIcon from "../assets/Images/location.png";
import axios from "axios";

function TurnersInterviewPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [sessionId] = useState(() => Date.now().toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.customInput || userInput;
    if (!input.trim() || !jobTitle.trim()) return;

    try {
      const response = await axios.post("http://localhost:3001/interview/standard", {
        sessionId,
        jobTitle,
        userResponse: input,
      });
      setChatHistory(response.data.history);
      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <TopHeader />
      <div className={styles.logoBox}>
        <figure className={styles.logoImage}>
          <img src={logo} alt="turnerslogo" />
        </figure>
        <ul className={styles.infoSection}>
          <li>
            <img src={userIcon} alt="" /> LOGIN / REGISTER
          </li>
          <li>
            <img src={phoneIcon} alt="" /> 0800 887 637
          </li>
          <li>
            <img src={locationIcon} alt="" /> Find Us
          </li>
        </ul>
      </div>
      <NavBar />

      <main className={styles.background}>
        <section className={styles.pageBox}>
          <nav className={styles.breadcrumb}>
            <a href="https://www.turners.co.nz/">Home</a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/">Cars</a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/finance-insurance/">
              Finance & Insurance
            </a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/finance-insurance/car-insurance/">
              Car Insurance
            </a>
            <span>»</span>
            <a href="#">AI Interviewer</a>
          </nav>

          <figure>
            <img className={styles.financeImg} src={finance} alt="" />
          </figure>

          {/* Chat Box Section */}
          <div className={styles.chatBox}>
            {/* Job Title Input and Start Button */}
            <div className={styles.jobInputSection}>
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                id="jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className={styles.inputField}
              />
              <button
                type="button"
                className={styles.startButton}
                onClick={() =>
                  handleSubmit({
                    preventDefault: () => {},
                    customInput: "start interview",
                  })
                }
              >
                Start Interview
              </button>
            </div>

            {/* Chat History */}
            <div className={styles.chatHistory}>
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={msg.role === "user" ? styles.userMsg : styles.botMsg}
                >
                  <strong>{msg.role === "user" ? "Me:" : "Interviewer:"}</strong> {msg.text}
                </div>
              ))}
            </div>

            {/* Input + Submit */}
            <form onSubmit={handleSubmit} className={styles.inputSection}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className={styles.inputField}
                placeholder="Type your response..."
              />
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TurnersInterviewPage;
