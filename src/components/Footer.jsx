import styles from './Footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className={styles.footerContainer}>
        <section className={styles.footerListContainer}>
            <ul className={styles.footerList}>
                <li>&copy;LuCinema </li>
                <li><Link to="/TurnersInterviewPage">Turners</Link></li>
                <li>Contact</li>
                <li><Link to="/TermsOfService">Terms of Service</Link></li>
            </ul>
        </section>

    </main>
  )
}

export default Footer