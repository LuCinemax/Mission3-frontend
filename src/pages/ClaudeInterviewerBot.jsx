import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./ClaudeInterviewerBot.module.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD:src/pages/VercelInterviewerBot.jsx
const VercelInterviewerBot = () => {
=======
const ClaudeInterviewerBot = () => {
>>>>>>> ef8ef298380d1efd8a0e3e5452c163ea07d4e29a:src/pages/ClaudeInterviewerBot.jsx
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Interviewer Chat-Bot</h1>
          <p>Powered By Claude</p>
        </div>
      </figure>
      <figure className={styles.separatorContainer}>
        <Separator></Separator>
      </figure>
      <main className={styles.infoContainer}>
        <div className={styles.chatBox}>
          <div>
            <h1>Claude Interviewer</h1>
          </div>
          <div>
            <div>
              <h1>Job </h1>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

<<<<<<< HEAD:src/pages/VercelInterviewerBot.jsx
export default VercelInterviewerBot;
=======
export default ClaudeInterviewerBot;
>>>>>>> ef8ef298380d1efd8a0e3e5452c163ea07d4e29a:src/pages/ClaudeInterviewerBot.jsx
