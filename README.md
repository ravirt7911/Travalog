#  Travalog
**IMPORTANT NOTE : I've intentionally not mentioned the project description/objective to avoid any risk of plagiarism. I have tried to only include the important pieces of information that speak about the project.**

# Link to the working app
https://travalog.vercel.app/ 

# User flow & Architectural Flow
![Travalog_flow](https://github.com/user-attachments/assets/555e6d55-81b2-4b63-b8ac-f0e5936a8f6b)

# Logic and Approach to Solving the Problem

- **Logic:** Itinerary to be created on the basis of user preferences like destination, duration, budget, and group size. 

**The flow of logic involves:**

- **User Authentication:** Users log in via Google SSO, ensuring secure access and personalized experiences.

- **Input Gathering:** Users input their travel preferences. The place input is assisted by auto generation of the place using Google Places API  for accuracy and ease.

- **Data Processing:** The preferences are passed to the Google Gemini API, which processes the data and generates an itinerary. The API response is stored in the Firebase database.

- **Itinerary Generation:** The application retrieves the itinerary data, including images and location details from the Google Maps Places API, to display a detailed and visually appealing itinerary.

# Additional Features & Effectiveness

- Users can revisit their searched places.
- Users can share the generated itinerary on social media platforms like WhatsApp and X (Twitter).
- The webapp is responsive and can be operated from mobile as well. Thus making it both mobile & desktop friendly.
- Users can click on the image cards generated on the itinerary to directly open the Google Maps and navigate from there.

The solution effectively meets the challenge by providing a seamless user experience from login to itinerary generation. It leverages AI for intelligent suggestions and APIs for real-time data, ensuring that the itinerary is both accurate and personalized. The ability to share the itinerary enhances user engagement, making the application more dynamic and interactive.

## Tech Stack 

| **Component**    | **Tech Stack**                                 |
|------------------|------------------------------------------------------|
| **Frontend**     | ReactJS, Tailwind CSS                               |
| **Backend APIs** | Google Gemini API,Google Maps Places API                          |
| **Database**     | Firebase                                            |
| **Deployment**   | Vercel                                              |

# Overall Architecture and Key Decisions
**Architecture**: The application follows a modular and scalable architecture:

**Frontend:**

- ReactJS: Chosen for its component-based architecture, making the UI highly modular, reusable, and easy to maintain.
- Tailwind CSS: Used for styling due to its utility-first approach, allowing for quick and responsive design development.

**Backend APIs:**

- Google Gemini API: Selected for its capability to generate personalized content, essential for creating detailed itineraries based on user inputs.
- Google Maps Places API: Used to enrich the itinerary with images and geographic data, providing users with a more immersive experience.

**Database:**

- Firebase: Chosen for its seamless integration with the frontend, real-time database capabilities, and built-in support for user authentication.

**Deployment:**

- Vercel: Selected for its ease of deployment, automatic scaling, and integration with GitHub, ensuring a smooth CI/CD pipeline.

# Key Decisions

- Google Places API assisted Input: For place suggestions improves user experience by reducing input errors and speeding up the process.
- Social Media Sharing: Adding a feature to share itineraries on WhatsApp and X (Twitter) enhances user engagement and promotes the application through word of mouth.

# Interesting Nuances

- AI Autotyping: Integrating AI to suggest places as users type ensures that the inputs are both relevant and accurate, reducing the likelihood of errors.
- Real-time Data: Using the Google Maps Places API ensures that the itinerary is populated with the most current information, including images and locations.

# Explanation of Choices and Thought Process
**Technology Choices:**

- ReactJS was chosen for its popularity, ease of use, and strong ecosystem, which allows for building a dynamic and responsive UI.
- Tailwind CSS was selected for its ability to create custom designs quickly, ensuring that the application looks modern and is responsive across devices.
- Google APIs were chosen for their reliability, vast datasets, and ability to provide personalized and location-specific information.
- Firebase was selected for its real-time database capabilities, which are crucial for storing and retrieving user-specific itineraries efficiently.
  
**Thought Process:** 
The approach was user-centric, focusing on creating a seamless and engaging experience from start to finish. The choice of technologies was driven by the need for a scalable, responsive, and interactive application. The backend was designed to handle the complexity of generating personalized itineraries while ensuring that the frontend remained responsive and user-friendly.

# Features/User Actions In Depth

# 1. User Interface (Frontend)

### User Action: Log In
- The user logs in using Google SSO.
- The authentication process is handled by Firebase Authentication.

### User Action: Input Preferences
- The user enters travel preferences: destination, number of days, budget range, and number of people.
- AI-assisted input (via Google Maps Places API) suggests destinations as the user types. (CHECK)

### User Action: Submit Preferences
- Upon submitting the preferences, the frontend sends the data to the backend via an API request.

### User Action: View Itinerary
- The itinerary page fetches data from Firebase Firestore, including itinerary details and images from the Google Maps Places API.
- The user views the detailed itinerary on the frontend.

# ADDITIONAL FEATURES

#### User Action: Check Search History (In a section called “My Trips”)
- The user can review previously searched places, which are fetched from Firebase Firestore.

#### User Action: Share Itinerary
- The user can share the itinerary via WhatsApp or X (Twitter), using links or embedded sharing features.

#### Mobile/Desktop Friendly Web Application
- The web app was made user-friendly for both Mobile & Desktop by making it responsive.
  
#### Images integrated with Google Maps
- Users can click on the image cards generated on the itinerary to directly open the Google Maps and navigate from there.

---

# 2. Backend Services

### Process: Generate Itinerary
- The backend receives the user preferences.
- The data is sent to the Google Gemini API (along with the prompt given to the API by me in the backend), which processes the information and generates a personalized travel itinerary.
- The response, including the itinerary details, is sent back to the frontend on a different page.

### Process: Retrieve Location Data
- The Google Maps Places API fetches images and geographic data for the places in the itinerary. Users can click on the images to open the place in Google Maps.
- This data is stored in Firebase Firestore for further use.

---
# 3. Database Layer (Firebase)

### Process: Store Data
- The user's preferences and the generated itinerary are stored in Firebase Firestore.
- Firebase Authentication manages user sessions and profiles.

---

# 4. Integration Layer

### API Communication: Frontend to Backend
- The frontend communicates with the backend to send user preferences and receive the itinerary.
- Data flow includes sending user data to the Google Gemini API and receiving itinerary data.

### Data Flow: Backend to Frontend
- The backend retrieves the itinerary and place details from the APIs.
- This data is stored in Firebase Firestore and is then displayed on the frontend.

---

# 5. Deployment and Hosting (Vercel)

### Frontend Hosting
- The ReactJS application is deployed on Vercel.
- Vercel handles the hosting and ensures smooth integration with Firebase and Google APIs.

### Backend Integration
- Vercel manages backend API integrations and ensures that the application can communicate with external services like Google Gemini API and Google Maps Places API.

---

# Screenshots

#### Home Page (Click on "Try Now" and login using your Google Account.)
![image](https://github.com/user-attachments/assets/293e6e17-f9ce-4a8f-8aa3-ad04e8292dd9)

#### User Inputs Preferences ( Enter your preferences & Click on make itinerary and wait till the Itinerary loads )
![image](https://github.com/user-attachments/assets/3aa966c9-5379-44fb-bd6d-785f02352c02)

#### Itinerary generated
![image](https://github.com/user-attachments/assets/1bd7074a-c726-425c-9e26-f7266e8225ae)
![image](https://github.com/user-attachments/assets/206d427e-17d7-4a21-84cf-7a3534fc1c43)
![image](https://github.com/user-attachments/assets/189b0024-63e1-4930-a774-cc777e387f4d)

---

# THE END












