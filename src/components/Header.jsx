import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="left-section">
        <Link to="/" className="logo">
        <img src ="/Meditrack.png" alt="Meditrack Logo" className="logo-img"/>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/for-doctors">For doctors</Link></li>
            <li><Link to="/for-patients">For Patients</Link></li>
            <li><Link to="/help">Help</Link></li>
            
            
          </ul>
        </nav>
        </div>
        <ProfileMenu/>
      </div>
    </header>
  );
}

export default Header;