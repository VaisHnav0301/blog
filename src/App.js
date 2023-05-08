import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Addblog from './component/Addblog';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Dashboard />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Addblog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
