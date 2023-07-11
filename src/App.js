import './App.css';
import { Route, Routes } from "react-router-dom"

import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Login from './views/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Login />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
