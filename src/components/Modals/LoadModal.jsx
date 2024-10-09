import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import './modal.css'

function LoadModal ({setLoadModalOpen}) {
    const [idNumber, setIdNumber] = useState(0);
    const navigate = useNavigate();

    console.log(idNumber)
    return (
        <div
        className="modal-wrapper"
        onClick={() => navigate('/')}
      >
        <div
          className="modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="text">
            <p>Enter the ID number for the game stage you want here:</p>
            <input 
            placeholder="Enter ID number here"
            onChange={e => setIdNumber(e.target.value)}
            name="load-game"/>
            <NavLink
            to="/game"
            state={{ game_id: idNumber }}>
            <button className="load-game-btn">Load Game</button>
            </NavLink>
        </section>
        <button className="modalExit-btn" onClick={() => setLoadModalOpen(false)}>
            Click Here to Return to Game Page
        </button>
        
        </div>
        
        </div>
    )
};

export default LoadModal;