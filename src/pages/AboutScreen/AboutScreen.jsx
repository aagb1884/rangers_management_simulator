import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";
import DescriptionScreen from "../DescriptionScreen/DescriptionScreen";

function AboutScreen() {
  return (
    <div className="gers-aboutScreen-container">
      <h1 className="gers-aboutScreen-title">A Glasgow Rangers Management Simulator</h1>
      <h2>An Overly Interactive Text-Adventure Game</h2>
      <DescriptionScreen />
        <div className="gers-aboutScreen-linksContainer">
        <Link className="gers-aboutScreen-link" to="/">
          {">"} Home
        </Link>
        <Link className="gers-aboutScreen-link" to="/credits">
          {">"} Credits
        </Link>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default AboutScreen;
