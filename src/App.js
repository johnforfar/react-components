import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Incrementer from './components/Incrementer/Incrementer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
      </header>
      <main>
        <div className='Main-input'>
          <h1>React Input</h1>
          <form>
            <fieldset>
              <label htmlFor="name">Name:
                <input type="text" id="name" name="name" />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="Main-components">
      <h1>React Components</h1>
        <Accordion />
        <Incrementer />
        </div>
      </main>

      <footer className="footer">
        <div>
        <p>Another Project by <a
          className="App-link"
          href="https://johnforfar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           John Forfar
        </a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
