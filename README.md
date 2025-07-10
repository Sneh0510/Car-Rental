# 🚗 <p align="center">Car Rental Application</p>

A full stack car rental platform that allows users to browse, book, and manage car rentals, while owners can list and manage their vehicles and bookings.

---

## ✨ Features

### 👤 User Features

- 🔍 Browse available cars with detailed information  
- 🖼️ View car details and images  
- 📅 Book cars for specific dates  
- 📂 Manage personal bookings  

### 👨‍💼 Owner Features

- 📊 Owner dashboard for managing cars and bookings  
- ➕ Add, ✏️ edit, or ❌ remove car listings  
- 📖 View and manage bookings for owned cars  

### 🌐 General

- 📱 Responsive and modern UI  
- 🔐 Authentication and authorization for users and owners  

---

## 🛠️ Tech Stack

<p align="center"> 
  <img src="https://img.shields.io/badge/Frontend-React-blue?logo=react" alt="React" /> 
  <img src="https://img.shields.io/badge/Frontend-Vite-646CFF?logo=vite" alt="Vite" /> 
  <img src="https://img.shields.io/badge/Styles-CSS-1572B6?logo=css3" alt="CSS" /> 
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js" alt="Node.js" /> 
  <img src="https://img.shields.io/badge/Backend-Express-000000?logo=express" alt="Express" /> 
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb" alt="MongoDB" /> 
  <img src="https://img.shields.io/badge/Uploads-Multer-4B4B4B?logo=npm" alt="Multer" /> 
  <img src="https://img.shields.io/badge/Image%20Hosting-ImageKit-00ADEF?logo=imagekit" alt="ImageKit" /> 
  <img src="https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens" alt="JWT" /> 
</p>

---

## 🗂️ Project Structure

```
Car-Rental/
  client/      # Frontend React app
  server/      # Backend Node.js/Express API
```


---

## 🚀 Getting Started

### ✅ Prerequisites

- 📦 Node.js (v16+ recommended)  
- 📁 npm or yarn  
- 🗄️ MongoDB instance (local or cloud)  

---

### ⚙️ Setup

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sneh0510/Car-Rental.git
cd Car-Rental
```

#### 2️⃣ Install dependencies

- For the backend:
  ```bash
  cd server
  npm install
  ```
- For the frontend:
  ```bash
  cd ../client
  npm install
  ```

#### 3️⃣ Configure Environment Variables

- Create a `.env` file in the `server` directory with your MongoDB URI, JWT secret, and ImageKit credentials.

#### 4️⃣ Run the application

- Start the backend server:
  ```bash
  cd server
  npm start
  ```
- Start the frontend app:

  ```bash
  cd ../client
  npm run dev
  ```

- The frontend will be available at `http://localhost:5173` (default Vite port).

## 📄 Licence

This project is licensed under the [MIT Licence](./LICENCE).  