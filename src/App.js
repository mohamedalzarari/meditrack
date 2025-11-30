import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/components.css";
import "./pages/pages.css";
import "./styles/global.css";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import PatientsPage from "./pages/PatientsPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/DashboardPage";
import DashboardPage from "./pages/DashboardPage";
function App() {
  return (
    <div className="app-shell">
    <Router>
      <Header />
<div className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-doctors" element={<DoctorsPage />} />
        <Route path="/for-patients" element={<PatientsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
</div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;