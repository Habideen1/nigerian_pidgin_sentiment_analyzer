# Nigerian Pidgin Sentiment Analyzer

A Machine Learning and Natural Language Processing (NLP) project that automatically classifies Nigerian Pidgin text into **Positive**, **Negative**, or **Neutral** sentiments.

This project is developed as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project** and follows an end-to-end Machine Learning workflow — from data acquisition, preprocessing, exploratory data analysis, feature engineering, model training, evaluation, model deployment preparation, API development, and frontend integration.

---

# Project Objective

Millions of conversations are shared daily on social media platforms in Nigerian Pidgin. However, most existing sentiment analysis systems are trained primarily on Standard English, making them less effective at understanding Nigerian expressions, slang, informal writing patterns, and cultural context.

The goal of this project is to develop an AI-powered sentiment analysis system specifically designed for Nigerian Pidgin that can classify text into:

* Positive
* Negative
* Neutral

---

# Problem Statement

Traditional sentiment analysis systems struggle with Nigerian Pidgin because of:

* Local vocabulary
* Slang and abbreviations
* Informal spellings
* Code-mixed expressions
* Cultural context
* Social media writing styles

This project addresses these challenges by training a machine learning classifier on an annotated Nigerian Pidgin sentiment dataset.

---

# Dataset

**Dataset:** NaijaSenti

**Language**

* Nigerian Pidgin (PCM)

**Files Used**

* `train.tsv`
* `dev.tsv`
* `test.tsv`

**Target Classes**

* Positive
* Negative
* Neutral

---

# Project Structure

```text
nigerian_pidgin_sentiment_analyzer/
│
├── dataset/
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
│   │
│   ├── config/
│   │   ├── settings.py
│   │   └── urls.py
│   │
│   ├── prediction/
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── preprocessing.py
│   │   ├── model_loader.py
│   │   └── inference.py
│   │
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── components/
│   │   │   ├── PredictionForm.jsx
│   │   │   ├── PredictionCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ErrorMessage.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   └── styles/
│   │       └── app.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── outputs/
├── requirements.txt
├── .gitignore
└── README.md
```

---

# Project Progress

## Phase 1 — Product Discovery

Completed:

* Project vision
* Problem identification
* Scope definition

**Status:** Completed

---

## Phase 2 — Requirements Analysis

Completed:

* Functional requirements
* Non-functional requirements
* Success metrics

**Status:** Completed

---

## Phase 3 — Data Strategy & Machine Learning Design

Completed:

* Dataset selection
* Machine learning approach
* Evaluation strategy
* Model development planning

**Status:** Completed

---

## Phase 4 — Project Setup

Completed:

* Repository creation
* Virtual environment
* Jupyter Notebook configuration
* Project structure
* Git initialization

**Status:** Completed

---

# Phase 5 — Data Engineering & Exploratory Data Analysis

Completed:

* Dataset acquisition
* Dataset loading
* Dataset validation
* Missing value analysis
* Duplicate analysis
* Duplicate removal
* Data type verification
* Label verification
* Text preprocessing
* Text normalization
* Tokenization
* Stopword removal
* Processed dataset generation
* Class distribution visualization
* Sentence length analysis
* Word frequency analysis
* Word Cloud generation
* Technical documentation

**Status:** Completed

---

# Phase 6 — Feature Engineering & Machine Learning Model Development

## Feature Engineering

The processed Nigerian Pidgin dataset was transformed into numerical features suitable for machine learning.

Implemented:

### Label Encoding

```
Negative → 0
Neutral  → 1
Positive → 2
```

### Train-Test Split

Dataset split:

* Training data: 80%
* Testing data: 20%

A stratified split was applied to maintain class distribution.

### TF-IDF Vectorization

Text data was converted into numerical feature vectors using:

**Term Frequency-Inverse Document Frequency (TF-IDF)**

Configuration:

* Maximum features: 5,000

---

# Machine Learning Models Implemented

Three classification algorithms were trained and evaluated:

## 1. Multinomial Naive Bayes

Strength:

* Efficient for high-dimensional text data.

Limitation:

* Biased towards majority sentiment class.

---

## 2. Logistic Regression

Strength:

* Strong baseline model.
* Better class balance compared to Naive Bayes.

---

## 3. Linear Support Vector Machine (LinearSVC)

Strength:

* Performs effectively with TF-IDF based NLP classification.
* Achieved the highest F1-score among evaluated models.

---

# Model Evaluation

Evaluation metrics:

* Accuracy
* Precision
* Recall
* F1-score
* Classification Report
* Confusion Matrix

## Model Comparison Results

| Model                   | Accuracy | Precision | Recall | F1 Score |
| ----------------------- | -------: | --------: | -----: | -------: |
| Multinomial Naive Bayes |   0.6598 |    0.7033 | 0.6598 |   0.5408 |
| Logistic Regression     |   0.6448 |    0.6538 | 0.6448 |   0.6481 |
| LinearSVC               |   0.6555 |    0.6456 | 0.6555 |   0.6505 |

---

# Final Model Selection

The final selected model is:

## Linear Support Vector Machine (LinearSVC)

Reasons:

* Highest F1-score among evaluated models.
* Better balance between precision and recall.
* Suitable for TF-IDF based sentiment classification.
* Better performance on minority sentiment classes compared with Naive Bayes.

---

# Exported Model Artifacts

Generated files:

```text
models/

├── best_model.joblib
├── tfidf_vectorizer.joblib
└── label_encoder.joblib
```

| File                    | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| best_model.joblib       | Trained LinearSVC sentiment classifier          |
| tfidf_vectorizer.joblib | Converts text into numerical TF-IDF features    |
| label_encoder.joblib    | Converts predictions back into sentiment labels |

---

# Phase 7 — Backend API Development (Django REST Framework)

The trained machine learning model was integrated into a Django REST API to allow external applications to consume sentiment predictions.

Implemented:

* Django project setup
* Django REST Framework configuration
* Prediction application
* Model loading system
* Text preprocessing pipeline
* Inference pipeline
* REST API endpoint
* Input validation
* Error handling
* API testing

---

# API Architecture

Prediction flow:

```
User Input

↓

Django REST API

↓

Serializer Validation

↓

Text Preprocessing

↓

TF-IDF Transformation

↓

LinearSVC Prediction

↓

Label Decoding

↓

JSON Response
```

---

# Prediction API

## Endpoint

```
POST /api/v1/predict/
```

## Request

```json
{
    "text": "dis movie sweet die"
}
```

## Response

```json
{
    "success": true,
    "message": "Prediction completed successfully.",
    "data": {
        "text": "dis movie sweet die",
        "prediction": "positive"
    }
}
```

---

# Phase 8 — Frontend Application Development (React)

A React frontend application was created to provide users with a simple interface for interacting with the sentiment analysis API.

Implemented:

* React application setup using Vite
* Axios API integration
* Prediction form
* Prediction result display
* Loading state
* Error handling
* Responsive UI design
* API communication

---

# Frontend Architecture

```
User Input

↓

React Prediction Form

↓

Axios Request

↓

Django REST API

↓

Machine Learning Pipeline

↓

Prediction Response

↓

Prediction Card Display
```

---

# Frontend Components

## PredictionForm.jsx

Handles:

* User text input
* API requests
* Loading state management

## PredictionCard.jsx

Handles:

* Sentiment result display
* User-friendly feedback

## Loader.jsx

Handles:

* Prediction processing state

## ErrorMessage.jsx

Handles:

* Validation errors
* API failures

---

# Technologies

## Programming Language

* Python
* JavaScript

## Machine Learning & NLP

* Pandas
* NumPy
* Scikit-learn
* NLTK
* Matplotlib
* WordCloud
* Joblib

## Backend Development

* Django
* Django REST Framework
* REST API
* CORS Headers

## Frontend Development

* React.js
* Vite
* Axios
* CSS

## Development Tools

* Visual Studio Code
* Jupyter Notebook
* Postman
* Git
* GitHub

---

# End-to-End AI Application Workflow

* Dataset Acquisition
* Data Validation
* Data Preprocessing
* Exploratory Data Analysis
* Feature Engineering
* Model Training
* Model Evaluation
* Model Selection
* Model Export
* Django REST API Development
* API Testing
* React Frontend Development
* User Interface Integration
* Deployment

---

# Project Roadmap

* [x] Product Discovery
* [x] Requirements Analysis
* [x] Data Strategy & ML Design
* [x] Project Setup
* [x] Dataset Acquisition
* [x] Data Validation
* [x] Data Preprocessing
* [x] Exploratory Data Analysis
* [x] Feature Engineering
* [x] Machine Learning Model Development
* [x] Model Evaluation
* [x] Model Selection
* [x] Model Artifact Export
* [x] Django REST API Development
* [x] API Validation & Error Handling
* [x] React Frontend Development
* [x] API Integration
* [x] User Interface Implementation
* [ ] Deployment
* [ ] Production Environment Configuration
* [ ] Final Demo Preparation

---

# Repository Status

## Current Milestone

# Day 4 Completed — Full Stack AI Application Interface

Completed:

* Machine Learning pipeline
* Model training and evaluation
* Model artifact export
* Django backend API
* Prediction endpoint
* Input validation
* Error handling
* React frontend
* API integration
* User interface development

Current system contains:

✅ Trained ML Model
✅ Exported Model Artifacts
✅ Django REST API
✅ Prediction Endpoint
✅ React Frontend Application
✅ End-to-End Sentiment Prediction Workflow

Next milestone:

# Deployment Preparation

Planned:

* Deploy Django API
* Deploy React frontend
* Configure production environment variables
* Connect frontend to production API
* Prepare final 3MTT demonstration

---

# Author

**Abideen Adenekan**

Backend Developer | AI/ML Engineer | 3MTT Fellow

GitHub:

https://github.com/Habideen1

LinkedIn:

https://www.linkedin.com/in/abideen-adenekan/

---

# License

This project is developed for educational, research, and portfolio purposes as part of the **3MTT AI/ML Capstone Project**.
