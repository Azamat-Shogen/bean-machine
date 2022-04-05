const Start = ({setStarted, buttonText, setButtonText}) => {

     const handleClick = () => {
          setStarted(true)
          setButtonText("Start")
     }

    return (
        <div className="start">
            <h1>Bean Machine</h1>
            {buttonText === "Restart" && <h2>Game Over!</h2>}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default Start