"use client";

import React from "react";
import styles from "./test.module.css";
import Image from "next/image";
import Header from "../components/header/Header";

const test = () => {
  return (
    <div>
      <Header />
      <div className={styles.aboutComp}>
        <h2>About Us</h2>
      </div>
    </div>
  );
};

export default test;
