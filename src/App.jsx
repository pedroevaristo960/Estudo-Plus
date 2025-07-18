import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Disciplinas from './pages/Disciplinas';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Card from './components/Card';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addSubjects" element={<Card />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
