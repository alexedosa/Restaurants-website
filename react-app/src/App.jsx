import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import BurgerMenu from './components/BurgerMenu';
import Footer from './Components/Footer/Footer';
import Infinity from './Components/Infinity'
import './App.css';



function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Home />
        <BurgerMenu />
        <Infinity />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
