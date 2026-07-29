# Nigerian Pidgin Sentiment Analyzer

A Machine Learning and Natural Language Processing (NLP) project that automatically classifies Nigerian Pidgin text into **Positive**, **Negative**, or **Neutral** sentiments.

This project is being developed as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project** and follows an end-to-end Machine Learning workflow—from data acquisition and preprocessing to feature engineering, model training, evaluation, and deployment.


# Project Objective

Millions of conversations are shared daily on social media in Nigerian Pidgin. However, most existing sentiment analysis systems are trained primarily on Standard English, making them less effective for understanding local expressions, slang, and cultural context.

The goal of this project is to develop an AI-powered sentiment analysis model specifically designed for Nigerian Pidgin that can accurately classify text into **Positive**, **Negative**, or **Neutral** sentiment categories.


# Problem Statement

Traditional sentiment analysis models struggle with Nigerian Pidgin because of:

* Local vocabulary
* Slang and abbreviations
* Informal spellings
* Code-mixed expressions
* Cultural context
* Social media writing styles

This project addresses these challenges by training a sentiment classifier on a manually annotated Nigerian Pidgin dataset.


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
│   └── data_cleaning_log.md
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
├── outputs/
├── src/
│
├── requirements.txt
├── .gitignore
└── README.md
```


# Project Progress


## Phase 1 — Product Discovery

* Project vision
* Problem identification
* Scope definition

**Status:** Completed


## Phase 2 — Requirements Analysis

* Functional requirements
* Non-functional requirements
* Success metrics

**Status:** Completed


## Phase 3 — Data Strategy & Machine Learning Design

* Dataset selection
* Machine Learning approach
* Evaluation strategy
* Model development planning

**Status:** Completed


## Phase 4 — Project Setup

* Repository creation
* Virtual environment
* Jupyter Notebook configuration
* Project structure
* Git initialization

**Status:** Completed


# Phase 5 — Data Engineering & Exploratory Data Analysis

## Completed

* Environment setup
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
* Exploratory Data Analysis
* Class distribution visualization
* Sentence length analysis
* Word frequency analysis
* Word Cloud generation
* Technical documentation

**Status:** Completed


# Phase 6 — Feature Engineering & Machine Learning Model Development

## Feature Engineering Completed

The processed Nigerian Pidgin dataset was transformed into machine-readable numerical features.

Implemented:

* Label Encoding

Sentiment classes were converted into numerical representations:

```
Negative → 0
Neutral  → 1
Positive → 2
```

* Train-Test Split

Dataset was divided into:

* Training data: 80%
* Testing data: 20%

Stratified splitting was applied to maintain class distribution.

* TF-IDF Vectorization

Text data was converted into numerical feature vectors using:

**Term Frequency-Inverse Document Frequency (TF-IDF)**

Configuration:

* Maximum features: 5,000


## Machine Learning Models Implemented

Three machine learning algorithms were trained and evaluated:

### 1. Multinomial Naive Bayes

A probabilistic classifier commonly used for text classification.

Strength:

* Efficient for high-dimensional text data.

Limitation:

* Showed bias towards the majority sentiment class.


### 2. Logistic Regression

A linear classification algorithm used as a strong baseline model.

Strength:

* Provided better balance between sentiment classes compared to Naive Bayes.


### 3. Linear Support Vector Machine (LinearSVC)

A machine learning algorithm optimized for high-dimensional sparse text features.

Strength:

* Performs well on TF-IDF based NLP classification tasks.
* Achieved the best overall balance between precision and recall.


# Model Evaluation

The models were evaluated using:

* Accuracy
* Precision
* Recall
* F1-score
* Classification Report
* Confusion Matrix


## Model Comparison Results

| Model | Accuracy | Precision | Recall | F1 Score |
|---|---:|---:|---:|---:|
| Multinomial Naive Bayes | 0.6598 | 0.7033 | 0.6598 | 0.5408 |
| Logistic Regression | 0.6448 | 0.6538 | 0.6448 | 0.6481 |
| LinearSVC | 0.6555 | 0.6456 | 0.6555 | 0.6505 |


# Final Model Selection

After evaluating all three models, **Linear Support Vector Machine (LinearSVC)** was selected as the final sentiment classification model.

Selection reason:

* Achieved the highest F1-score among all evaluated models.
* Provided the best balance between precision and recall.
* Performs effectively with TF-IDF based text classification.
* Better suited for handling sentiment classification with imbalanced classes.

Although Multinomial Naive Bayes achieved slightly higher accuracy, further analysis showed that it was heavily influenced by the majority Negative class and performed poorly on minority sentiment classes.


Selected Model:

**LinearSVC**


# Exported Model Artifacts

The final trained components were exported using Joblib for future prediction and deployment.

Generated files:

```text
models/
│
├── best_model.joblib
├── tfidf_vectorizer.joblib
└── label_encoder.joblib
```


## Artifact Description

| File | Purpose |
|---|---|
| best_model.joblib | Trained LinearSVC sentiment classification model |
| tfidf_vectorizer.joblib | Converts text input into TF-IDF numerical features |
| label_encoder.joblib | Converts numerical predictions back into sentiment labels |


# Documentation

Project documentation is available in the **docs/** folder.

Available documents:

* Dataset Acquisition Report
* Dataset Validation Report
* Data Cleaning Log


# Technologies

## Programming Language

* Python 3.14


## Libraries

* Pandas
* NumPy
* Scikit-learn
* NLTK
* Matplotlib
* WordCloud
* Joblib


## Development Tools

* Visual Studio Code
* Jupyter Notebook
* Git
* GitHub


# Machine Learning Workflow

* Dataset Acquisition
* Data Validation
* Data Preprocessing
* Exploratory Data Analysis
* Feature Engineering
* Machine Learning Model Development
* Model Evaluation
* Model Selection
* Model Export
* Model Deployment
* Web Application Development


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
* [x] Machine Learning Baseline Models
* [x] Model Evaluation
* [x] Model Selection
* [x] Model Artifact Export
* [ ] Hyperparameter Tuning
* [ ] Model Deployment
* [ ] API Development
* [ ] Streamlit Web Application


# Repository Status

## Current Milestone

**Day 2 Completed — Feature Engineering & Machine Learning Model Development**

Completed:

* Data validation
* Data preprocessing
* Exploratory Data Analysis
* Feature engineering
* TF-IDF vectorization
* Machine learning model training
* Model evaluation
* Model comparison
* Final model selection
* Model artifact export

Next milestone:

**Model Deployment Preparation**

Planned activities:

* Build inference pipeline
* Create prediction scripts
* Develop API integration
* Deploy sentiment analysis application


# Author

**Abideen Adenekan**

Backend Developer | AI/ML Engineer | 3MTT Fellow


**GitHub**

https://github.com/Habideen1


**LinkedIn**

https://www.linkedin.com/in/abideen-adenekan/


# License

This project is developed for educational, research, and portfolio purposes as part of the **3MTT AI/ML Capstone Project**.