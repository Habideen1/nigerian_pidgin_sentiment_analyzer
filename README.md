# Nigerian Pidgin Sentiment Analyzer

A Machine Learning and Natural Language Processing (NLP) project that automatically classifies Nigerian Pidgin text into **Positive**, **Negative**, or **Neutral** sentiments.

This project is being developed as part of the **3 Million Technical Talent (3MTT) AI/ML Capstone Project** and follows an end-to-end Machine Learning workflow—from data acquisition and preprocessing to model training, evaluation, and deployment.


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
│   └── 03_exploratory_data_analysis.ipynb
│
├── models/
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
* Model architecture planning

**Status:** Completed


## Phase 4 — Project Setup

* Repository creation
* Virtual environment
* Jupyter Notebook configuration
* Project structure
* Git initialization

**Status:** Completed


## Phase 5 — Data Engineering & Exploratory Data Analysis

### Completed

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
* Documentation

### Next

* Feature Engineering
* Machine Learning Baseline Models


# Documentation

Project documentation is available in the **docs/** folder.

* Dataset Acquisition Report
* Data Validation Report
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
* Hyperparameter Tuning
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
* [ ] Feature Engineering
* [ ] Machine Learning Baseline Models
* [ ] Model Evaluation
* [ ] Hyperparameter Tuning
* [ ] Model Deployment
* [ ] API Development
* [ ] Streamlit Web Application


# Repository Status

**Current Milestone**

**Day 1 Completed**

The project has successfully completed:

* Data validation
* Data preprocessing
* Exploratory Data Analysis
* Technical documentation

The next milestone is **Feature Engineering and Machine Learning Baseline Models**.

# Author

**Abideen Adenekan**

Backend Developer | AI/ML Engineer | 3MTT Fellow

**GitHub**

https://github.com/Habideen1

**LinkedIn**

https://www.linkedin.com/in/abideen-adenekan/


# License

This project is developed for educational, research, and portfolio purposes as part of the **3MTT AI/ML Capstone Project**.
