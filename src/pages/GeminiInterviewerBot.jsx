import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./GeminiInterviewerBot.module.css";
import { Link } from "react-router-dom";

const GeminiInterviewerBot = () => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Interviewer Chat-Bot</h1>
          <p>Powered By Gemini</p>

          <div className={styles.mainButton}>
            <Link to="/">HOME</Link>
          </div>
        </div>
      </figure>
      <figure className={styles.separatorContainer}>
        <Separator></Separator>
      </figure>
      <main className={styles.infoContainer}>
        <div className={styles.chatBox}>
          <div>
            <h1>Gemini Interviewer</h1>
          </div>
          <div>
            <div>
                <h1>Job </h1>

            </div>
            <div>

            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default GeminiInterviewerBot;
