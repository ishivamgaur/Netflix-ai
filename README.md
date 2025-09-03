# 🎬 Netflix with AI Suggestions

> **Note ⚠️**: If the Browse page doesn’t load movies, it may be due to TMDB API DNS issues.  
> Please set your DNS to **1.1.1.1 (Cloudflare)** or **8.8.8.8 (Google)** to resolve it.  

---

This is a **Netflix-inspired movie web application** that not only lets you browse **trending, popular, and top-rated movies** using the **TMDB API**, but also integrates an **AI-powered movie recommendation system**.  

You can simply describe your mood in plain language (e.g., *“I want something funny and lighthearted”* or *“I feel like watching a dark thriller”*) and the **AI will suggest the perfect movies for you.**

---

## 📸 Screenshots

### Home Page
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/8f624128-4c5c-4122-bc7d-4e8ace15c711" />


### Auth Page
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/7b35c0f5-80de-47fb-8fc7-e6c965c03042" />


### Browse Page
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/bbcdeb6c-7341-4e64-bf02-5abf23538e0f" />


### AI-Powered Movie Recommendation Page
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/dc050f12-393d-41cd-a850-13cfcaa97c89" />


---

## 🚀 Features

- 🔥 **Browse Movies** – Explore trending, popular, and now-playing movies from **TMDB**.  
- 🎭 **AI Mood-based Suggestions** – Enter your mood or description, and the **AI (Gemini API)** suggests tailored movies.  
- 🖥 **Modern UI/UX** – Built with **React 19** and styled using **TailwindCSS** for a clean, responsive design.  
- 🔄 **State Management** – Powered by **Redux Toolkit** for smooth, scalable state handling.  
- 🔑 **Authentication** – Integrated with **Firebase** for secure login/signup.  
- 🌐 **Routing** – Managed via **React Router v7** for seamless navigation.  
- 🎨 **Icons & Enhancements** – Beautiful UI with **React Icons** and **React Hot Toast** for notifications.  
- 📱 **Responsive Design** – Works flawlessly across **desktop, tablet, and mobile**.  

---

## 🛠 Tech Stack

### Frontend
- ⚛️ **React 19** (latest)  
- 🎨 **TailwindCSS** (with Vite plugin for fast dev)  
- 🛠 **Redux Toolkit** for state management  
- 🔥 **Firebase** (authentication & optional hosting)  
- 🔔 **React Hot Toast** for notifications  
- 🎭 **React Icons** for UI  

### Backend (AI Movie Suggestion Server)
- 🚀 **Express.js** for API server  
- 🔒 **CORS + dotenv** for secure API handling  
- 🤖 **Google Generative AI (Gemini)** for mood-based movie recommendations  

---

## ✨ Why this project is unique?

Unlike typical Netflix-clone projects, this app goes a step further with **AI-driven recommendations**.  
Instead of just browsing, users can **describe their mood naturally**, and the app **suggests the perfect movie list** — making it smarter, more interactive, and fun! 🎉  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/netflix-ai.git
cd netflix-ai
