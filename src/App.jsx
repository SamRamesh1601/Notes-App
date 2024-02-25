import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import AddNote from "./Pages/AddNote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="d-flex view-page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnote" element={<AddNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
