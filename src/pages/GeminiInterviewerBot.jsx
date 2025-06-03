import { useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./GeminiInterviewerBot.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const GeminiInterviewerBot = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [sessionId] = useState(() => Date.now().toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || !jobTitle.trim()) return;

    try {
      const response = await axios.post("http://localhost:3001/interview", {
        sessionId,
        jobTitle,
        userResponse: userInput,
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
          </div>

          <div className={styles.chatHistory}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={msg.role === "user" ? styles.userMsg : styles.botMsg}>
                <strong>{msg.role === "user" ? "Me:" : "Interviewer:"}</strong> {msg.text}
              </div>
            ))}
          </div>

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
      </main>
      <Footer />
    </div>
  );
};

export default GeminiInterviewerBot;

