function PredictionCard({prediction}) {


    if(!prediction){
        return null;
    }


    const styles = {

        positive:{
            emoji:"😊",
            color:"#16a34a",
            message:
            "This text expresses a positive sentiment."
        },


        negative:{
            emoji:"😞",
            color:"#dc2626",
            message:
            "This text expresses a negative sentiment."
        },


        neutral:{
            emoji:"😐",
            color:"#6b7280",
            message:
            "This text expresses a neutral sentiment."
        }

    };


    const result =
    styles[prediction.toLowerCase()];


    return (

        <div
            style={{

                marginTop:"30px",

                padding:"25px",

                borderRadius:"12px",

                textAlign:"center",

                border:
                `2px solid ${result.color}`

            }}
        >

            <h2>
                Prediction Result
            </h2>


            <h1
            style={{
                color:result.color
            }}
            >

                {result.emoji}
                {" "}
                {prediction}

            </h1>


            <p>
                {result.message}
            </p>


        </div>

    );


}


export default PredictionCard;