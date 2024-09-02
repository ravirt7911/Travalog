import React from 'react'
import PlaceCard from './PlaceCard';

function ItienaryPart({trip}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='font-black text-[50px] max-[425px]:text-[35px]'>Your Travel Itinerary</h2>
        <div className='flex flex-col justify-center items-center'>
            {trip.tripData?.itinerary.map((item,index)=>(
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex my-7 '>
                        <h2 className='font-bold mx-2 text-[30px] max-[425px]:text-[20px]'>Day {item.day}</h2>
                        <h2 className='font-bold text-[30px] max-[425px]:text-[20px]'> {item.title}</h2>
                    </div>
                    <div className='flex justify-center itmes-center max-[425px]:flex-col'>
                        {item.places.map((place,index)=>(
                            <PlaceCard place={place}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ItienaryPart;
