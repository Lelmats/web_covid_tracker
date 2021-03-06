import './App.css';
import Landpage from './components/views/Landpage';
import InicioSesion from './components/views/InicioSesion';
import RecuperarContrase├▒a from './components/views/RecuperarContrase├▒a';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/inicioS" element={<InicioSesion />} />
          <Route path="/Recover" element={<RecuperarContrase├▒a />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
