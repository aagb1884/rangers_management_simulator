import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./mainComponent.css";



function MainComponent({
  text,
  date,
  btnLeft,
  btnRight,
  setOption,
  idLeft,
  idRight,
  image,
  alt,
  }) {
    const [menuToggle, setMenuToggle] = useState(false);

      const handleMenuToggle = () => {
      setMenuToggle(!menuToggle);
    };

  return (
    <>
    {menuToggle && <Header />}
    <div className="gers-mainComponent-container">
      
      <h1>You are the Rangers Manager</h1>
      
        <div className="gers-mainComponent-imageAndText">
        <label className="gers-mainComponent-menuBtn" htmlFor="menuToggle">
      <input
        type="checkbox"
        id="menuToggle"
        className="menuToggle"
        checked={menuToggle}
        onChange={handleMenuToggle}
      />
    </label>
        <img className="gers-mainComponent-image" src={image} alt={alt} />
        <p className="gers-mainComponent-text">
          <b>{date}</b>
          <br />
          <br />
          {text}</p>
        </div>
        <div className="gers-mainComponent-options">

          {idLeft === null && idRight === null ? <></> :
          <div className="gers-mainComponent-buttons">

          <button
            onClick={() => setOption(idLeft)}
            className="gers-mainComponent-leftBtn"
          >
            {btnLeft}
          </button>
          <button
            onClick={() => setOption(idRight)}
            className="gers-mainComponent-rightBtn"
          >
            {btnRight}
          </button>
        </div>
          }
      </div>
      <Footer />
    </div>
   </>
  );
}

export default MainComponent;
