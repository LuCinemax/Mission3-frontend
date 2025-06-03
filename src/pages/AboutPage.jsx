import Header from "../components/Header";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* ======== Header ======== */}
      <Header></Header>

      {/* ======== Banner Image ======== */}
      <figure className={styles.bannerImage}>
        {/* Banner Text */}
        <div className={styles.bannerTextContainer}>
          <h1>About Us</h1>
          <p>Learn More</p>
        </div>
      </figure>

      {/* Separator Image */}
      <figure className={styles.separatorContainer}>
        <Separator></Separator>
      </figure>

      {/* ======== About us Description ======== */}
      <main className={styles.infoContainer}>
        <div className={styles.introBox}>
          <h1>About Mission AI</h1>
          <hr />
          <br />

          <h3>Who We Are</h3>
          <p>
            Mission AI is a forward-thinking technology initiative dedicated to
            reshaping the recruitment and interview experience using the power
            of advanced artificial intelligence. Founded by a team of developers
            and educators, our mission is to bridge the gap between candidates
            and employers by offering a fair, scalable, and intelligent
            interview process.
          </p>
          <br />

          <h3>What We Do</h3>
          <p>
            We provide an AI-driven platform that conducts mock interviews
            tailored to specific job titles. Using models like Google Gemini,
            OpenAI, and MetaAI, our system simulates professional interview
            scenarios, evaluates user responses, and generates performance
            feedback instantly. This empowers candidates to prepare more
            effectively and helps organizations gauge talent objectively without
            bias.
          </p>
          <br />

          <h3>Our Vision</h3>
          <p>
            Our vision is to democratize access to high-quality interview
            preparation and ensure every candidate, regardless of background or
            location, has the opportunity to practice and improve their skills
            in a realistic and supportive environment. We aim to make AI
            interviewing an accessible and valuable tool in both education and
            professional development.
          </p>
          <br />

          <h3>How It Works</h3>
          <p>
            Users begin a session by selecting a role or job title. The AI
            interviewer initiates a structured conversation, starting with
            general prompts and then adapting follow-up questions based on the
            user's replies. After the session, the system delivers an analysis
            of the user's performance, highlighting strengths, areas for
            improvement, and personalized recommendations.
          </p>
          <br />

          <h3>Why Mission AI</h3>
          <ul>
            <li>
              AI-led interviews provide consistent and unbiased questioning.
            </li>
            <li>
              Real-time feedback helps users build confidence and competence.
            </li>
            <li>
              Data-driven analysis supports measurable progress over time.
            </li>
            <li>
              The platform scales effortlessly for institutions, training
              providers, and enterprises.
            </li>
          </ul>
          <br />

          <h3>Get Involved</h3>
          <p>
            Whether you're a student, job seeker, institution, or
            enterprise—Mission AI offers tools to improve interview readiness
            and evaluate soft skills intelligently. Join us as we redefine how
            the world prepares for and evaluates interviews in the AI age.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
