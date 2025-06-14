import logo from './logo.svg';
import './App.css';
import StartHostButton from './components/StartHostButton.js'

function App() {

  return (
    <div className="App">
      <header>
        <title>CoQueue</title>
      </header>
      <header className="App-header">
        <h1>
          CoQueue: A Cross-Platform Shared Music Queue
        </h1>
        <StartHostButton sessID="123"/>
      </header>
    </div>
  );
}

export default App;
