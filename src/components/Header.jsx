import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Meditrack</div>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/for-doctors">For doctors</Link></li>
            <li><Link to="/for-patients">For Patients</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Sign up</Link></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;