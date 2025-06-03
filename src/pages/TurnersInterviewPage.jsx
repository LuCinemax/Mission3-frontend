import React, { useState } from "react";
import NavBar from "../components/TurnersNavBar";
import TopHeader from "../components/TurnersTopHeader";
import Footer from "../components/TurnersFooter";
import styles from "./TurnersInterviewPage.module.css";
import logo from "../assets/Images/turnerscars_logo.png";
import finance from "../assets/Images/finance.jpg";
import userIcon from "../assets/Images/user.png";
import phoneIcon from "../assets/Images/phone.png";
import locationIcon from "../assets/Images/location.png";

function TurnersInterviewPage() {

  return (
    <div>
      <TopHeader />
      <div className={styles.logoBox}>
        <figure className={styles.logoImage}>
          <img src={logo} alt="turnerslogo" />
        </figure>
        <ul className={styles.infoSection}>
          <li>
            <img src={userIcon} alt="" /> LOGIN / REGISTER
          </li>
          <li>
            <img src={phoneIcon} alt="" /> 0800 887 637
          </li>
          <li>
            <img src={locationIcon} alt="" /> Find Us
          </li>
        </ul>
      </div>
      <NavBar />

      <main className={styles.background}>
        <section className={styles.pageBox}>
          <nav className={styles.breadcrumb}>
            <a href="https://www.turners.co.nz/">Home</a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/">Cars</a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/finance-insurance/">
              Finance & Insurance
            </a>
            <span>»</span>
            <a href="https://www.turners.co.nz/Cars/finance-insurance/car-insurance/">
              Car Insurance
            </a>
            <span>»</span>
            <a href="#">API</a>
          </nav>
          <figure>
            <img className={styles.financeImg} src={finance} alt="" />
          </figure>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TurnersInterviewPage;
