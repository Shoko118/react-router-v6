import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Views from "./Views/Views";

function App() {
  return (
    <div className="App">
      <Router>
        <Views />
      </Router>
    </div>
  );
}

export default App;
