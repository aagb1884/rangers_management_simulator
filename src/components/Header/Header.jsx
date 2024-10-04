import { Link } from "react-router-dom";
import "./header.css";


function Header() {

  return (
    <div className="gers-header-container">
      <Link className="gers-header-link" to="/">
        Start Screen
      </Link>
            
      <Link className="gers-header-link" to="/about">
        About
      </Link>

      <Link className="gers-header-link" to="/credits">
        Credits
      </Link>
  
    </div>
  );
}

export default Header;
