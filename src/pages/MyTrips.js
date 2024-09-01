import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../service/firebase";
import { GetPlaceDetails } from "../service/GlobalAPI";
import { PHOTO_REF_URL } from "../service/GlobalAPI";
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";



function MyTrips() {
    const [trips, setTrips] = useState([]);
    const [photos, setPhotos] = useState({});
    const [user] = useAuthState(auth);

    const GetMyTrips = async () => {
        if (user) {
            const userEmail = user.email;
            const tripsCollection = collection(db, "TripsData");
            const tripsSnapshot = await getDocs(tripsCollection);
            const tripsList = tripsSnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(trip => trip.userEmail === userEmail);
            setTrips(tripsList);
        }
    };

    const GetPhoto = async (trip) => {
        try {
            if (!trip || !trip.userSelection?.destination?.label) return;

            const data = {
                textQuery: trip.userSelection.destination.label,
            };
            const result = await GetPlaceDetails(data);

            if (result?.data?.places?.[0]?.photos?.[4]?.name) {
                const photo_url = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[4].name);
                setPhotos(prevPhotos => ({ ...prevPhotos, [trip.id]: photo_url }));
            } else {
                console.error(`Photo not found for ${trip.userSelection.destination.label}`);
            }
        } catch (error) {
            console.error(`Error fetching photo for trip ${trip.id}:`, error);
        }
    };

    useEffect(() => {
        trips && GetMyTrips();
    }, [trips, user]);

    useEffect(() => {
        trips && trips.forEach(trip => {
            GetPhoto(trip);
        });
    }, [trips]);

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='flex justify-start w-[60vw]'>
                <h1 className='font-bold text-[40px] mb-8'>My Trips</h1>
            </div>
            <div className='flex w-[70vw] flex-wrap justify-center'>
                {trips && trips.map((trip) => (
                    <Link key={trip.id} to={process.env.REACT_APP_BASE_URL+`/itinerary/${trip.id}`}>
                        <div className='w-[20vw] mb-10 hover:scale-105 max-[425px]:w-[50vw]'>
                            <img src={photos[trip.id] ? photos[trip.id] : '/assets/traveling.jpg'} alt="trip" className='h-[250px] w-[220px] rounded-md' />
                            <h1 className='w-[12vw] font-bold'>{trip.userSelection.destination?.label}</h1>
                            <p>{trip.userSelection.days} days, {trip.userSelection.budget} budget</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MyTrips;
