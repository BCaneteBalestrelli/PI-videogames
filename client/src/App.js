import React from 'react';
import { Route, Routes, useLocation} from "react-router-dom";
import Landing from './views/landing/landing.component';
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Form from './views/form/form.component';
import "./App.css";
import Navbar from './components/navbar/navbar.component';

function App() {
  const location = useLocation();
  return (
    
    <div className='App'>
       {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
