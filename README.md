![image](https://github.com/user-attachments/assets/f92217f3-681d-40c1-abd8-76717155e882)


**Overview**
voice-vigor is a fitness tracking website designed to help users log workouts, track progress, and manage their fitness goals. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, the website offers an interactive dashboard for users to monitor their exercise routines.

**Features**
 User Authentication – Secure login using JWT authentication.
 Workout Logging – Add, update, and delete workout entries.
 Progress Tracking – View statistics with interactive charts.
 Exercise Categories – Track different types of exercises (e.g., cardio, strength).
 Responsive UI – Mobile-friendly and optimized for all devices.
 Dark/Light Mode – Switch between themes for better user experience.

**Tech Stack**
Frontend
React.js – UI development.
React Router – For navigation.
Tailwind CSS / Material-UI – For styling.
Recharts.js – For displaying fitness progress.
Backend
Node.js & Express.js – API server.
MongoDB & Mongoose – Database for storing workout logs.
JWT Authentication – Secure user authentication.
CORS & dotenv – Secure API access.

Installation & Setup
**Clone the Repository**

git clone https://github.com/yourusername/fit-tracker.git
cd fit-tracker

**Install Dependencies**

Backend (Server)
cd server
npm install

Frontend (React App)
cd client
npm install

**Set Up Environment Variables**
Create a .env file in the server folder and add:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

**Start the Website**

Run the Backend
cd server
npm start

Run the Frontend
cd client
npm start


Your website should now be accessible at http://localhost:3000.

**Usage**
Sign Up or Log In – Create an account or sign in.
Add Workouts – Log new exercises with details like duration, type, and intensity.
Track Progress – View workout history and progress charts.
Manage Data – Edit or delete workouts anytime.

**Future Enhancements**
 Add Google OAuth authentication.
 Include calorie tracking feature.
 Enable social sharing of fitness milestones.
 Implement push notifications for workout reminders.
 Add AI-powered recommendations for workouts.
 Add Voice-Assistance to track the status

