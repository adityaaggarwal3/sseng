import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S&S Engineering",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar/>
          {children}
          <Footer/>
        </div>
        </body>
    </html>
  );
}
