# 📝 Todo Task Management Web Application

This is a full-stack Todo Task Management web application developed as part of the **Katomaran Full Stack Hackathon**. It allows users to authenticate using social login and perform full CRUD operations on personal todo tasks.

---

## 🔧 Tech Stack

**Frontend:** React + TypeScript  
**Backend:** Node.js + Express  
**Database:** MongoDB Atlas  
**Authentication:** Firebase Authentication (Google Login)  
**Deployment:** 
- Frontend: Vercel
- Backend: Render

---

## 📦 Features

### ✅ Backend
- RESTful APIs with Express.js
- JWT-based Authentication
- CRUD operations for tasks: `task`,  `status (Open/Complete)`
- User-specific task scoping
- Input validation and error handling

### 🎨 Frontend
- Dashboard to view all tasks
- Forms to add/edit tasks
- Options to delete or mark tasks as complete
- Fully responsive UI

---


## 📹 Demo Video

Watch this short Loom video where I demonstrate and explain the complete working of the app:  
🎥https://www.loom.com/share/8805cf558ef245728ac5606d2f4d8b35?sid=f0756157-f9c2-4ce2-a5a7-731d16b848d8

---



## 📂 Project Structure

```plaintext
/ (root)
├── backend/
│   ├──
|    
│   ├── models/
|   |   |__Todo.js
|   |   |__user.js
│   ├── routes/auth.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
├── .env
├── README.md
└── architecture.png
