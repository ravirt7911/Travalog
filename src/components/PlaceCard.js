import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { GetPlaceDetails } from '../service/GlobalAPI';
import { PHOTO_REF_URL } from '../service/GlobalAPI';


function PlaceCard({place}) {
    const [photoUrl, setPhotoUrl] = useState('');

    const GetPhoto = async () => {
        try {
            const data = {
                textQuery: place.name,
            };
            const result = await GetPlaceDetails(data);
            const photo_url = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[4].name);
            setPhotoUrl(photo_url);
        } catch (error) {
            console.error('Error fetching photo:', error);
            // You can also set a fallback image URL or keep the default one
            setPhotoUrl('/assets/traveling.jpg');
        }
    };

    useEffect(() => {
        place && GetPhoto();
    }, [place]);

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.name} target='_blank'>
        <div className='flex flex-col w-[300px] h-[400px] mx-[20px] rounded-md p-2 items-center shadow-xl hover:scale-110 max-[425px]:mb-[50px] max-[768px]:w-[200px] max-[768px]:mx-[10px] max-[768px]:h-auto'>
            <p className='font-bold text-sm text-[#ff00008d]'>{place.time}</p>
            <img
                className="w-[200px] h-[170px] my-[7px]"
                src={photoUrl ? photoUrl : '/assets/traveller.png'}
                alt="trip"
            />
            <h2 className='w-[200px] text-center font-bold'>{place.name}</h2>
            <p className='w-[250px] text-start max-[768px]:w-[180px]'>{place.details}</p>
        </div>
    </Link>
  )
}

export default PlaceCard;