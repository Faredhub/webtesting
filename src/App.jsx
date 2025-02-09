import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BackgroundChanger from "./components/BackgroundChanger";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BackgroundChanger />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
