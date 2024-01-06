import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* 라우팅 */}
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
