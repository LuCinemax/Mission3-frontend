import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from '../assets/images/FacebookIcon.png'
import GoogleIcon from '../assets/images/GoogleIcon.png'
import InstagramIcon from '../assets/images/InstagramIcon.png'

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <main className={styles.infoContainer}>
        
            <section className={styles.leftBox}>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <p>or sign in with</p>
            <div className={styles.socials}>
                <button><img src={FacebookIcon} alt="" /></button>
                <button><img src={GoogleIcon} alt="" /></button>
                <button><img src={InstagramIcon} alt="" /></button>
            </div>
            </section>
            <section className={styles.rightBox}>
            <h2>Welcome back!</h2>
            <p>
                We are so happy to have you here. It's great to see you again. We
                hope you had a safe and enjoyable time away.
            </p>
            <Link to="/signup" className={styles.signupButton}>
                No account yet? Signup.
            </Link>
            </section>
           
      </main>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
