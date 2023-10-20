import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Main } from "./components/Main/Main";
import { Register } from './components/Register/Register';


function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    
  );
}

export default App;
