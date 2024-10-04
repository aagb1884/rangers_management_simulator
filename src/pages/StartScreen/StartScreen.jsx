import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./startScreen.css";

function StartScreen() {
  return (
    <div className="gers-startScreen-container">
      
      <h1 className="gers-startScreen-title">You are the Rangers Manager</h1><div className="gers-startScreen-cover">
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
      </div>
      <h2 className="gers-startScreen-subtitle">A Scottish football simulator.</h2>
      <div className="gers-startScreen-menu">
        <Link className="gers-startScreen-btn" to="/game">
          Start
        </Link>
        <Link className="gers-startScreen-btn" to="/about">
          About
        </Link>
        <Link className="gers-startScreen-btn" to="/credits">
          Credits
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
