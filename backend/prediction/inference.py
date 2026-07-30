from prediction.preprocessing import preprocess_text
from prediction.model_loader import(
    model, 
    vectorizer, 
    label_encoder,
)


def predict_sentiment(text: str) -> str:
    """
        Predict the sentiment of Nigerian Pidgin text. 
    """

    cleaned_text = preprocess_text(text)
    text_vector = vectorizer.transform([cleaned_text])
    prediction = model.predict(text_vector)
    sentiment = label_encoder.inverse_transform(prediction)

    return sentiment[0]