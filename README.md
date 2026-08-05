# Nigerian Pidgin Sentiment Analyzer

An end-to-end **Machine Learning and Natural Language Processing (NLP)** application that automatically classifies Nigerian Pidgin text into **Positive**, **Negative**, or **Neutral** sentiments.

This project was developed as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project** and demonstrates the complete lifecycle of an AI product—from product discovery and data engineering to machine learning model development, REST API integration, React frontend development, and cloud deployment.

---

# Table of Contents

- Project Overview
- Project Objectives
- Problem Statement
- Dataset
- Project Structure
- Project Progress
- Feature Engineering
- Machine Learning Model Development
- Model Evaluation
- Backend API Development
- Frontend Application
- Deployment
- Technologies Used
- End-to-End Workflow
- Project Roadmap
- Repository Status
- Future Improvements
- Author
- License

---

# Project Overview

Social media conversations in Nigeria are increasingly conducted in **Nigerian Pidgin English**, yet most existing sentiment analysis systems are trained primarily on Standard English. Consequently, they perform poorly when processing Nigerian slang, informal spellings, abbreviations, and culturally specific expressions.

This project addresses that gap by building a machine learning application capable of understanding Nigerian Pidgin and accurately predicting the sentiment expressed in user-provided text.

The completed application consists of:

- A Machine Learning model trained on Nigerian Pidgin text
- A Django REST Framework backend API
- A React (Vite) frontend
- Production deployment on Render
- A complete end-to-end prediction pipeline

---

# Project Objectives

The objectives of this project are to:

- Build an NLP pipeline tailored to Nigerian Pidgin.
- Perform exploratory data analysis on the NaijaSenti dataset.
- Train and compare multiple Machine Learning algorithms.
- Select the best-performing model using evaluation metrics.
- Deploy the trained model behind a RESTful API.
- Develop a modern React interface for user interaction.
- Deploy the solution to the cloud for public access.

---

# Problem Statement

Traditional sentiment analysis systems struggle with Nigerian Pidgin because of:

- Local vocabulary
- Slang expressions
- Informal spellings
- Abbreviations
- Code-mixed language
- Cultural expressions
- Social-media writing styles

These limitations reduce prediction accuracy when using conventional English sentiment analysis models.

This project solves this challenge by training a dedicated Machine Learning classifier using annotated Nigerian Pidgin data.

---

# Dataset

**Dataset Name**

NaijaSenti

**Language**

Nigerian Pidgin (PCM)

**Files Used**

- train.tsv
- dev.tsv
- test.tsv

**Target Classes**

- Positive
- Negative
- Neutral

---

# Project Structure

```text
nigerian_pidgin_sentiment_analyzer/

├── backend/
│   ├── config/
│   ├── prediction/
│   ├── Procfile
│   ├── manage.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
├── dataset/
│   ├── raw/
│   └── processed/
│
├── docs/
│
├── models/
│   ├── best_model.joblib
│   ├── tfidf_vectorizer.joblib
│   └── label_encoder.joblib
│
├── notebooks/
│
├── outputs/
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

# Project Progress

## Phase 1 — Product Discovery

Completed:

- Project vision
- Problem identification
- User needs analysis
- Scope definition
- Success metrics

**Status:** ✅ Completed

---

## Phase 2 — Requirements Analysis

Completed:

- Functional requirements
- Non-functional requirements
- Technical requirements
- Machine Learning requirements
- Deployment requirements

**Status:** ✅ Completed

---

## Phase 3 — Data Strategy & Machine Learning Design

Completed:

- Dataset selection
- Data acquisition strategy
- Model selection strategy
- Evaluation methodology
- Development roadmap

**Status:** ✅ Completed

---

## Phase 4 — Project Setup

Completed:

- GitHub repository setup
- Project structure creation
- Virtual environment configuration
- Jupyter Notebook setup
- Django backend initialization
- React frontend initialization
- Git version control

**Status:** ✅ Completed

---

# Phase 5 — Data Engineering & Exploratory Data Analysis

The raw NaijaSenti dataset was explored, validated, cleaned, and transformed into a machine-learning-ready dataset.

## Dataset Validation

Completed:

- Dataset inspection
- Shape verification
- Missing value detection
- Duplicate detection
- Data type validation
- Label validation

---

## Data Cleaning

Completed:

- Duplicate removal
- Missing value handling
- Text normalization
- Lowercase conversion
- Whitespace cleanup

---

## Text Preprocessing

Completed:

- Tokenization
- Stopword removal
- Text normalization
- Noise removal
- Processed dataset generation

---

## Exploratory Data Analysis (EDA)

Performed analyses including:

- Class distribution
- Sentence length distribution
- Word frequency analysis
- Most common words
- WordCloud visualization
- Dataset statistics

Technical documentation was produced throughout this phase.

**Status:** ✅ Completed

---

# Phase 6 — Feature Engineering & Machine Learning Model Development

This phase focused on transforming processed Nigerian Pidgin text into numerical representations suitable for Machine Learning models and evaluating multiple classification algorithms to identify the best-performing model.

---

## Feature Engineering

Machine Learning algorithms require numerical input rather than raw text. Therefore, feature engineering was performed using Natural Language Processing (NLP) techniques.

### Label Encoding

Sentiment labels were encoded into numerical values.

| Sentiment | Encoded Value |
|-----------|--------------:|
| Negative | 0 |
| Neutral | 1 |
| Positive | 2 |

---

### Train-Test Split

The processed dataset was divided into training and testing subsets.

Configuration:

- Training Dataset: **80%**
- Testing Dataset: **20%**

A **stratified split** was used to preserve the distribution of sentiment classes across both datasets.

---

### TF-IDF Vectorization

The cleaned text was converted into numerical feature vectors using **Term Frequency–Inverse Document Frequency (TF-IDF)**.

Configuration:

- Maximum Features: **5,000**
- Analyzer: Word
- Stop Words: Removed during preprocessing

TF-IDF enables Machine Learning algorithms to determine the relative importance of words within the Nigerian Pidgin corpus.

---

# Machine Learning Models

Three supervised Machine Learning models were implemented and evaluated.

---

## 1. Multinomial Naive Bayes

A probabilistic classifier widely used for text classification.

### Advantages

- Fast training
- Low computational cost
- Good baseline classifier

### Limitation

- Strong bias toward majority sentiment classes.

---

## 2. Logistic Regression

A linear classification algorithm that performs well on sparse text features.

### Advantages

- Better class balance
- Stable performance
- Good interpretability

---

## 3. Linear Support Vector Machine (LinearSVC)

A high-performance classifier optimized for sparse feature spaces such as TF-IDF vectors.

### Advantages

- Excellent generalization
- Robust against overfitting
- Highest F1-score among tested models
- Best balance between precision and recall

---

# Model Evaluation

The trained models were evaluated using:

- Accuracy
- Precision
- Recall
- F1-score
- Classification Report
- Confusion Matrix

---

## Model Comparison

| Model | Accuracy | Precision | Recall | F1 Score |
|-------|---------:|----------:|-------:|---------:|
| Multinomial Naive Bayes | 0.6598 | 0.7033 | 0.6598 | 0.5408 |
| Logistic Regression | 0.6448 | 0.6538 | 0.6448 | 0.6481 |
| LinearSVC | 0.6555 | 0.6456 | 0.6555 | 0.6505 |

---

# Final Model Selection

## Selected Model

**Linear Support Vector Machine (LinearSVC)**

### Reasons

- Highest overall F1-score
- Better precision-recall balance
- Excellent performance on sparse TF-IDF features
- Better handling of minority sentiment classes

Although Naive Bayes achieved a slightly higher accuracy, LinearSVC produced more balanced predictions across all sentiment classes.

---

# Model Artifacts

The trained Machine Learning pipeline was exported using **Joblib**.

Generated files:

```text
models/

├── best_model.joblib
├── tfidf_vectorizer.joblib
└── label_encoder.joblib
```

| File | Description |
|------|-------------|
| best_model.joblib | Trained LinearSVC classifier |
| tfidf_vectorizer.joblib | Converts input text into TF-IDF vectors |
| label_encoder.joblib | Converts encoded predictions back to sentiment labels |

---

# Phase 7 — Backend API Development (Django REST Framework)

The selected Machine Learning model was integrated into a Django REST Framework backend, enabling external applications to request predictions through RESTful endpoints.

---

## Backend Features

Implemented:

- Django project setup
- Django REST Framework configuration
- Prediction application
- Model loading system
- Text preprocessing pipeline
- Inference pipeline
- REST API endpoint
- Request validation
- Exception handling
- API testing with Postman

---

# Backend Architecture

Prediction flow:

```text
User Input

↓

REST API Endpoint

↓

Serializer Validation

↓

Text Preprocessing

↓

TF-IDF Vectorizer

↓

LinearSVC Model

↓

Label Decoder

↓

JSON Response
```

---

# Backend Folder Structure

```text
backend/

├── config/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── prediction/
│   ├── inference.py
│   ├── model_loader.py
│   ├── preprocessing.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
│
├── Procfile
├── manage.py
├── requirements.txt
└── .env
```

---

# REST API Endpoint

### Endpoint

```http
POST /api/v1/predict/
```

---

### Request Example

```json
{
    "text": "I love this movie, e sweet well well"
}
```

---

### Successful Response

```json
{
    "success": true,
    "message": "Prediction completed successfully.",
    "data": {
        "text": "I love this movie, e sweet well well",
        "prediction": "positive"
    }
}
```

---

### Error Response Example

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": {
        "text": [
            "This field is required."
        ]
    }
}
```

---

# API Validation

The backend validates:

- Missing text input
- Empty requests
- Invalid data types
- Internal inference errors
- Unexpected server exceptions

---

# Backend Testing

The API was successfully tested using:

- Django Development Server
- Postman
- React Frontend
- Production deployment on Render

Example prediction:

**Input**

```text
I love this movie, e sweet well well
```

**Prediction**

```text
😊 Positive
```

---

## Phase 7 Status

Completed:

- Django REST Framework integration
- Machine Learning model loading
- TF-IDF inference pipeline
- Prediction endpoint
- Request validation
- Error handling
- API testing
- Production-ready backend

**Status:** ✅ Completed

---

# Phase 8 — Frontend Application Development (React + Vite)

To provide an intuitive user experience, a modern frontend application was developed using **React** and **Vite**. The frontend communicates with the Django REST API and allows users to analyze Nigerian Pidgin text through a clean and responsive web interface.

The frontend transforms the Machine Learning model from a backend service into an interactive AI application that anyone can use.

---

# Frontend Features

Implemented:

- React application setup using Vite
- Component-based architecture
- Axios API integration
- Responsive user interface
- Prediction form
- Loading animation
- Error handling
- Prediction result card
- Production-ready API configuration

**Status:** ✅ Completed

---

# Frontend Architecture

The frontend follows a simple request-response architecture.

```text
User

↓

React Application

↓

Prediction Form

↓

Axios HTTP Request

↓

Django REST API

↓

Machine Learning Pipeline

↓

Prediction Response

↓

Prediction Result Card
```

---

# Frontend Folder Structure

```text
frontend/

├── src/
│
├── api/
│   └── axios.js
│
├── components/
│   ├── PredictionForm.jsx
│   ├── PredictionCard.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
│
├── pages/
│   └── Home.jsx
│
├── styles/
│   └── app.css
│
├── App.jsx
├── main.jsx
│
├── package.json
└── vite.config.js
```

---

# React Components

## PredictionForm

Responsibilities:

- Accepts user text input
- Validates user input
- Sends prediction requests
- Displays loading animation
- Receives API response

---

## PredictionCard

Displays:

- Original text
- Predicted sentiment
- Friendly sentiment icon
- Success message

Example:

```
😊 Positive

"I love this movie, e sweet well well"
```

---

## Loader Component

Provides visual feedback while prediction is being processed.

Example message:

```
Analyzing sentiment...
```

This improves user experience by indicating that the prediction request is in progress.

---

## ErrorMessage Component

Handles application errors including:

- Empty input
- API errors
- Network failures
- Server exceptions

Example:

```
Unable to analyze sentiment.

Please try again.
```

---

# API Communication

The frontend communicates with the Django backend using Axios.

Request flow:

```
React

↓

Axios

↓

POST Request

↓

Render API

↓

Prediction

↓

JSON Response

↓

React UI Update
```

---

# User Experience

The application provides:

- Clean interface
- Responsive layout
- Fast predictions
- Friendly sentiment display
- Error notifications
- Loading indicators

The interface was intentionally kept simple to ensure users focus on text prediction without unnecessary distractions.

---

# Example Prediction

Input:

```
I love this movie, e sweet well well
```

Output:

```
😊 Positive
```

---

Input:

```
This thing no make sense at all.
```

Output:

```
😠 Negative
```

---

Input:

```
Today na Monday.
```

Output:

```
😐 Neutral
```

---

# Frontend Technologies

- React
- Vite
- Axios
- CSS3
- JavaScript (ES6)

---

# Phase 9 — Production Deployment

The completed AI application was prepared for deployment to make it publicly accessible.

Deployment included both backend and frontend preparation.

---

## Deployment Objectives

- Host the Machine Learning API online
- Enable external API access
- Connect React frontend to production API
- Configure production environment variables
- Prepare the application for demonstration and portfolio use

---

# Backend Deployment

The Django REST API was deployed using **Render**.

Deployment configuration included:

- GitHub repository connection
- Procfile configuration
- Gunicorn application server
- Environment variable configuration
- Static files collection
- Production settings

---

## Procfile

The application uses Gunicorn as the production WSGI server.

```
web: gunicorn config.wsgi:application
```

---

# Production Environment Variables

Configured variables include:

```
SECRET_KEY

DEBUG

ALLOWED_HOSTS

CORS_ALLOWED_ORIGINS
```

Sensitive credentials are stored securely using Render Environment Variables and excluded from version control.

---

# Production Configuration

Implemented:

- DEBUG=False
- Environment variable management
- Secure SECRET_KEY
- Allowed hosts configuration
- CORS configuration
- Static file collection
- Production-ready Gunicorn server

---

# Render Deployment

The Django backend was successfully deployed as a Render Web Service.

Deployment steps included:

- Connecting GitHub repository
- Selecting backend as Root Directory
- Installing dependencies
- Configuring Build Command
- Configuring Start Command
- Setting Environment Variables
- Automatic deployment from GitHub

---

# API Testing

The deployed API was successfully tested using:

- Postman
- Browser
- React frontend

The production endpoint returned successful predictions after deployment.

Example:

Request

```json
{
    "text":"I love this movie, e sweet well well"
}
```

Response

```json
{
  "success": true,
  "message": "Prediction completed successfully.",
  "data": {
      "prediction":"positive"
  }
}
```

---

# Frontend Deployment

The React application has been prepared for deployment.

Completed:

- Axios configuration
- Environment preparation
- Production API integration

Next step:

Deploy the frontend using:

- Render Static Site
or

- Vercel

After deployment, the frontend will communicate directly with the live Django API hosted on Render.

---

# Current Deployment Status

| Component | Status |
|-----------|--------|
| Machine Learning Model | ✅ Completed |
| Django Backend | ✅ Completed |
| REST API | ✅ Completed |
| React Frontend | ✅ Completed |
| Backend Deployment | ✅ Completed |
| Production API Testing | ✅ Completed |
| Frontend Deployment | ⏳ Ready to Deploy |

---

# Technologies Used

## Programming Languages

- Python
- JavaScript
- HTML5
- CSS3

---

## Machine Learning & NLP

- Scikit-learn
- Pandas
- NumPy
- NLTK
- Joblib
- Matplotlib
- WordCloud

---

## Backend

- Django
- Django REST Framework
- Gunicorn
- Django CORS Headers

---

## Frontend

- React
- Vite
- Axios

---

## Development Tools

- Visual Studio Code
- Jupyter Notebook
- Postman
- Git
- GitHub

---

## Cloud & Deployment

- Render (Backend Deployment)
- Render Environment Variables
- Gunicorn WSGI Server

---

# End-to-End AI Application Workflow

The application follows a complete Machine Learning workflow:

```
Problem Definition

↓

Dataset Acquisition

↓

Data Validation

↓

Data Cleaning

↓

Text Preprocessing

↓

Exploratory Data Analysis

↓

Feature Engineering

↓

Machine Learning Model Training

↓

Model Evaluation

↓

Model Selection

↓

Model Export

↓

Django REST API Development

↓

Backend Testing

↓

React Frontend Development

↓

Frontend Integration

↓

Production Deployment

↓

Public AI Application
```

---

# Project Roadmap

## Completed

- [x] Product Discovery
- [x] Requirements Analysis
- [x] Data Strategy & ML Design
- [x] Project Setup
- [x] Dataset Acquisition
- [x] Data Validation
- [x] Data Cleaning
- [x] Text Preprocessing
- [x] Exploratory Data Analysis
- [x] Feature Engineering
- [x] Machine Learning Model Training
- [x] Model Evaluation
- [x] Model Selection
- [x] Model Export
- [x] Django REST Framework Backend
- [x] REST API Development
- [x] API Testing
- [x] React Frontend
- [x] Frontend API Integration
- [x] Responsive User Interface
- [x] Backend Deployment on Render
- [x] Production Environment Configuration
- [x] Production API Testing

---

## In Progress

- [ ] Frontend Deployment
- [ ] Live Frontend Integration
- [ ] Final Application Testing

---

## Planned Improvements

- [ ] Confidence Score Display
- [ ] Prediction History
- [ ] User Authentication
- [ ] Batch Sentiment Prediction
- [ ] Sentiment Analytics Dashboard
- [ ] Docker Containerization
- [ ] CI/CD Pipeline
- [ ] PostgreSQL Integration
- [ ] Redis Caching
- [ ] Model Retraining Pipeline
- [ ] Docker Compose Support
- [ ] Kubernetes Deployment

---

# Live Demo

## Backend API

**Status:** Live on Render

**Base URL**

```
https://YOUR-RENDER-APP.onrender.com
```

Example endpoint:

```
POST /api/v1/predict/
```

---

## Frontend Application

Deployment in progress.

The live frontend URL will be added after deployment.

---

# API Example

## Request

```json
{
    "text": "I love this movie, e sweet well well"
}
```

---

## Response

```json
{
    "success": true,
    "message": "Prediction completed successfully.",
    "data": {
        "text": "I love this movie, e sweet well well",
        "prediction": "positive"
    }
}
```

---

# Sample Predictions

| Input | Prediction |
|--------|------------|
| I love this movie, e sweet well well | 😊 Positive |
| This thing no make sense at all | 😠 Negative |
| Today na Monday | 😐 Neutral |

---

# Repository Status

## Current Milestone

### Day 5 — Backend Deployment Completed

Completed during this milestone:

- Production environment configuration
- Procfile setup
- Gunicorn configuration
- Static files collection
- Render Web Service deployment
- Environment variable management
- Backend production deployment
- Live API testing
- Successful production prediction requests

Current project components:

- ✅ Trained Machine Learning Model
- ✅ TF-IDF Feature Engineering
- ✅ Exported Model Artifacts
- ✅ Django REST API
- ✅ React Frontend
- ✅ Production Backend Deployment
- ✅ Live Prediction API
- ✅ End-to-End AI Prediction Pipeline

---

# Screenshots

The following screenshots document the project's development journey and final application.

## Machine Learning

- Dataset validation
- Data preprocessing
- Exploratory Data Analysis
- Model evaluation
- Confusion Matrix
- Classification Report

---

## Backend

- Django REST API
- Postman API Testing
- Successful Prediction Response

---

## Frontend

- Home Page
- Prediction Interface
- Loading State
- Positive Prediction
- Negative Prediction
- Neutral Prediction

---

## Deployment

- Render Dashboard
- Successful Deployment
- Live API Testing

---

# Future Improvements

Future versions of the project may include:

- Deep Learning (LSTM/BERT)
- Transformer-based NLP models
- Explainable AI (XAI)
- Real-time analytics
- Mobile application
- Speech-to-text sentiment analysis
- Nigerian multilingual sentiment support
- Continuous model retraining

---

# Acknowledgements

Special appreciation to:

- **3 Million Technical Talent (3MTT)** for providing the opportunity and learning platform.
- The **NaijaSenti** project for making Nigerian language sentiment datasets available.
- The open-source community behind Django, React, Scikit-learn, and related technologies.

---

# Author

**Abideen Adenekan**

Backend Developer • AI/ML Engineer • 3MTT Fellow

**GitHub**

https://github.com/Habideen1

**LinkedIn**

https://www.linkedin.com/in/abideen-adenekan/

---

# License

This project was developed for educational, research, and portfolio purposes as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project**.

You are free to study, fork, and build upon this project for learning purposes. Appropriate attribution is appreciated.

---

## Project Status

**Current Version:** v1.0.0

**Development Status:** Active

**Backend:** Production Ready

**Frontend:** Ready for Deployment

**Machine Learning Pipeline:** Production Ready

**Last Updated:** August 2026