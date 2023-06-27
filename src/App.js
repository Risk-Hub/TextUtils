import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <TextForm heading="Enter your text below"/>
      </div>
    </>
  );
}

export default App;
