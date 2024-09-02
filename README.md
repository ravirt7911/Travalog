#  Travalog
**IMPORTANT NOTE : I've intentionally not mentioned the project description/objective to avoid any risk of plagiarism. I have tried to only include the important pieces of information that speak about the project.**

# User flow & Architectural Flow
![Travalog_flow](https://github.com/user-attachments/assets/d316880d-e1b5-401e-8bd2-2bd278f82674)

# Logic and Approach to Solving the Problem
Logic: Itinerary to be created on the basis of user preferences like destination, duration, budget, and group size. 

**The flow of logic involves:**

**User Authentication:** Users log in via Google SSO, ensuring secure access and personalized experiences.
**Input Gathering:** Users input their travel preferences. The place input is assisted by AI for accuracy and ease.
**Data Processing:** The preferences are passed to the Google Gemini API, which processes the data and generates an itinerary. The API response is stored in the Firebase database.
**Itinerary Generation:** The application retrieves the itinerary data, including images and location details from the Google Maps Places API, to display a detailed and visually appealing itinerary.
**Additional Features:** Users can revisit their searched places and share the generated itinerary on social media platforms like WhatsApp and X (Twitter).
**Effectiveness:** The solution effectively meets the challenge by providing a seamless user experience from login to itinerary generation. It leverages AI for intelligent suggestions and APIs for real-time data, ensuring that the itinerary is both accurate and personalized. The ability to share the itinerary enhances user engagement, making the application more dynamic and interactive.

## Web App Tech Stack 

| **Component**    | **Tech Stack**                                 |
|------------------|------------------------------------------------------|
| **Frontend**     | ReactJS, Tailwind CSS                               |
| **Backend APIs** | Google Gemini API,Google Maps Places API                          |
| **Database**     | Firebase                                            |
| **Deployment**   | Vercel                                              |


