function ErrorMessage({ message }) {

    if (!message) {
        return null;
    }


    return (

        <div
            style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid red",
                color: "red"
            }}
        >

            <strong>
                Error:
            </strong>

            {" "}

            {message}

        </div>

    );

}


export default ErrorMessage;