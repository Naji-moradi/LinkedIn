// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
