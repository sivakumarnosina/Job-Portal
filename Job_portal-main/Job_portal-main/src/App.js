import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Registration';
import Loginpage from './Components/Signin';
import Home from './Components/navbar';
import { ToastContainer } from 'react-toastify';
import Studentlogin from './Components/Studentlogin';
import './Components/Register.css';


function App() {
  return (
    <div className="App">
     
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Registration' element={<Register/>}></Route>
          <Route path='/Signin' element={<Loginpage/>}></Route>
          <Route path='/Studentlogin' element={<Studentlogin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}    

export default App;
