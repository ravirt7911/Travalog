import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../service/firebase";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    window.location.href = "/";
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-[25px] py-[15px] shadow-md">
      <div className="flex items-center flex-grow">
        <img
          src="/assets/TravaLogo.png"
          alt="logo"
          className="h-[37px] w-[37px] mr-1 mt-1"
        />
        <p className="text-[red] font-bold text-[30px]">Travalog</p>
      </div>

      <div className="md:hidden flex items-center mr-3">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? <IoClose size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center w-full md:w-auto absolute md:relative top-[80px] md:top-0 left-0 md:left-auto bg-white md:bg-transparent px-[25px] md:px-0 z-10`}
      >
        {user && (
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto mr-3">
            <Link to="/form" className="mt-3 md:mt-0 md:mr-3">
              <Button
                bgColor="#000000"
                textColor="#FFFFFF"
                text="Create Trip"
                width="100%"
              />
            </Link>
            <Link to="/mytrips" className="mt-3 md:mt-0">
              <Button
                bgColor="#000000"
                textColor="#FFFFFF"
                text="My Trips"
                width="100%"
              />
            </Link>
          </div>
        )}
      </div>

      {user && (
        <div className="flex items-center ml-auto">
          <span className="font-bold hidden md:block mr-3">Hi, {user.displayName}</span>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-[40px] h-[40px] cursor-pointer rounded-full mr-3"
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
              className="ml-3"
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
