import styles from './Header.module.css'
import Logo from '../assets/images/Logo.gif'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className={styles.navigationBar}>
            
        <section className={styles.navigationLeft}>
            <figure className={styles.logoContainer}>
                <img className={styles.logo} src={Logo} alt="" />
            </figure>
            <div className={styles.companyName}>
                <h1><Link to="/">MISSION AI</Link></h1>
            </div>
            <div className={styles.aiListContainer}>
                <ul className={styles.aiList}>
                    <li><Link to="/GeminiInterviewerBot">Gemini</Link></li>
                    <li><Link to="/OpenAIInterviewerBot">OpenAI</Link></li>
                    <li><Link to="/VercelInterviewerBot">Vercel</Link></li>
                </ul>
            </div>
        </section>
        <section>
            <ul className={styles.navListContainer}>
                <li><Link to="/AboutPage">About</Link></li>
                <li><Link to="/ContactPage">Contact</Link></li>
                <li><Link to="/LoginPage">Login</Link></li>
            </ul>
        </section>
        </div>
    </header>
  )
}

export default Header