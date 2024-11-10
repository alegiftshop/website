
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './layout/Footer.jsx';
import TopBar from './layout/TopBar.jsx';

export default function Main(){
  return(
  <BrowserRouter>
    <TopBar/>
    <Home/>
    <Footer/>
  </BrowserRouter>
  );
}
