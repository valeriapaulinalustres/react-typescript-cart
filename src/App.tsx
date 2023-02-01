import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/views/Home';
import Packaging from '../src/views/Packaging';
import Drinkware from '../src/views/Drinkware';
import Apparel from '../src/views/Apparel';
import Notebooks from '../src/views/Notebooks';
import Backpacks from '../src/views/Backpacks';
import Cart from '../src/views/Cart';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/drinkware" element={<Drinkware />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/backpacks" element={<Backpacks />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
