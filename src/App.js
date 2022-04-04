import './App.css';
import Canvas from './components/Canvas';
import {useState} from "react";
import Start from "./components/Start";

function App() {

 const [finished, setFinished] = useState(false);
 const [started, setStarted] = useState(false)

   console.log( "finished : ", finished);

  return (
    <div className="App">
        {finished ? <Start finished={finished} setFinished={setFinished}/> :
            <Canvas width={440} height={680}
                    finished={finished} setFinished={setFinished}/>
        }
    </div>
  );
}

export default App;
