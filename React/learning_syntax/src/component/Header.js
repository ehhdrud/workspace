import logo from "../logo.svg";

// const message = (name) => {
//   if (name === "dongkyeong") return `Hello, ${name}! Learn React`;
//   return `Welcome, ${name}! Learn React`;
// };
const name = "seodongkyeong";
const count = 0;

export function HeaderA() {
  return (
    <div>
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

            /* const message = (name) => {
            if (name === "dongkyeong") return `Hello, ${name}! Learn React`;
            return `Welcome, ${name}! Learn React`;
            }; */

            /* name === "dongkyeong"
               ? `Hello, ${name}! Learn React`
               : `Welcome, ${name}! Learn React` */

            (name === "dongkyeong" && `Hello, ${name}! Learn React A`) ||
              `Welcome, ${name}! Learn React A`
          }
          <div>{count && <h1>Messages: {count}</h1>}</div>
        </a>
      </header>
    </div>
  );
}

export function HeaderB() {
  return (
    <div>
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
          {(name === "dongkyeong" && `Hello, ${name}! Learn React B`) ||
            `Welcome, ${name}! Learn React B`}
          <div>{count && <h1>Messages: {count}</h1>}</div>
        </a>
      </header>
    </div>
  );
}

export function HeaderC() {
  return (
    <div>
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
          {(name === "dongkyeong" && `Hello, ${name}! Learn React C`) ||
            `Welcome, ${name}! Learn React C`}
          <div>{count && <h1>Messages: {count}</h1>}</div>
        </a>
      </header>
    </div>
  );
}
