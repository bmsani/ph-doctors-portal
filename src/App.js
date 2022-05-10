import logo from './logo.svg';
import './App.css';
import Header from './component/Pages/Header/Header';
import Footer from './component/Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';
import Appointment from './component/Pages/Appointment/Appointment';
import Reviews from './component/Pages/Reviews/Reviews';
import ContactUs from './component/Pages/ContactUs/ContactUs';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';
import NotFound from './component/Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
