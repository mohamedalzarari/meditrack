import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/components.css";
import "./pages/pages.css";
import "./styles/global.css";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import PatientsPage from "./pages/PatientsPage";
import HelpPage from "./pages/HelpPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-doctors" element={<DoctorsPage />} />
        <Route path="/for-patients" element={<PatientsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;