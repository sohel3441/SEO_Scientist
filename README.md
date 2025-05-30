# SEO Insights Analyzer

SEO Insights Analyzer is a full-stack web application that allows users to analyze SEO performance of any website using Google's PageSpeed Insights API. It provides users with an SEO score and actionable recommendations to improve their website performance.

## 🔧 Tech Stack

### 🚀 Frontend
- React.js (with functional components and hooks)
- Axios for API requests
- Responsive design using CSS Flexbox and Media Queries

### 🛠 Backend
- Node.js
- Express.js
- Axios (for external API calls)
- MongoDB (using Mongoose ODM)
- CORS and dotenv for environment management

## 🌐 Live Demo
Try the app live: [https://seo-scientist-1.onrender.com](https://seo-scientist-1.onrender.com)

---

## 📦 Features

### ✅ Core Features
- Input a website URL to analyze
- SEO score fetched via PageSpeed Insights API
- Actionable improvement suggestions displayed
- API key (optional) support for higher rate limits
- Result history stored in MongoDB for future analysis

### 📱 Responsive UI
- Mobile-first design
- Fully responsive across phones, tablets, and desktops

---

## 📸 Screenshots

### 1. Dashboard with SEO Metrics
![Dashboard](./Screenshots/Dashboard-Metrics.png)

### 2. Input Form and Result Display
![Input Form](./Screenshots/Input-View.png)

### 3. Mobile View
![Mobile](./Screenshots/Mobile-View.png)

---

## 📂 Project Structure

seo-insights-analyzer/

├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── App.js
│ └── ...


├── server/ # Node.js + Express backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── server.js
│ └── ...
├── .env
├── package.json (for root scripts)
└── README.md

2. Setup the Backend
cd server
npm install


Create a .env file inside /server and add:

PORT=5000
PSI_API_KEY=AIzaSyDDSAxUSfKuHZVKXCKiXsahVH838IuAJN8
MONGO_URI=mongodb+srv://shaikhsohel113441:24qQUThHIsFnubd2@cluster0.dk59omk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0   

Start the backend server:
npm start


3. Setup the Frontend
cd ../client
npm install
npm start

The app should now be running at http://localhost:5173 and connected to the backend at http://localhost:5000.

📤 API Endpoints
POST /api/analyze
Analyze a website's SEO.

Body:
{
  "url": "https://example.com",
}

Response:
{
  "score": 92,
  "suggestions": [...]
}
