# 📊 Loan AI Intelligence Dashboard

A full-stack AI-powered financial analysis platform that extracts insights from loan documents, evaluates risk, and generates structured financial summaries using machine learning and LLMs.

---

## 🚀 Live Demo
https://loan-ai-platform.vercel.app/

---

## 🧠 Problem It Solves

Financial institutions process large volumes of loan documents manually, which is:
- slow
- error-prone
- expensive

This system automates:
- document analysis
- risk classification
- financial insight extraction

---

## ⚙️ Features

- 📄 Upload PDF loan documents
- 🧠 AI-powered document analysis (OpenAI API)
- 📊 Risk scoring (Low / Medium / High)
- 📈 Data visualization dashboard
- 🔐 JWT authentication system
- 🗂 User-specific document history
- 🌐 Full-stack deployment

---

## 🏗 Tech Stack

### Frontend
- React
- JavaScript
- Recharts
- Axios

### Backend
- FastAPI
- Python
- Uvicorn

### Database
- MongoDB Atlas

### AI
- OpenAI GPT-4o-mini

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 🔐 Authentication Flow

1. User registers
2. Password is hashed (bcrypt)
3. JWT token is issued on login
4. Token secures protected routes (/upload, /documents)

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /register | Create user |
| POST | /login | Authenticate user |
| POST | /upload | Upload loan document |
| GET | /documents | Get user history |

---

## ⚙️ Local Setup

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
