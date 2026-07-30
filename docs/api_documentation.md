# Nigerian Pidgin Sentiment Analyzer API Documentation

## Overview

The Nigerian Pidgin Sentiment Analyzer API provides a RESTful interface for predicting the sentiment of Nigerian Pidgin text.

The API exposes the trained Machine Learning model through a Django REST Framework backend and allows external applications to send Nigerian Pidgin text and receive sentiment predictions.

The model classifies input text into three sentiment categories:

* Positive
* Negative
* Neutral

---

# API Base Information

## Technology Stack

Backend:

* Django
* Django REST Framework

Machine Learning:

* Linear Support Vector Machine (LinearSVC)
* TF-IDF Vectorizer
* Label Encoder

## API Version

Version:

```
v1
```

---

# Prediction Endpoint

## Predict Sentiment

### Endpoint

```
POST /api/v1/predict/
```

### Description

Receives Nigerian Pidgin text, processes the input through the preprocessing pipeline, transforms the text using TF-IDF vectorization, passes it through the trained LinearSVC model, and returns the predicted sentiment.

---

# Request

## Headers

```http
Content-Type: application/json
```

## Request Body

The API accepts a JSON object containing a text field.

### Example Request

```json
{
    "text": "dis movie sweet die"
}
```

---

# Response

## Successful Prediction

### Status Code

```
200 OK
```

### Response Example

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

## Response Fields

| Field           | Type    | Description                                  |
| --------------- | ------- | -------------------------------------------- |
| success         | Boolean | Indicates whether the request was successful |
| message         | String  | API response message                         |
| data.text       | String  | Original input text                          |
| data.prediction | String  | Predicted sentiment label                    |

---

# Validation Errors

## Missing Text Field

### Request

```json
{}
```

### Response

Status Code:

```
400 Bad Request
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

## Empty Text Input

### Request

```json
{
    "text": ""
}
```

### Response

Status Code:

```
400 Bad Request
```

Response:

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": {
        "text": [
            "This field may not be blank."
        ]
    }
}
```

---

## Invalid Data Type

The API expects text input to be a string.

### Request

```json
{
    "text": 12345
}
```

### Response

Status Code:

```
400 Bad Request
```

Response:

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": {
        "text": [
            "Text input must be a string."
        ]
    }
}
```

---

# Internal Server Errors

If an unexpected error occurs during preprocessing, vectorization, or prediction, the API returns:

Status Code:

```
500 Internal Server Error
```

Response:

```json
{
    "success": false,
    "message": "An unexpected error occurred while processing the prediction."
}
```

---

# Prediction Pipeline

The API follows this workflow:

```
User Input

    ↓

Request Validation

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
```

---

# Machine Learning Artifacts

The API loads the following trained artifacts:

```
models/

├── best_model.joblib
├── tfidf_vectorizer.joblib
└── label_encoder.joblib
```

## Artifact Description

| Artifact                | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| best_model.joblib       | Trained LinearSVC sentiment classification model     |
| tfidf_vectorizer.joblib | Converts text into numerical TF-IDF features         |
| label_encoder.joblib    | Converts numerical predictions into sentiment labels |

---

# Example Predictions

## Positive Sentiment

Input:

```json
{
    "text": "this food sweet die"
}
```

Prediction:

```json
{
    "prediction": "positive"
}
```

---

## Negative Sentiment

Input:

```json
{
    "text": "this thing no make sense at all"
}
```

Prediction:

```json
{
    "prediction": "negative"
}
```

---

## Neutral Sentiment

Input:

```json
{
    "text": "the meeting dey happen tomorrow"
}
```

Prediction:

```json
{
    "prediction": "neutral"
}
```

---

# Testing

The API was tested using:

* Postman
* Django REST Framework browsable API

Testing covered:

* Valid prediction requests
* Missing fields
* Empty input
* Invalid data types
* Internal error handling

---

# Future Improvements

Planned improvements:

* Add prediction confidence score
* Improve handling of minority sentiment classes
* Perform hyperparameter tuning
* Deploy API publicly
* Build user interface
* Add authentication and rate limiting

---

# Author

**Abideen Adenekan**

Backend Developer | AI/ML Engineer | 3MTT Fellow

GitHub:

https://github.com/Habideen1

LinkedIn:

https://www.linkedin.com/in/abideen-adenekan/
