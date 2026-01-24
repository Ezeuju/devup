import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Sreens/Homepage';
import BoardSection from './Component/BoardSection';
import Advisory from './Component/Advisory';
import About from './Component/About';
import OurExpress from './Component/OurExpress';
import Gallery from './Component/Gallery';
import Register from './Component/Register';
import Contact from './Component/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/board' element={<BoardSection/>}/>
        <Route path='/advisory' element={<Advisory/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ourexpress' element={<OurExpress/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
       


      </Routes>
    </div>
  );
}

export default App;
