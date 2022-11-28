
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Contact from './components/Contact/Contact';
import Journey from './components/Journey/Journey';
import Team from './components/Team/Team';
import Store from './components/Store/Store';
import Product from './components/Store/Product/Product';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/journey' element={<Journey/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/product/:pid' element={<Product/>} />
      </Routes>

      
      
    </div>
  );
}

export default App;
