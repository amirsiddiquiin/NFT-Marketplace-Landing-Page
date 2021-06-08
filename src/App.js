import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import Corgib from './Components/Common/Corgib';
import WhyCorgib from './Components/Common/WhyCorgib';
import Marketplace from './Components/Common/Marketplace';
import Tokenomics from './Components/Common/Tokenomics';
import Roadmap from './Pages/Roadmap';
import Buy from './Pages/Buy';
import Footer from './Components/Common/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Corgib/>
     <WhyCorgib/>
     <Marketplace/>
     <Tokenomics/>
     <Roadmap/>
     <Buy/>
     <Footer/>
    </div>
  );
}

export default App;
