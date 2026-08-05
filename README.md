# Nigerian Pidgin Sentiment Analyzer

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Django](https://img.shields.io/badge/Django-REST%20Framework-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-NLP-orange)
![Deployment](https://img.shields.io/badge/Deployment-Render%20%7C%20Vercel-purple)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

An end-to-end **Machine Learning and Natural Language Processing (NLP)** application that classifies Nigerian Pidgin text into three sentiment categories:

* 😊 Positive
* 😐 Neutral
* 😠 Negative

The project demonstrates the complete lifecycle of an Artificial Intelligence product, including:

* Product discovery
* Data acquisition and validation
* NLP preprocessing
* Exploratory Data Analysis (EDA)
* Feature engineering
* Machine Learning model development
* REST API development
* React frontend development
* Cloud deployment

This project was developed as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project**.

---

# Table of Contents

* [Project Overview](#project-overview)
* [Project Objectives](#project-objectives)
* [Problem Statement](#problem-statement)
* [Dataset](#dataset)
* [Project Structure](#project-structure)
* [Project Development Journey](#project-development-journey)
* [Phase 1 — Product Discovery](#phase-1--product-discovery)
* [Phase 2 — Requirements Analysis](#phase-2--requirements-analysis)
* [Phase 3 — Data Strategy & ML Design](#phase-3--data-strategy--ml-design)
* [Phase 4 — Project Setup](#phase-4--project-setup)
* [Phase 5 — Data Engineering & Exploratory Data Analysis](#phase-5--data-engineering--exploratory-data-analysis)
* [Phase 6 — Feature Engineering & Machine Learning Development](#phase-6--feature-engineering--machine-learning-development)
* [Model Evaluation](#model-evaluation)
* [Backend API Development](#backend-api-development)
* [Frontend Application](#frontend-application)
* [Deployment](#deployment)
* [Technologies Used](#technologies-used)
* [End-to-End Workflow](#end-to-end-workflow)
* [Project Roadmap](#project-roadmap)
* [Author](#author)

---

# Project Overview

Social media communication in Nigeria increasingly occurs through informal language systems such as **Nigerian Pidgin English (Naija Pidgin)**.

However, most traditional sentiment analysis systems are trained primarily on Standard English datasets. As a result, they struggle with:

* Nigerian slang
* Informal spellings
* Abbreviations
* Code-mixed expressions
* Cultural phrases
* Social media writing patterns

For example:

```
omo, dis babe fine oo
```

A conventional English sentiment model may not correctly understand the positive meaning behind this expression.

This project addresses this challenge by building a dedicated sentiment analysis system trained on Nigerian Pidgin data.

The final application provides:

* A trained NLP sentiment classification model
* A Django REST Framework API
* A React + Vite user interface
* Production cloud deployment
* Real-time sentiment prediction

---

# Project Objectives

The major objectives of this project are:

* Build an NLP pipeline specifically for Nigerian Pidgin text.
* Explore and analyze the NaijaSenti dataset.
* Clean and preprocess informal Nigerian language data.
* Convert text data into machine-readable numerical features.
* Train multiple Machine Learning classification models.
* Evaluate models using appropriate performance metrics.
* Select the best-performing model.
* Deploy the trained model through a REST API.
* Build a user-friendly frontend interface.
* Deploy the complete AI application online.

---

# Problem Statement

Existing sentiment analysis solutions often perform poorly on Nigerian Pidgin because they are not designed to understand local expressions.

Challenges include:

## Local Vocabulary

Examples:

```
wahala
dey
abi
omo
sabi
```

---

## Informal Spellings

Examples:

```
dis  → this
dat  → that
dey  → be/is
```

---

## Cultural Expressions

Examples:

```
e sweet well well
```

Meaning:

```
It is very good / enjoyable
```

---

## Social Media Writing Style

Nigerian online conversations often contain:

* Shortened words
* Emojis
* Repeated letters
* Informal grammar

This project solves the problem by training a dedicated Machine Learning classifier using annotated Nigerian Pidgin sentiment data.

---

# Dataset

## Dataset Name

**NaijaSenti**

NaijaSenti is a Nigerian sentiment analysis dataset containing annotated social media text across multiple Nigerian languages.

This project focuses specifically on:

```
Nigerian Pidgin (PCM)
```

---

## Dataset Files Used

The following files were used:

```
dataset/

└── raw/

    ├── train.tsv
    ├── dev.tsv
    └── test.tsv
```

---

## Target Classes

The model predicts three sentiment categories:

| Sentiment | Description                                  |
| --------- | -------------------------------------------- |
| Positive  | Expresses satisfaction, happiness, approval  |
| Negative  | Expresses dissatisfaction, anger, criticism  |
| Neutral   | Contains factual or non-emotional statements |

---

# Project Structure

The repository follows a modular architecture separating:

* Data
* Machine Learning pipeline
* Backend API
* Frontend application
* Documentation

```text
nigerian_pidgin_sentiment_analyzer/

│
├── dataset/
│
│   ├── raw/
│   │   ├── train.tsv
│   │   ├── dev.tsv
│   │   └── test.tsv
│   │
│   └── processed/
│       └── train_processed.csv
│
├── docs/
│   ├── dataset_acquisition_report.md
│   ├── data_validation_report.md
│   ├── data_cleaning_log.md
│   └── api_documentation.md
│
├── notebooks/
│   ├── 01_data_validation.ipynb
│   ├── 02_data_preprocessing.ipynb
│   ├── 03_exploratory_data_analysis.ipynb
│   ├── 04_feature_engineering.ipynb
│   └── 05_model_training.ipynb
│
├── models/
│   ├── best_model.joblib
│   ├── tfidf_vectorizer.joblib
│   └── label_encoder.joblib
│
├── backend/
│   ├── config/
│   ├── prediction/
│   ├── manage.py
│   ├── Procfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── outputs/
│
├── README.md
└── .gitignore
```

---

# Project Development Journey

The project was developed through multiple structured phases:

```
Product Discovery

↓

Requirements Analysis

↓

Data Strategy & ML Design

↓

Project Setup

↓

Data Engineering

↓

Exploratory Data Analysis

↓

Feature Engineering

↓

Model Development

↓

Backend API Development

↓

Frontend Development

↓

Cloud Deployment

↓

Production AI Application
```

---

# Phase 1 — Product Discovery

## Completed Activities

* Defined the project vision.
* Identified the sentiment analysis problem.
* Studied Nigerian Pidgin language challenges.
* Defined target users.
* Established success criteria.

## Status

✅ Completed

---

# Phase 2 — Requirements Analysis

## Completed Activities

Defined:

### Functional Requirements

* Accept Nigerian Pidgin text input.
* Predict sentiment category.
* Return prediction results.
* Provide user-friendly feedback.

### Non-Functional Requirements

* Fast response time.
* Reliable API communication.
* Scalable architecture.
* Secure deployment configuration.

### Technical Requirements

* NLP pipeline.
* Machine Learning model.
* REST API.
* Frontend interface.
* Cloud deployment.

## Status

✅ Completed

---

# Phase 3 — Data Strategy & ML Design

## Completed Activities

* Selected NaijaSenti dataset.
* Defined preprocessing strategy.
* Selected candidate ML algorithms.
* Defined evaluation metrics.
* Designed deployment architecture.

## Status

✅ Completed

---

# Phase 4 — Project Setup

## Completed Activities

* Created GitHub repository.
* Designed project folder structure.
* Configured Python environment.
* Setup Jupyter Notebook workflow.
* Initialized Django backend.
* Initialized React frontend.
* Configured Git version control.

## Status

✅ Completed

---

# Phase 5 — Data Engineering & Exploratory Data Analysis

The raw NaijaSenti dataset was prepared for Machine Learning through validation, cleaning, preprocessing, and analysis.

## Dataset Validation

Completed:

* Dataset loading
* Shape verification
* Data type inspection
* Missing value detection
* Duplicate analysis
* Sentiment label verification

---

## Data Cleaning

Completed:

* Duplicate removal
* Missing value handling
* Text normalization
* Lowercase conversion
* Whitespace cleanup
* Noise reduction

---

## Text Preprocessing

Applied NLP preprocessing techniques:

* Tokenization
* Stopword handling
* Text normalization
* Noise removal
* Dataset transformation

Output:

```text
Processed Machine Learning Dataset
```

---

## Exploratory Data Analysis

Performed analysis including:

* Sentiment class distribution
* Text length analysis
* Word frequency analysis
* Common Nigerian Pidgin words
* WordCloud visualization
* Dataset statistics

Documentation produced:

```
docs/

├── data_validation_report.md
├── data_cleaning_log.md
```

## Status

✅ Completed


# Phase 6 — Feature Engineering & Machine Learning Development

After completing data preparation and exploratory analysis, the next phase focused on transforming Nigerian Pidgin text into numerical representations suitable for Machine Learning algorithms.

Machine Learning models cannot directly understand raw text. Therefore, Natural Language Processing (NLP) techniques were applied to convert textual information into meaningful numerical features.

---

# Feature Engineering

## Label Encoding

The sentiment labels were converted from text categories into numerical values.

| Sentiment | Encoded Value |
| --------- | ------------: |
| Negative  |             0 |
| Neutral   |             1 |
| Positive  |             2 |

This transformation allowed Machine Learning algorithms to process the target variable.

---

# Train-Test Split

The processed dataset was divided into training and testing subsets.

Configuration:

| Dataset       | Percentage |
| ------------- | ---------: |
| Training Data |        80% |
| Testing Data  |        20% |

A **stratified split** was applied to ensure that the distribution of sentiment classes remained consistent across training and testing datasets.

---

# TF-IDF Feature Extraction

The cleaned Nigerian Pidgin text was converted into numerical vectors using:

## Term Frequency–Inverse Document Frequency (TF-IDF)

TF-IDF measures the importance of words within a document relative to the entire dataset.

Configuration:

```text
Maximum Features: 5000
Analyzer: Word
Feature Type: Sparse Matrix
```

Example:

Input:

```text
omo dis babe fine oo
```

After TF-IDF transformation:

```text
[0.024, 0.315, 0.087, ...]
```

The numerical representation was then passed into Machine Learning classifiers.

---

# Machine Learning Model Development

Three supervised learning algorithms were implemented and evaluated.

---

# Model 1 — Multinomial Naive Bayes

Multinomial Naive Bayes is a probabilistic classifier commonly used for text classification problems.

## Advantages

* Fast training speed.
* Low computational requirements.
* Effective baseline for NLP classification tasks.

## Limitation

* Assumes feature independence.
* May struggle with complex language relationships.
* Can be biased toward majority classes.

---

# Model 2 — Logistic Regression

Logistic Regression is a linear classification algorithm that performs well with high-dimensional sparse datasets such as TF-IDF features.

## Advantages

* Good interpretability.
* Strong baseline classifier.
* Stable performance.
* Handles sparse text features effectively.

---

# Model 3 — Linear Support Vector Machine (LinearSVC)

LinearSVC is a Support Vector Machine implementation optimized for classification tasks involving large sparse feature spaces.

It is commonly used in:

* Text classification.
* Spam detection.
* Sentiment analysis.
* Document categorization.

## Advantages

* Strong generalization ability.
* Effective with TF-IDF features.
* Good precision-recall balance.
* Resistant to overfitting.

---

# Model Training Pipeline

The complete training workflow:

```text
Processed Dataset

↓

Text Features (TF-IDF)

↓

Training Dataset

↓

Machine Learning Algorithms

↓

Model Evaluation

↓

Best Model Selection

↓

Model Export
```

---

# Model Evaluation

The trained models were evaluated using standard classification metrics.

Evaluation metrics included:

## Accuracy

Measures the percentage of correct predictions.

Formula:

```
Correct Predictions / Total Predictions
```

---

## Precision

Measures how many predicted positive cases were actually correct.

---

## Recall

Measures how many actual cases were successfully identified.

---

## F1 Score

The harmonic mean between precision and recall.

F1-score was considered an important metric because sentiment datasets often contain class imbalance.

---

# Model Comparison

The evaluated models produced the following results:

| Model                   | Accuracy | Precision | Recall | F1 Score |
| ----------------------- | -------: | --------: | -----: | -------: |
| Multinomial Naive Bayes |   0.6598 |    0.7033 | 0.6598 |   0.5408 |
| Logistic Regression     |   0.6448 |    0.6538 | 0.6448 |   0.6481 |
| LinearSVC               |   0.6555 |    0.6456 | 0.6555 |   0.6505 |

---

# Final Model Selection

## Selected Model

```text
Linear Support Vector Machine (LinearSVC)
```

---

## Selection Reason

Although Multinomial Naive Bayes achieved slightly higher accuracy, LinearSVC was selected because it provided:

* Highest F1-score.
* Better balance between precision and recall.
* Better classification consistency across sentiment classes.
* Strong performance with TF-IDF features.

The final model provides a better practical solution for real-world Nigerian Pidgin sentiment prediction.

---

# Model Artifacts

The trained pipeline was exported using **Joblib**.

Generated files:

```text
models/

├── best_model.joblib
├── tfidf_vectorizer.joblib
└── label_encoder.joblib
```

---

## Artifact Description

| File                    | Purpose                                                   |
| ----------------------- | --------------------------------------------------------- |
| best_model.joblib       | Stores trained LinearSVC classifier                       |
| tfidf_vectorizer.joblib | Converts text input into numerical features               |
| label_encoder.joblib    | Converts numerical predictions back into sentiment labels |

---

# Phase 7 — Backend API Development

The selected Machine Learning model was integrated into a Django REST Framework backend.

The backend acts as the bridge between the Machine Learning pipeline and external applications.

---

# Backend Objectives

The backend was designed to:

* Load the trained ML model.
* Accept user text input.
* Validate incoming requests.
* Preprocess Nigerian Pidgin text.
* Generate predictions.
* Return structured JSON responses.

---

# Backend Technology Stack

| Technology            | Purpose                      |
| --------------------- | ---------------------------- |
| Django                | Backend framework            |
| Django REST Framework | API development              |
| Gunicorn              | Production server            |
| Django CORS Headers   | Frontend communication       |
| Joblib                | Model loading                |
| Python                | Backend programming language |

---

# Backend Architecture

Prediction request flow:

```text
User Input

↓

REST API Endpoint

↓

Request Serializer Validation

↓

Text Preprocessing

↓

TF-IDF Vectorization

↓

LinearSVC Model Prediction

↓

Label Decoding

↓

JSON Response

↓

Frontend Display
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
├── manage.py
├── Procfile
└── requirements.txt
```

---

# REST API Endpoint

## Prediction Endpoint

```http
POST /api/v1/predict/
```

---

# API Request

Example:

```json
{
    "text": "omo, dis babe fine oo"
}
```

---

# API Response

Successful response:

```json
{
    "success": true,
    "message": "Prediction completed successfully.",
    "data": {
        "text": "omo, dis babe fine oo",
        "prediction": "positive"
    }
}
```

---

# API Validation

The backend validates:

* Empty requests.
* Missing text fields.
* Invalid input types.
* Prediction errors.
* Unexpected server exceptions.

---

# Error Response Example

Request:

```json
{}
```

Response:

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

# Backend Testing

The API was tested using:

* Django development server.
* Postman.
* React frontend integration.
* Production deployment environment.

Successful test example:

Input:

```text
omo, dis babe fine oo
```

Response:

```text
positive
```

---

# Phase 7 Status

Completed:

* Django REST Framework setup.
* Model loading system.
* NLP inference pipeline.
* Prediction endpoint.
* Request validation.
* Exception handling.
* Postman testing.
* Production-ready backend.

Status:

✅ Completed


# Phase 8 — Frontend Application Development (React + Vite)

After completing the Machine Learning pipeline and backend API, a modern frontend application was developed to provide users with an accessible interface for interacting with the Nigerian Pidgin Sentiment Analyzer.

The frontend transforms the Machine Learning model from a backend service into a complete user-facing AI application.

The frontend allows users to:

* Enter Nigerian Pidgin text.
* Submit text for sentiment analysis.
* Receive real-time predictions.
* View sentiment results through an interactive interface.

---

# Frontend Technology Stack

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| React             | Frontend user interface |
| Vite              | Frontend build tool     |
| Axios             | API communication       |
| JavaScript (ES6+) | Application logic       |
| CSS3              | Styling and layout      |

---

# Frontend Architecture

The frontend follows a simple request-response architecture.

```text
User

↓

React Application

↓

Prediction Form Component

↓

Axios HTTP Client

↓

Django REST API

↓

Machine Learning Pipeline

↓

Prediction Response

↓

Prediction Result Component
```

---

# Frontend Folder Structure

```text
frontend/

├── src/
│
│   ├── api/
│   │   └── axios.js
│   │
│   ├── components/
│   │   ├── PredictionForm.jsx
│   │   ├── PredictionCard.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# React Components

## PredictionForm Component

The main interaction component responsible for:

* Capturing user input.
* Validating text.
* Sending API requests.
* Managing loading states.
* Handling API responses.

Example input:

```text
omo, dis babe fine oo
```

---

## PredictionCard Component

Displays the sentiment prediction result.

Example:

```text
😊 Positive

"omo, dis babe fine oo"
```

Responsibilities:

* Display predicted sentiment.
* Show the analyzed text.
* Provide clear user feedback.

---

## Loader Component

Provides visual feedback while the Machine Learning model processes the request.

Example:

```text
Analyzing sentiment...
```

This improves user experience by showing that the application is actively processing the request.

---

## ErrorMessage Component

Handles application errors including:

* Empty input.
* Invalid requests.
* Network failures.
* Backend connection errors.

Example:

```text
Unable to connect to prediction server.
```

---

# API Integration

The frontend communicates with the Django backend using Axios.

The API configuration is stored in:

```text
src/api/axios.js
```

Example configuration:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default api;
```

---

# Environment Configuration

The frontend uses environment variables to manage API URLs.

Production configuration:

```env
VITE_API_BASE_URL=https://nigerian-pidgin-sentiment-analyzer.onrender.com
```

This allows the frontend to communicate with the deployed Django API.

---

# User Prediction Workflow

The complete user workflow:

```text
User enters Nigerian Pidgin text

↓

Frontend validates input

↓

Axios sends POST request

↓

Django API receives request

↓

ML pipeline processes text

↓

Model predicts sentiment

↓

API returns JSON response

↓

React displays result
```

---

# Example User Interaction

## Input

```text
omo, dis babe fine oo
```

## Processing

The system performs:

```text
Text Cleaning

↓

TF-IDF Transformation

↓

LinearSVC Prediction

↓

Sentiment Label Decoding
```

## Output

```text
😊 Positive
```

---

# Frontend Features Implemented

Completed:

* React + Vite setup.
* Component-based architecture.
* API integration with Axios.
* Input validation.
* Loading state.
* Error handling.
* Prediction display.
* Responsive user interface.
* Production API configuration.

Status:

✅ Completed

---

# Phase 9 — Production Deployment

The complete AI application was prepared for public access by deploying both backend and frontend services.

The final deployment architecture consists of:

* Backend API hosted on Render.
* Frontend application hosted on Vercel.
* Machine Learning model served through Django REST API.

---

# Deployment Architecture

```text
                  User

                   |

                   ↓

        Vercel React Frontend

                   |

                   ↓

        Axios API Request

                   |

                   ↓

       Render Django REST API

                   |

                   ↓

        NLP Processing Pipeline

                   |

                   ↓

       TF-IDF Vectorizer

                   |

                   ↓

          LinearSVC Model

                   |

                   ↓

        Sentiment Prediction
```

---

# Backend Deployment (Render)

The Django REST API was deployed using:

## Hosting Platform

```text
Render Web Service
```

---

# Backend Deployment Configuration

The deployment included:

* GitHub repository integration.
* Gunicorn production server.
* Environment variable management.
* Static file configuration.
* Production security settings.
* CORS configuration.

---

# Production Server

The backend uses Gunicorn:

```bash
web: gunicorn config.wsgi:application
```

Gunicorn provides a production-ready WSGI server for Django applications.

---

# Backend Environment Variables

Configured production variables:

```text
SECRET_KEY

DEBUG

ALLOWED_HOSTS

CORS_ALLOWED_ORIGINS
```

Sensitive information is stored securely through Render Environment Variables and excluded from GitHub.

---

# CORS Configuration

To allow communication between the React frontend and Django backend, production CORS configuration was implemented.

Allowed frontend origin:

```text
https://nigerian-pidgin-sentiment-analyzer-r1jv0t6hq.vercel.app
```

This enables secure cross-origin API requests.

---

# Backend Deployment Status

Completed:

* Django deployment.
* Gunicorn configuration.
* Environment setup.
* Production API testing.
* CORS configuration.
* Live prediction verification.

Status:

✅ Completed

---

# Frontend Deployment (Vercel)

The React application was deployed using:

```text
Vercel
```

---

# Frontend Deployment Configuration

Deployment steps included:

* Connecting GitHub repository.
* Selecting frontend directory.
* Configuring Vite build settings.
* Adding production environment variables.
* Building production assets.
* Deploying the application.

---

# Production Build

The application was successfully built using:

```bash
npm run build
```

Build output:

```text
✓ built successfully
```

---

# Live Application

## Frontend Application

Live URL:

```text
https://nigerian-pidgin-sentiment-analyzer-r1jv0t6hq.vercel.app
```

---

## Backend API

Live API:

```text
https://nigerian-pidgin-sentiment-analyzer.onrender.com
```

Prediction endpoint:

```http
POST /api/v1/predict/
```

---

# Production Testing

The deployed application was tested through:

* Postman API testing.
* Browser testing.
* React frontend interaction.
* Production API requests.

Example:

Request:

```json
{
    "text": "omo, dis babe fine oo"
}
```

Response:

```json
{
    "success": true,
    "message": "Prediction completed successfully.",
    "data": {
        "text": "omo, dis babe fine oo",
        "prediction": "positive"
    }
}
```

---

# Current Deployment Status

| Component                  | Status      |
| -------------------------- | ----------- |
| Dataset Processing         | ✅ Completed |
| NLP Pipeline               | ✅ Completed |
| Machine Learning Model     | ✅ Completed |
| Model Deployment           | ✅ Completed |
| Django REST API            | ✅ Completed |
| React Frontend             | ✅ Completed |
| Render Backend Deployment  | ✅ Completed |
| Vercel Frontend Deployment | ✅ Completed |
| End-to-End Testing         | ✅ Completed |

---

# Production Milestone

## Full-Stack AI Application Deployment Completed

The project has successfully progressed from an experimental Machine Learning notebook into a fully deployed Artificial Intelligence application.

Completed capabilities:

* Data pipeline.
* NLP preprocessing.
* Machine Learning classification.
* REST API integration.
* Frontend interaction.
* Cloud deployment.
* Public accessibility.

Status:

✅ Production Ready


# Technologies Used

The project combines multiple technologies across Machine Learning, backend development, frontend engineering, and cloud deployment.

---

# Programming Languages

| Technology | Usage                                                     |
| ---------- | --------------------------------------------------------- |
| Python     | Machine Learning pipeline, NLP processing, Django backend |
| JavaScript | React frontend development                                |
| HTML5      | Frontend structure                                        |
| CSS3       | User interface styling                                    |

---

# Machine Learning & NLP Technologies

| Technology   | Purpose                               |
| ------------ | ------------------------------------- |
| Scikit-learn | Machine Learning model development    |
| Pandas       | Data manipulation and analysis        |
| NumPy        | Numerical computation                 |
| NLTK         | Natural Language Processing utilities |
| Joblib       | Model serialization                   |
| Matplotlib   | Data visualization                    |
| WordCloud    | Text visualization                    |

---

# Backend Technologies

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| Django                | Backend web framework           |
| Django REST Framework | REST API development            |
| Gunicorn              | Production WSGI server          |
| django-cors-headers   | Cross-origin API communication  |
| Python Decouple       | Environment variable management |

---

# Frontend Technologies

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| React           | User interface development |
| Vite            | Frontend build tooling     |
| Axios           | HTTP communication         |
| JavaScript ES6+ | Application logic          |
| CSS3            | Styling                    |

---

# Development Tools

| Tool               | Usage                             |
| ------------------ | --------------------------------- |
| Visual Studio Code | Code development                  |
| Jupyter Notebook   | Data analysis and experimentation |
| Postman            | API testing                       |
| Git                | Version control                   |
| GitHub             | Repository management             |

---

# Cloud & Deployment Technologies

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| Render                | Django backend hosting          |
| Vercel                | React frontend hosting          |
| Gunicorn              | Production application server   |
| Environment Variables | Secure production configuration |

---

# End-to-End AI Application Workflow

The application follows a complete Machine Learning product development lifecycle.

```text
Problem Identification

↓

Product Discovery

↓

Requirements Analysis

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

TF-IDF Vectorization

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

Cloud Deployment

↓

Public AI Application
```

---

# Application Request Flow

When a user submits Nigerian Pidgin text, the complete prediction pipeline works as follows:

```text
User

↓

React Frontend

↓

Axios POST Request

↓

Django REST API

↓

Serializer Validation

↓

Text Preprocessing

↓

TF-IDF Vectorizer

↓

LinearSVC Model

↓

Sentiment Classification

↓

JSON Response

↓

User Interface Display
```

---

# Project Roadmap

## Completed Features

The following milestones have been successfully completed:

* [x] Product Discovery
* [x] Problem Definition
* [x] Requirements Analysis
* [x] Dataset Selection
* [x] Dataset Acquisition
* [x] Data Validation
* [x] Data Cleaning
* [x] Text Preprocessing
* [x] Exploratory Data Analysis
* [x] Feature Engineering
* [x] TF-IDF Vectorization
* [x] Machine Learning Model Training
* [x] Model Evaluation
* [x] Model Selection
* [x] Model Export
* [x] Django REST Framework Backend
* [x] Prediction API Development
* [x] API Validation
* [x] Postman Testing
* [x] React Frontend Development
* [x] Axios API Integration
* [x] User Interface Development
* [x] Render Backend Deployment
* [x] Vercel Frontend Deployment
* [x] Production Testing

---

# Future Improvements

Although version 1.0 provides a complete working solution, future versions can introduce additional capabilities.

---

## Machine Learning Improvements

Potential improvements:

* Experiment with transformer-based models.
* Fine-tune BERT-style Nigerian language models.
* Apply deep learning approaches such as LSTM networks.
* Improve performance through larger datasets.
* Implement automated model retraining pipelines.

---

## Application Features

Future application features:

* Confidence score display.
* Prediction probability visualization.
* User prediction history.
* Batch sentiment analysis.
* Sentiment analytics dashboard.
* Export prediction reports.

---

## Infrastructure Improvements

Future engineering improvements:

* PostgreSQL database integration.
* Redis caching.
* Docker containerization.
* Docker Compose deployment.
* CI/CD automation.
* Kubernetes deployment.
* Cloud monitoring and logging.

---

## Language Expansion

Future versions may support:

* Yoruba sentiment analysis.
* Hausa sentiment analysis.
* Igbo sentiment analysis.
* Multilingual Nigerian sentiment analysis.

---

# Screenshots

Screenshots documenting the project development process should be included in this section.

---

# Machine Learning Screenshots

Recommended screenshots:

* Dataset validation notebook.
* Data preprocessing results.
* Exploratory Data Analysis charts.
* WordCloud visualization.
* Model comparison results.
* Confusion matrix.
* Classification report.

---

# Backend Screenshots

Recommended screenshots:

* Django project structure.
* API endpoint.
* Postman successful prediction request.
* JSON API response.
* Render deployment dashboard.

---

# Frontend Screenshots

Recommended screenshots:

* Application homepage.
* Text input interface.
* Loading state.
* Positive sentiment prediction.
* Negative sentiment prediction.
* Neutral sentiment prediction.

---

# Deployment Screenshots

Recommended screenshots:

* Render deployment success.
* Vercel deployment success.
* Live application testing.

---

# Acknowledgements

Special appreciation goes to:

## 3 Million Technical Talent (3MTT)

For providing the learning platform and opportunity to develop this Artificial Intelligence capstone project.

---

## NaijaSenti Dataset Contributors

For making Nigerian language sentiment datasets available for research and development.

---

## Open Source Community

Special appreciation to the developers and communities behind:

* Django
* Django REST Framework
* React
* Scikit-learn
* Pandas
* NumPy
* NLTK
* Vite

These technologies made the development of this project possible.

---

# Author

## Abideen Adenekan

Backend Developer • AI/ML Engineer • 3MTT Fellow

---

## GitHub

```text
https://github.com/Habideen1
```

---

## LinkedIn

```text
https://www.linkedin.com/in/abideen-adenekan/
```

---

# License

This project was developed for:

* Educational purposes.
* Research purposes.
* Portfolio demonstration.
* The 3MTT AI/ML Capstone Project.

You are free to study, fork, and improve this project for learning purposes.

Attribution is appreciated.

---

# Project Status

## Nigerian Pidgin Sentiment Analyzer v1.0.0

| Component              | Status             |
| ---------------------- | ------------------ |
| Data Pipeline          | ✅ Production Ready |
| NLP Processing         | ✅ Production Ready |
| Machine Learning Model | ✅ Production Ready |
| Model Artifacts        | ✅ Available        |
| Django REST API        | ✅ Production Ready |
| React Frontend         | ✅ Production Ready |
| Backend Deployment     | ✅ Live             |
| Frontend Deployment    | ✅ Live             |
| API Integration        | ✅ Completed        |
| End-to-End Testing     | ✅ Completed        |

---

# Live Application

## Frontend

```text
https://nigerian-pidgin-sentiment-analyzer-r1jv0t6hq.vercel.app
```

---

## Backend API

```text
https://nigerian-pidgin-sentiment-analyzer.onrender.com
```

---

## Prediction Endpoint

```http
POST

/api/v1/predict/
```

---

# Final Summary

The Nigerian Pidgin Sentiment Analyzer demonstrates the complete development journey of a modern Artificial Intelligence application.

From collecting and processing Nigerian language data, training Machine Learning models, exposing predictions through a REST API, building an interactive frontend, and deploying the system online, this project represents a complete end-to-end AI product.

The application bridges the gap between Machine Learning research and practical user-facing technology by providing sentiment analysis capabilities for Nigerian Pidgin communication.

---

**Current Version:** v1.0.0

**Development Status:** Active

**Backend:** Production Ready

**Frontend:** Production Ready

**Machine Learning Pipeline:** Production Ready

**Last Updated:** August 2026
