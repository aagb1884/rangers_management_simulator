import { useNavigate } from "react-router-dom";
import './modal.css'
function Modal () {

    const navigate = useNavigate();
console.log('modal');
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
            <h1>You are being redirected.</h1> 
            <p>I am now hosting this game - and planning on building others - at</p> 
            <p>
                <a href="https://scottish-football-simulators.co.uk/">www.scottish-football-simulators.co.uk</a>
            </p>
            <p>This site is no longer being updated.</p>
        </section>
        </div>
        
        </div>
    )
};

export default Modal;