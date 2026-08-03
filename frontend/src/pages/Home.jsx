import PredictionForm from "../components/PredictionForm";


function Home(){

    return (

        <div className="container">

            <div className="card">


                <h1 className="title">

                    🇳🇬 Nigerian Pidgin
                    <br/>
                    Sentiment Analyzer

                </h1>


                <p className="subtitle">

                    Analyze Nigerian Pidgin text
                    using Machine Learning.

                </p>


                <PredictionForm />


            </div>


        </div>

    );

}


export default Home;