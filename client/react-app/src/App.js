import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

function App() {
  const isLoading = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('https://mocki.io/v1/265648af-c510-4308-9715-4b8cd050676c'),
      timeout(1000)
    ]).then(([response]) => setUser(response.data.user));
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <header className="App-header">
          <svg
            fill="white"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="vertical"
              x="32"
              y="12"
              width="16"
              height="56"
              rx="1.5"
            />
            <rect
              className="horizontal"
              x="12"
              y="32"
              width="56"
              height="16"
              rx="1.5"
            />
          </svg>
        </header>
      ) : (
        <header className="App-header">
          <p>Congratulations, user: {user} logged in</p>
        </header>
      )}
    </div>
  );
}

export default App;
