import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Disciplinas from "./pages/Disciplinas";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/biblioteca" element={<Register />} />
        <Route path="/login" element={<Login />} />
       </Route>
         
        
      </Routes>
    </BrowserRouter>
  );
}
