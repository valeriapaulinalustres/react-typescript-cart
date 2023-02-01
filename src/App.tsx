import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/views/Home';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  );
}

export default App;
