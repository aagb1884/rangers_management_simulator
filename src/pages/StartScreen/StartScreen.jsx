import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modals/Modal";
import "./startScreen.css";

function StartScreen() {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className="gers-startScreen-container">
      
      <h1 className="gers-startScreen-title">You are the Rangers Manager</h1><div className="gers-startScreen-cover">
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
      </div>
      <h2 className="gers-startScreen-subtitle">A Scottish football simulator.</h2>
      <div className="gers-startScreen-menu">
    
        {modalOpen && (
          <Modal />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
