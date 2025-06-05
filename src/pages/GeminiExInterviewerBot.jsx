import { useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./GeminiEXInterviewerBot.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from 'react-markdown';

const GeminiEXInterviewerBot = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [sessionId] = useState(() => Date.now().toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.customInput || userInput;
    if (!input.trim() || !jobTitle.trim()) return;

    try {
      const response = await axios.post("http://localhost:3001/interview/experimental", {
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
    <div className={styles.pageContainer}>
      {/* ======== Header ======== */}
      <Header></Header>

      {/* ========= Banner ======= */}
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Interviewer Chat-Bot</h1>
          <p>Powered By Gemini</p>
        </div>
      </figure>
      <figure className={styles.separatorContainer}>
        <Separator />
      </figure>

      <div className={styles.topButtons}>
        <Link to="/GeminiLegacyInterviewerBot" className={styles.navButton}>
          Legacy Version
        </Link>
        <Link to="/GeminiInterviewerBot" className={styles.navButton}>
          Standard Version
        </Link>
        
      </div>

      <p className={styles.versionLabel}>v1.0 – Gemini Model Experimental</p>
      <main className={styles.infoContainer}>
        <div className={styles.chatBox}>
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
              onClick={(e) => {
                handleSubmit({
                  preventDefault: () => {},
                  target: { value: "start interview" },
                  customInput: "start interview",
                });
              }}
            >
              Start Interview
            </button>
          </div>

          <div className={styles.chatHistory}>
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? styles.userMsg : styles.botMsg}
              >
                <ReactMarkdown>
                  {msg.role === "user" ? "Me:" : "Interviewer:"}
                </ReactMarkdown>{" "}
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.inputSection}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className={styles.inputExpand}
              placeholder="Type your response..."
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </main>
      <div className={styles.bottomButton}>
        <Link to="/TurnersInterviewPage" className={styles.navButton}>
          Connect to Turners
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default GeminiEXInterviewerBot;
