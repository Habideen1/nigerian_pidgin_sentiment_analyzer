from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent.parent

MODEL_DIR = BASE_DIR / "models"

MODEL_PATH = MODEL_DIR / "best_model.joblib"
VECTORIZER_PATH = MODEL_DIR / "tfidf_vectorizer.joblib"
LABEL_ENCODER_PATH = MODEL_DIR / "label_encoder.joblib"


model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)
label_encoder = joblib.load(LABEL_ENCODER_PATH)



