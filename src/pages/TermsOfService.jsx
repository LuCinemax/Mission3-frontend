import Header from '../components/Header'
import Separator from '../components/Separator'
import Footer from '../components/Footer'
import styles from './TermsOfService.module.css'
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className={styles.pageContainer}>
        <Header></Header>
        <figure className={styles.bannerImage}>
          <div className={styles.bannerTextContainer}>
            <h1>
              TERMS OF SERVICE
            </h1>
            <p>Learn More</p>

            <div className={styles.mainButton}>
              <Link to="/">HOME</Link>
            </div>
          </div>
          
        </figure>
        <figure className={styles.separatorContainer}>
            <Separator></Separator>
        </figure>
        <main className={styles.infoContainer}>
          <div className={styles.introBox}>
  <h1>Terms of Service</h1>
  <hr /><br />

  <h3>1. Acceptance of Terms</h3>
  <p>
    By accessing or using the Mission AI platform ("the Service"), you agree
    to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms,
    you must not use the Service.
  </p><br />

  <h3>2. Description of Service</h3>
  <p>
    Mission AI provides automated interview solutions powered by AI technologies
    including Google Gemini, OpenAI, and MetaAI. The Service includes AI-led interview sessions, performance
    analytics, and candidate reports.
  </p><br />

  <h3>3. User Responsibilities</h3>
  <ul>
    <li>You must be at least 18 years old to use this Service.</li>
    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
    <li>You agree not to misuse the Service or attempt to gain unauthorized access to any part of the system.</li>
  </ul><br />

  <h3>4. Data Privacy and Consent</h3>
  <ul>
    <li>We collect only necessary data required to perform and analyze AI interview sessions.</li>
    <li>By using this Service, you consent to data collection, processing, and anonymization as outlined in our Privacy Policy.</li>
    <li>No biometric data is collected without explicit user consent.</li>
  </ul><br />

  <h3>5. Intellectual Property</h3>
  <ul>
    <li>All content, design, algorithms, and materials within Mission AI are owned by or licensed to Mission AI.</li>
    <li>You may not reproduce, modify, or distribute any content without prior written permission.</li>
  </ul><br />

  <h3>6. Limitations of Use</h3>
  <ul>
    <li>You agree not to use the Service to violate any laws or regulations.</li>
    <li>You must not use interview data in discriminatory or unlawful hiring practices.</li>
    <li>You are prohibited from copying, scraping, or reverse engineering any part of the platform.</li>
  </ul><br />

  <h3>7. Termination</h3>
  <p>
    We reserve the right to suspend or terminate your access to the Service at our sole discretion, with or without notice,
    if we believe you have violated these Terms.
  </p><br />

  <h3>8. Disclaimers</h3>
  <p>
    The Service is provided "as is" without warranties of any kind. We do not guarantee employment outcomes or the accuracy
    of AI evaluations.
  </p><br />

  <h3>9. Limitation of Liability</h3>
  <p>
    To the fullest extent permitted by law, Mission AI and its affiliates shall not be liable for any indirect, incidental,
    or consequential damages arising out of or in connection with your use of the Service.
  </p><br />

  <h3>10. Modifications to Terms</h3>
  <p>
    We may revise these Terms at any time. Continued use of the Service after changes implies acceptance of the updated Terms.
  </p><br />

  <h3>11. Governing Law</h3>
  <p>
    These Terms are governed by the laws of [Insert Jurisdiction].
  </p><br />

  <h3>12. Contact Information</h3>
  <p>
    For questions about these Terms, please contact: [Insert Contact Email or URL]
  </p>
</div>

          
        </main>
        <Footer></Footer>
    </div>
  )
}

export default TermsOfService