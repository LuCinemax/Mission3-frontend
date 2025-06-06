import { useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./OpenAIInterviewerBot.module.css";

// 🔊 Text-to-Speech function
const speakText = (text) => {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
};

const OpenAIInterviewerBot = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = e.customInput || userInput;
    if (!input.trim()) return;

    setChatHistory((prev) => [...prev, { role: "user", text: input }]);
    setUserInput("");

    try {
      const response = await fetch("http://localhost:3001/interview/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: jobTitle,
          userResponse: input,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = `Error: ${data.error || "Unknown error."}`;
        setChatHistory((prev) => [...prev, { role: "model", text: errorMsg }]);
        speakText(errorMsg);
        return;
      }

      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: data.response },
      ]);

      speakText(data.response); // 🔊 Say the response
    } catch (err) {
      const fallback = "An unexpected error occurred.";
      setChatHistory((prev) => [...prev, { role: "model", text: fallback }]);
      speakText(fallback);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Interviewer Chat-Bot</h1>
          <p>Powered By OpenAI</p>
        </div>
      </figure>
      <figure className={styles.separatorContainer}>
        <Separator />
      </figure>
      <p className={styles.versionLabel}>v1.0 – OpenAI Model ChatGPT</p>
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
              placeholder="e.g., Software Engineer"
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

          <div className={styles.chatHistory}>
            {chatHistory.length === 0 && (
              <div className={styles.initialMessage}>
                Enter a Job Title and click "Start Interview" to begin.
              </div>
            )}
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? styles.userMsg : styles.botMsg}
              >
                <strong>{msg.role === "user" ? "Me:" : "Interviewer:"}</strong>{" "}
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
              disabled={!jobTitle}
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!jobTitle || !userInput.trim()}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenAIInterviewerBot;
