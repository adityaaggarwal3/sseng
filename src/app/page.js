import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import TypingText from "./components/typingText/TypingText";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <TypingText/> */}
    </div>
  );
}
