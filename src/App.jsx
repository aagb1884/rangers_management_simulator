import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

