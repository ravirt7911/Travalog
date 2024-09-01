import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../service/firebase";
import Button from "../components/Button";

const LandingPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the form page if logged in
    if (user) {
      navigate("/form");
    } 
    // Navigate back to the landing page if logged out
    else if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleTryNowClick = () => {
    if (!user) {
      // Trigger Google login if the user is not logged in
      signInWithGoogle();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[30px]">
      <h1 className="text-[50px] font-extrabold mb-4">Your Ultimate Travel Itinerary Planner</h1>
      <p className="font-normal text-[30px] w-[500px] text-center mb-4">Build and optimize your travel itineraries with our AI trip planner.</p>
      <Button bgColor="#FF0505" textColor="#FFFFFF" handleClicked={handleTryNowClick} text={loading ? "Loading..." : "Try Now"}/>
      <div className="h-[400px] w-[400px]">
        <img src="./assets/traveller.png" alt="logo" />
      </div>
    </div>
  );
};

export default LandingPage;
