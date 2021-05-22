import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          
          Created by{" "}
          <a
            href="https://github.com/bruiz19/CPSC349_COVID19_Web_Project.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Brandon Ruiz, Lisa Hong, Tasnima Chowdhury, Sirena Salas
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
      
          
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;