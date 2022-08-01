import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Login from "./pages/Login";
import Stats from "./pages/Stats";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Stats />} />
    </Routes>
  );
}

export default App;
