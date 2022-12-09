import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  const [joke, setJoke]= useState([]);

  const getJoke = ()=> {
  Axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      setJoke(`${response.data.setup} ...  ${response.data.punchline}`)
    })
}

console.log(joke)

  return (
    <div className="App">
      
      <div>
        <h1>Wanna read the Joke of the day?</h1>
        
        <div className='btn'>
          <button onClick={getJoke}>Click Me</button>
        </div>
        
        <br />
        <div className='joke'>
          {joke}
        </div>
        
      </div>
    </div>
  );
}

export default App;
