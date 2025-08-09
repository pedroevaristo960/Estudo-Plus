import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Disciplinas from './pages/Disciplinas';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Card from './components/Card';
import RequireAuth from './components/RequireAuth'; 
import Schedule from './pages/Schedule';
import Hourly from './pages/Hourly';
import Nerdola from './pages/Nerdola';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/addSubjects" element={<Card />} />
        <Route element={<Layout />} />
          <Route path='/home' element={<RequireAuth page={<Home/>}/>} />
          <Route path="/disciplinas" element={<RequireAuth page={<Disciplinas />}/>} />
          <Route path="/horario" element={<RequireAuth page={<Schedule />} />} />
        <Route path="/addSubjects" element={<Card />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/horario" element={<Hourly />} />
          <Route path="/nerdola" element={<Nerdola />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
