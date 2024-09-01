// src/pages/ItineraryPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import InformationSection from "../components/InformationSection";
import ItienaryPart from "../components/ItienaryPart";
import Footer from "../components/Footer";

const ItineraryPage = () => {
  const { tripId } = useParams();
  const [trip,setTrip]=useState([]);

  useEffect(()=>{
    tripId && GetTripData();
  },[tripId])

  const GetTripData=async()=>{
    const docRef=doc(db,"TripsData",tripId);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
      setTrip(docSnap.data());
    }
  }

  return (
    <div className="w-full">
      <InformationSection trip={trip}/>
      <ItienaryPart trip={trip}/>
      <Footer trip={trip} />
    </div>
  );
};

export default ItineraryPage;
