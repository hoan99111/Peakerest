import { useState } from "react";
import "./UserBotton.css";
import { Image } from "../image/image";

function UserBotton() {
  const currentUser = true;
  const [open, setOpen] = useState(false);
  return currentUser ? (
    <div className="userBotton">
      <Image path="/general/noAvatar.png" alt="" />
      <Image
        path="/general/arrow.svg"
        onClick={() => setOpen(!open)}
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
}

export default UserBotton;
