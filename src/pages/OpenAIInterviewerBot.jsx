import { useState } from "react";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./OpenAIInterviewerBot.module.css";

// 🔊 Text-to-Speech function to read responses out loud
const speakText = (text) => {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
};

const OpenAIInterviewerBot = () => {
  // Store the job title
  const [jobTitle, setJobTitle] = useState("");

  // Store the user's input message
  const [userInput, setUserInput] = useState("");

  // Keep the conversation history
  const [chatHistory, setChatHistory] = useState([]);

  // Handles sending a message
  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = e.customInput || userInput;
    if (!input.trim()) return;

    // Add user's message to chat
    setChatHistory((prev) => [...prev, { role: "user", text: input }]);
    setUserInput("");

    try {
      // Fetch to backend
      const response = await fetch("http://localhost:3001/interview/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: jobTitle,
          userResponse: input,
        }),
      });

      const data = await response.json();

      // Text to Speech Error Handling
      if (!response.ok) {
        const errorMsg = `Error: ${data.error || "Unknown error."}`;
        setChatHistory((prev) => [...prev, { role: "model", text: errorMsg }]);
        speakText(errorMsg);
        return;
      }

      // Add AI response to chat and speak it
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: data.response },
      ]);
      speakText(data.response);
    } catch (err) {
      
      // Text to Speech Error Handling
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
          {/* Job Title Input */}
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
            {/* Start button sends "start interview" as input */}
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

          {/* Chat history display */}
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

          {/* Input field to send messages */}
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
