"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./typing.module.css";

const TypingText = () => {
  return (
    <div>
      <div className={styles.headerText}>
        <h1 style={{ fontWeight: "900", fontSize: "80px", color: "#ea1d25" }}>
          S<span style={{ fontSize: "60px", color: "#ef831b" }}>&</span>S
          Engineering Solutions <br />
          <span
            style={{ color: "white", fontWeight: "bold", fontSize: "35px" }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Boiler Plants",
                "Steam Plants",
                "Construction",
                "Empowering Engineering and Technology",
              ]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TypingText;
