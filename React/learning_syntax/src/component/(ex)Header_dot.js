// Header 컴포넌트를 다음과 같이 표현할 수도 있다.
import logo from "../logo.svg";

const name = "seodongkyeong";
const count = 0;

const Header = {
  A: function A() {
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
            {(name === "dongkyeong" && `Hello, ${name}! Learn React A`) ||
              `Welcome, ${name}! Learn React A`}
            <div>{count && <h1>Messages: {count}</h1>}</div>
          </a>
        </header>
      </div>
    );
  },
  B: function B() {
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
  },
  C: function C() {
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
  },
};
export default Header;
