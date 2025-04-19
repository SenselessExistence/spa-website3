import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Services from './components/Services/services';
import PriceList from './components/PriceList/priceList';
import Gallery from './components/Gallery/gallery';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import TopButton from './components/TopButton/topButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Home/>
        <Services/>
        <PriceList/>
        <Gallery/>
        <Contact/>
        <Footer/>
        <TopButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
