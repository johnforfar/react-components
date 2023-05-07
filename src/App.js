import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Accordion from './components/accordion/Accordion';
import Incrementer from './components/Incrementer/Incrementer';

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch("http://aws-node-api-service-env.eba-zrwamzkc.ap-southeast-2.elasticbeanstalk.com/addUser", {
        method: "PUT",
        body: JSON.stringify({
          name: name,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setName("");
        setMessage("User created successfully");
        alert('success');
      } else {
        setMessage("Some error occured");
        alert('error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <div className='Main-input'>
          <h1>React Input</h1>

            <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />

            <button type="submit">Create</button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
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
