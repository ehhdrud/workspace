import "./App.css";
import { HeaderA, HeaderB, HeaderC } from "./component/Header";
// import Header from "./component/(ex)Header_dot";
// import Header from "./component/(ex)Header_props";

function App() {
  return (
    <div className="App" tabIndex="0">
      <HeaderA />
      <HeaderB />
      <HeaderC />

      {/* <Header.A />
      <Header.B />
      <Header.C /> */}

      {/* <Header title={"Learn React A"} />
      <Header title={"Learn React B"} />
      <Header title={"Learn React C"} /> */}

      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;
