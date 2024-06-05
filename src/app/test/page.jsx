"use client";

import React from "react";
import styles from "./test.module.css";
import Image from "next/image";
import Header from "../components/header/Header";
import TypingText from "../components/typingText/TypingText";

const test = () => {
  return (
    <div className={styles.test}>
      <Header />
      <TypingText />
      {/* <div className={styles.aboutComp}>
        <h2>About Us</h2>
      </div> */}
    </div>
  );
};

export default test;
