import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects_detail";
import ComingSoonPage from "./pages/Coomingsoon";

function App() {
  const launchDate = new Date("April 10, 2026 10:10:10").getTime();
  const now = new Date().getTime();

  const isLaunched = now >= launchDate;

  return (
    <Router>
      <Routes>
        {/* Show ComingSoonPage if launch date not reached, otherwise show Home */}
        <Route path="/" element={isLaunched ? <Home /> : <ComingSoonPage />} />
        <Route path="/projects/:p_id" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;