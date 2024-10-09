import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import LoadModal from "../../components/Modals/LoadModal";
import "./startScreen.css";

function StartScreen() {
  const [loadModalOpen, setLoadModalOpen] = useState(false)
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
        <button className="gers-startScreen-btn" onClick={() => setLoadModalOpen(true)}>
          Load Game
        </button>
        {loadModalOpen && (
          <LoadModal
          setLoadModalOpen={setLoadModalOpen} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
