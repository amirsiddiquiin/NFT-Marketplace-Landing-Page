import React from 'react';
import Corgib from './Corgib';
import WhyCorgib from './WhyCorgib';
import Marketplace from './Marketplace';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import Footer from './Footer';
import Home from './Home';
import Buy from './Buy';


function LandingPage() {
  return (
    <div>
     <Home/>
     <Corgib/>
     <WhyCorgib/>
     <Marketplace/>
     <Tokenomics/>
     <Roadmap/>
     <Buy/>
     <Footer/>
    </div>
  )
}

export default LandingPage
