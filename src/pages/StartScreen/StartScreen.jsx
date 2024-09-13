import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./startScreen.css";

function StartScreen() {
  return (
    <div className="startScreen-container">
      
      <h1 className="startScreen-title">You are the Rangers Manager</h1><div className="startScreen-cover">
        <div className="startScreen-image"></div>
        <div className="startScreen-image"></div>
        <div className="startScreen-image"></div>
      </div>
      <h2 className="startScreen-subtitle">A Scottish football simulator.</h2>
      <div className="startScreen-menu">
        <Link className="startScreen-btn" to="/game">
          Start
        </Link>
        <Link className="startScreen-btn" to="/about">
          About
        </Link>
        <Link className="startScreen-btn" to="/credits">
          Credits
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
