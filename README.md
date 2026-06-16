# 📈 Zerodha Clone – Full Stack Trading Platform (Kite Inspired)
A full-stack trading platform inspired by **Zerodha’s Kite application**, built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
The project simulates a real-world trading ecosystem with authentication, dashboards, market visualization, and dynamic UI behavior based on user authentication state.
---
## 🚀 Live Status
⚠️ Project is currently **not deployed** and runs locally on multiple services.
---
## 📸 Project Preview

- Landing Page with dynamic logged-in / logged-out UI
- Kite-style trading dashboard
- Customer-specific dashboard view
- Interactive stock charts using Chart.js

---

## 🧠 Key Features

### 🔐 Authentication System
- JWT-based authentication (Login & Signup)
- Secure password handling (backend logic)
- Protected routes for authenticated users

---

### 📊 Trading Dashboard (Kite Inspired)
- Personalized user dashboard
- Portfolio / holdings view
- Market-style layout similar to Zerodha Kite
- Authentication-based access to user data

---

### 📈 Stock Market Visualization
- Interactive charts using **Chart.js**

---

### 🌐 Dynamic UI System
- Different UI for logged-in vs logged-out users
- Dynamic landing page content
- Conditional rendering across products and dashboard pages

---

### 🎨 UI/UX Design
- Fully responsive design of landing page(mobile + desktop)
- Clean FinTech-inspired interface
- Bootstrap-based styling with custom enhancements
- Smooth navigation across pages

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Chart.js
- Bootstrap 5

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 🏗️ System Architecture
Landing Page (3001)

        ↓
User Login / Signup (JWT Authentication)

        ↓
Backend API (3002)

        ↓
Dashboard Access (3000)

        ↓
Portfolio & Charts (Chart.js)



- REST API communication between services
- JWT-based authentication flow
- Modular multi-app architecture

---
## ⚙️ How to Run the Project Locally

This project runs using **3 separate servers**, so you must open **3 terminals in VS Code**.

---
📥 Step 1: Fork the Repository

💻 Step 2: Open in VS Code

🖥️ Step 3: Open 3 Separate Terminals:-⚠️ Make sure you are using CMD (Command Prompt) and NOT PowerShell for smooth execution.

📦 Step 4: Install Dependencies

🚀 Step 5: Start the Application:-In each terminal, run: npm start

🌐 Step 6: Application Ports

Service	      Port
📊 Dashboard	3000
🏠 Frontend	  3001
🔧 Backend	  3002

🔁 Step 7: Open in Browser

⚠️ Step 8: Important Note

Backend must be running
Dashboard must be running
If either backend or dashboard is not running, you will NOT be able to access the dashboard after login
