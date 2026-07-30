import re
import string
 


def preprocess_text(text: str) -> str:
    """
    Clean incoming text before prediction
    """

    text = text.lower()
    text = re.sub(r"http\S+|www\S+", "", text)
    text = re.sub(r"@\w+", "", text)
    text = re.sub(r"#", "", text)
    text = re.sub(r"\d+", "", text)
    text = text.translate(
            str.maketrans("", "", string.punctuation)
        )
    text = re.sub(r"\s+", " ", text).strip()

    return text

