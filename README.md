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
🎥https://www.loom.com/share/c301852a5a3b4d8da87d5cb9a0b1e551?sid=69f7319d-17c9-491f-bc36-e706cdb04480

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
