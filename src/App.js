import './App.css';
import Canvas from './components/Canvas';
import {useState} from "react";
import Start from "./components/Start";

function App() {

 const [started, setStarted] = useState(false);
 const [buttonText, setButtonText] = useState("Start")



  return (
    <div className="App">
        {
           started && buttonText === "Start" ? <Canvas width={440} height={680}
                             setStarted={setStarted}
                             setButtonText={setButtonText}
                             started={started}/> :

               <Start started={started}
                             setStarted={setStarted}
                             buttonText={buttonText}
                             setButtonText={setButtonText}
               />

        }

    </div>
  );
}

export default App;
