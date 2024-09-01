import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Button from "../components/Button";
import { AI_PROMPT } from "../service/AIprompt";
import { chatSession } from "../service/AIModal";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const FormPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    destination: null,
    days: "",
    budget: "",
    people: ""
  });
  const [loading, setLoading] = useState(false);

  const onGenerateItinerary = async () => {
    if (formData?.days > 8 || formData?.days < 1) {
      alert('Please enter a valid number of days');
      return;
    } if (!formData?.destination || !formData?.days || !formData?.budget || !formData?.people) {
      alert('Please fill all the fields');
      return;
    }

    const FINAL_PROMPT = AI_PROMPT
      .replace('{destination}', formData?.destination?.label)
      .replace('{days}', formData?.days)
      .replace('{people}', formData?.people)
      .replace('{budget}', formData?.budget)
      .replace('{days}', formData?.days);

    setLoading(true);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      await SaveAiTrip(result?.response.text());
    } catch (error) {
      console.error("Error generating itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    const docId = Date.now().toString();
    await setDoc(doc(db, "TripsData", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    navigate(`/itinerary/${docId}`);
  };

  return (
    <div className="flex items-center justify-center h-[80vh] w-full p-6 max-[425px]:flex-col max-[425px]:justify-center">
      <div className="flex flex-col w-[30vw] max-[425px]:w-[70vw]">
        <h2 className="text-4xl font-extrabold text-[#FF0505] mb-6 text-center">Plan Your Trip</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Where do you want to travel?</label>
            <GooglePlacesAutocomplete
              apiKey={process.env.REACT_APP_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: formData.destination,
                onChange: (v) => setFormData((prev) => ({ ...prev, destination: v })),
                styles: {
                  container: (provided) => ({
                    ...provided,
                    borderColor: '#D9D9D9',
                  }),
                  control: (provided) => ({
                    ...provided,
                    borderColor: '#D9D9D9',
                    borderRadius: '0.375rem',
                    boxShadow: "none",
                    '&:hover': {
                      borderColor: 'red',
                    },
                  }),
                  input: (provided) => ({
                    ...provided,
                    height: "35px",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    borderColor: '#d1d5db',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isFocused ? '#e5e7eb' : '#ffffff',
                    color: '#1f2937',
                  }),
                },
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">For how many days?</label>
            <input
              placeholder="Ex:7"
              type="number"
              value={formData.days}
              onChange={(e) => setFormData((prev) => ({ ...prev, days: e.target.value }))}
              required
              className="w-full h-[45px] px-3 py-2 border-[1px] border-[#D9D9D9] rounded-md shadow-sm focus:outline-none focus:invalid:border-[#FF0505]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">What's your budget range?</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
              required
              className="w-full h-[45px] px-3 py-2 border-[1px] border-[#D9D9D9] rounded-md shadow-sm focus:outline-none focus:border-[#FF0505]"
            >
              <option value="" disabled>Select your budget</option>
              <option value="Low">Budget Friendly</option>
              <option value="Medium">Mid-Range</option>
              <option value="High">Luxury</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Number of people</label>
            <select
              value={formData.people}
              onChange={(e) => setFormData((prev) => ({ ...prev, people: e.target.value }))}
              required
              className="w-full h-[45px] px-3 py-2 border-[1px] border-[#D9D9D9] rounded-md shadow-sm focus:outline-none focus:border-[#FF0505]"
            >
              <option value="" disabled>Select number of people</option>
              <option value="1">Just you</option>
              <option value="4-5">Family</option>
              <option value="2">Couple</option>
              <option value="6-10">Friends</option>
            </select>
          </div>
        </form>
      </div>
      <div className="ml-[150px] mt-[30px] max-[425px]:mr-[5px]">
        <Button
          bgColor="#FF0505"
          textColor="#FFFFFF"
          text={loading ? "Loading..." : "Make Itinerary"}
          handleClicked={onGenerateItinerary}
          height="45px"
          width="180px"
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default FormPage;
