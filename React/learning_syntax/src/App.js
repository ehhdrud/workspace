import logo from "./logo.svg";
import "./App.css";

function App() {
  // const message = (name) => {
  //   if (name === "dongkyeong") return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };
  const name = "seodongkyeong";
  const count = 0;

  return (
    <div className="App" tabIndex="0">
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
          {
            /* {message("Zerobase")} */
            // name === "dongkyeong"
            //   ? `Hello, ${name}! Learn React`
            //   : `Welcome, ${name}! Learn React`
            (name === "dongkyeong" && `Hello, ${name}! Learn React`) ||
              `Welcome, ${name}! Learn React`
          }
          <div>{count && <h1>Messages: {count}</h1>}</div>
        </a>
      </header>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;
