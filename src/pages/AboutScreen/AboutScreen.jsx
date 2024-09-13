import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";
import DescriptionScreen from "../DescriptionScreen/DescriptionScreen";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">A Glasgow Rangers Management Simulator</h1>
      <h2>An Overly Interactive Text-Adventure Game</h2>
      <DescriptionScreen />
        <div className="aboutScreen-linksContainer">
        <Link className="aboutScreen-link" to="/">
          {">"} Home
        </Link>
        <Link className="aboutScreen-link" to="/credits">
          {">"} Credits
        </Link>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default AboutScreen;
