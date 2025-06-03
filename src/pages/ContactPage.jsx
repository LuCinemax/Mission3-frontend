import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* ======== Header ======== */}
      <Header></Header>

      {/* ======== Banner ======== */}
      <figure className={styles.bannerImage}>
        <div className={styles.bannerTextContainer}>
          <h1>Contact Us</h1>
          <p>Learn More</p>
        </div>
      </figure>

      {/* Separator */}
      <figure className={styles.separatorContainer}>
        <Separator></Separator>
      </figure>

      {/* ======== Contact Details & Info ======== */}
      <main className={styles.infoContainer}>
        <div className={styles.introBox}>
          <h1>Contact & Contributors</h1>
          <hr />
          <br />

          <h3>Who We Are</h3>
          <p>
            We are a team of Fullstack Developers from Mission Ready, passionate
            about AI integration in modern web solutions. This project is a
            collaborative effort to create a third-party AI Interviewer chatbot
            leveraging the capabilities of three leading AI models: Google
            Gemini, OpenAI, and Vercel’s AI platform.
          </p>
          <br />

          <h3>Project Overview</h3>
          <p>
            The platform conducts mock interview sessions powered by generative
            AI, providing users with realistic practice, adaptive questioning,
            and automated performance feedback—all built with a focus on
            scalability, modularity, and user-centered design.
          </p>
          <br />

          <h3>Meet the Developers</h3>
          <ul>
            <li>
              <strong>Kerry</strong> –{" "}
              <a
                href="https://github.com/LuCinemax"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/LuCinemax
              </a>
            </li>
            <li>
              <strong>Takashi</strong> –{" "}
              <a
                href="https://github.com/takashim0101"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/takashim0101
              </a>
            </li>
            <li>
              <strong>Sonny</strong> –{" "}
              <a
                href="https://github.com/Realist2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Realist2022
              </a>
            </li>
            <li>
              <strong>Wisony</strong> –{" "}
              <a
                href="https://github.com/Wisonytq"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Wisonytq
              </a>
            </li>
          </ul>
          <br />

          <h3>Contact Us</h3>
          <p>
            For inquiries, feature requests, or collaboration opportunities,
            please reach out through any of our GitHub profiles above. We
            welcome feedback, contributions, and discussions.
          </p>
        </div>
      </main>

      {/* ======== Footer ======== */}
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
