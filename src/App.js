import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
