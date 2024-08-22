import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages";
import Gallery from "./components/Pages/gallery";
import Contact from "./components/Pages/contactUs";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const App: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LevIicqAAAAAK-T7Qn59xzkasqdEU_zT09Qh3_Z">
      <div className="site">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactUs" element={<Contact />} />
          </Routes>
        </Router>
        <footer className="footer">
          <p id="footerInfo">
            Copyright &copy; Sahara Banquet Hall - All Rights Reserved
          </p>
        </footer>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default App;
