

const Start = ({finished, setFinished}) => {


    return (
        <div className="start">
            <h1>Bean Machine</h1>
            <button onClick={() => setFinished(false)}>Start</button>
        </div>
    )
}

export default Start