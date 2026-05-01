# 📊 Loan AI Intelligence Dashboard

A full-stack AI-powered financial analysis platform that automates loan document processing, extracts insights, and evaluates risk using machine learning and large language models.

---

## 🚀 Live Demo

https://loan-ai-platform.vercel.app/

---

## 🧠 Overview

Loan processing in financial institutions is often manual, slow, and error-prone.  
This system automates the workflow by:

- Parsing uploaded loan documents (PDF)
- Extracting key financial information
- Generating AI-powered risk analysis
- Storing user-specific document history
- Visualizing insights in a dashboard

---

## ⚙️ Features

- 📄 Upload and process PDF loan documents  
- 🧠 AI-powered analysis using OpenAI GPT models  
- 📊 Risk classification (Low / Medium / High)  
- 📈 Dashboard with financial insights  
- 🔐 JWT authentication system  
- 🗂 User-specific document history  
- 🌐 Full-stack deployed application  

---

## 🏗 Tech Stack

### Frontend
- React
- JavaScript
- Axios
- Recharts

### Backend
- FastAPI
- Python
- Uvicorn
- pdfplumber

### Database
- MongoDB Atlas

### AI
- OpenAI API (GPT-4o-mini)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 🔐 Authentication Flow

1. User registers an account  
2. Password is hashed using bcrypt  
3. JWT token is generated on login  
4. Token protects routes:
   - `/upload`
   - `/documents`

---

## 📡 API Endpoints

| Method | Endpoint    | Description |
|--------|------------|-------------|
| POST   | /register  | Create user |
| POST   | /login     | Authenticate user |
| POST   | /upload    | Upload loan document (protected) |
| GET    | /documents | Get user history (protected) |

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
