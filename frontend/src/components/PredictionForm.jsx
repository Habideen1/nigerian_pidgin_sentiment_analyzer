import { useState } from "react";
import api from "../api/axios";

import PredictionCard from "./PredictionCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";




function PredictionForm() {
    const [text, setText] = useState("");
    const [prediction, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setPrediction("");

        if (!text.trim()) {
            setError("Please enter some Nigerian Pidgin text.");
            return;
        }

        try {
            setLoading(true);

        await new Promise(
            resolve => setTimeout(resolve, 3000)
             );

            const response = await api.post(
                "/predict/",
                {
                    text: text,
                }
            );

            setPrediction(
                response.data.data.prediction
            );

        } catch (err) {

            if (err.response) {

                setError(
                    err.response.data.message
                );

            } else {

                setError(
                    "Unable to connect to the prediction server."
                );

            }

        } finally {

            setLoading(false);

        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <textarea
                rows="8"
                placeholder="Enter Nigerian Pidgin text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br />
            <br />

            <button
                type="submit"
                disabled={loading}
            >
                Predict Sentiment
            </button>

            {
                loading && <Loader/>
            }

           <ErrorMessage message={error}/>

            <PredictionCard 
                prediction={prediction}
            />

        </form>
    );
}

export default PredictionForm;