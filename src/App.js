import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Routes.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;