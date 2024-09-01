import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../service/firebase";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <nav className="flex justify-between px-[25px] py-[15px] shadow-md">
      <div className="flex">
        <img src="/assets/TravaLogo.png" alt="logo" className="h-[37px] w-[37px] mr-1 mt-1" />
        <p className="text-[red] font-bold text-[30px]">Travalog</p>
      </div>
      
      <div className="flex items-center">
        {user && (
          <>
            <Link to="/form" className="mr-3">
              <Button bgColor="#000000" textColor="#FFFFFF" text="Create Trip"/>
            </Link>
            <Link to="/mytrips" className="mr-3">
              <Button bgColor="#000000" textColor="#FFFFFF" text="My Trips"/>
            </Link>
            <span className="font-bold mr-5">Hi, {user.displayName}</span>
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-[40px] h-[40px] mr-5 cursor-pointer rounded-full"
              onClick={toggleLogout}
            />
            {showLogout && (
              <Button
                height="30px"
                width="100px"
                bgColor="#FF0505"
                textColor="#FFFFFF"
                handleClicked={handleLogout}
                text="Logout"
              />
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
