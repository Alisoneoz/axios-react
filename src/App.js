import './App.css';
import Axios from "axios";


function App() {

  const getJoke = ()=> {
  Axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      console.log(response)
    })
}

  return (
    <div className="App">
      <div>
        <h1>Wanna read the Joke of the day?</h1>
        <button onClick={getJoke}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
