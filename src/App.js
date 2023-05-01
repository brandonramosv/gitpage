import React from 'react';
import logo from './logo.svg';
import './App.css';

const baseURL = process.env.PUBLIC_URL

function App() {
  const [count, setCount] = React.useState(1)
  console.log(baseURL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try webhook
        </a>
      </header>
    </div>
  );
}

export default App;
