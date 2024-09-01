import axios from "axios";
// Base URL for the Google Places API
const BASE_URL="https://places.googleapis.com/v1/places:searchText"

// Configuration object for the API request, including headers with API key and desired fields
const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': process.env.REACT_APP_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,places.id'
    }
}
// Function to get place details by sending a POST request with the provided data
export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);
// URL template for fetching a photo using a reference name from the Places API
export const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + process.env.REACT_APP_GOOGLE_PLACE_API_KEY;
