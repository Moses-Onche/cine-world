import { React, useEffect } from 'react';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=27e92d25'

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()

    console.log(data)
  }

  useEffect(() => {
    searchMovies('Iron man');
  }, [])
  return (
    <div className="App">
      <h1>Let's build this</h1>
    </div>
  );
}

export default App;
