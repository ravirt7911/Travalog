import React, { useState, useEffect } from 'react';
import { GetPlaceDetails } from '../service/GlobalAPI';
import { PHOTO_REF_URL } from '../service/GlobalAPI';

function InformationSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState('');

    const GetPhoto = async () => {
        try {
            const data = {
                textQuery: trip?.userSelection?.destination?.label,
            };
            const result = await GetPlaceDetails(data);
            const photo_url = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[4].name);
            setPhotoUrl(photo_url);
        } catch (error) {
            console.error('Error fetching photo:', error);
            setPhotoUrl('/assets/traveling.jpg');
        }
    };

    useEffect(() => {
        if (trip) {
            GetPhoto();
        }
    }, [trip]);

    return (
        <div className="p-6 flex flex-col justify-center items-center">
            <img
                className="w-[80vw] h-[400px] object-cover rounded-xl max-[425px]:h-[300px]"
                src={photoUrl}
                alt="trip"
            />
            <div className="flex absolute top-[435px] left-[60vw] max-[425px]:top-[330px] max-[425px]:left-[50vw]">
                <div className="my-1 flex flex-col justify-center">
                    <h2 className="font-black text-[white] text-2xl">
                        {trip?.userSelection?.destination?.label}
                    </h2>
                    <h2 className="font-bold text-center text-[white] text-lg">
                        {trip?.userSelection?.days} days
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default InformationSection;
