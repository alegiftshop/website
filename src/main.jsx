
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Footer from './layout/Footer.jsx';
import TopBar from './layout/TopBar.jsx';
import Terms from './pages/Terms.jsx';

export default function Main(){
  return(
  <Router>
  <TopBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/terms' element={<Terms/>}/>
      
      </Routes>
    <Footer/>
  </Router>
  );
}
