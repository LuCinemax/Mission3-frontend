import Header from '../components/Header'
import Separator from '../components/Separator'
import Footer from '../components/Footer'
import styles from './Homepage.module.css'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={styles.pageContainer}>
        <Header></Header>
        <figure className={styles.bannerImage}>
          <div className={styles.bannerTextContainer}>
            <h1>
              MISSION AI
            </h1>
            <p>Beyond Human, Beyond Boundaries.</p>

            <div className={styles.mainButton}>
              <button>Compare Models</button>
            </div>
          </div>
          
        </figure>
        <figure className={styles.separatorContainer}>
            <Separator></Separator>
        </figure>
        <main className={styles.infoContainer}>
          <div className={styles.introBox}>
            <h1>Redefining Recruitment Through Synthetic Intelligence</h1>
            <hr /> <br />
            <p>In a world where time, precision, and fairness define the success of hiring, 
              Mission AI introduces an entirely new way to evaluate candidates—through the orchestration 
              of three of the world’s most powerful AI systems: Gemini (Google), OpenAI (ChatGPT/GPT-4o), 
              and MetaAI (LLaMA 3). This is not just automation.</p> <br />
              <p>This is autonomous, adaptive, and analytically 
              superior interviewing—at scale. We have combined natural language processing, cognitive reasoning, 
              and behavioral interpretation into a single, seamless pipeline that replaces outdated hiring models 
              with intelligent, tireless digital interviewers.</p>
          </div>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Homepage