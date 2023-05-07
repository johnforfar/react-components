import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Incrementer from './components/Incrementer/Incrementer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Components</h1>
        <Accordion />
        <Incrementer />
        <a
          className="App-link"
          href="https://johnforfar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Another Project by John Forfar
        </a>
      </header>
    </div>
  );
}

export default App;
