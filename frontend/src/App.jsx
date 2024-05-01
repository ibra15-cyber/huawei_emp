import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import EmployeeDetails from "./screens/EmployeeDetails";
import Add from "./components/Add";
import AboutScreen from "./screens/AboutScreen";
import UpdateScreen from "./components/UpdateScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/add" element={<Add />} />
          <Route path="/more/:id" element={<EmployeeDetails />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/update" element={<UpdateScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
