import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./VercelInterviewerBot.module.css";
import { Link } from "react-router-dom";

const VercelInterviewerBot = () => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Interviewer Chat-Bot</h1>
          <p>Powered By Vercel</p>
        </div>
      </figure>
      <figure className={styles.separatorContainer}>
        <Separator></Separator>
      </figure>
      <main className={styles.infoContainer}>
        <div className={styles.chatBox}>
          <div>
            <h1>Vercel Interviewer</h1>
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

export default VercelInterviewerBot;
