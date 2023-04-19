import SingleForm from "./components/SingleForm";
import NameForm from "./components/NameForm";
import Login from "./components/Login";
import UncontrolledForm from "./components/UncontrolledForm";
import CatParent from "./components/CatParent";
import CallbackCatParent from "./components/CallbackCatParent";

function App() {
  return (
    <div>
      <SingleForm />
      <NameForm />
      <Login />
      <UncontrolledForm />
      <CatParent />
      <CallbackCatParent />
    </div>
  );
}

export default App;
