import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileMenu.css";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-wrapper">
      <div 
        className="profile-icon" 
        onClick={() => setOpen(!open)}
      >
        👤
      </div>

      {open && (
        <div className="profile-dropdown">
          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
          <Link to="/help">Help</Link>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;