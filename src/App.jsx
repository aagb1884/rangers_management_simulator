import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import GameScreen from "./pages/GameScreen/GameScreen";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import CreditsScreen from "./pages/CreditsScreen/CreditsScreen";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/credits" element={<CreditsScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;