import logo from "./logo.svg";
import "../src/scss/main.scss";
import "../src/temp/temp.sass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="wawa">
        <button className="buttonClass">Taki</button>
        <form>
          <label>Xyz</label>
          <input className="inputClass" type="text"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
