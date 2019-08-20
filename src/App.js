import React, { Component } from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Home from './Home';
import About from './About';
import Features from './Features';
import Talk from './Talk';
import CountingDown from './CountingDown';
import Contact from './Contact';
import ParticlesPage from './ParticlesPage';
import Game from './Game';
class App extends Component {

  render(){ 
  return (
    
  <div className="backgroundImage">
    <ParticlesPage></ParticlesPage>
    <AliceCarousel
      
      duration={400}
      dotsDisable={true}
      mouseDragEnabled={true}
      infinite={true}
      keyboardNavigation={true}
      fadeOutAnimation={false}
      buttonsDisabled={false}
      autoHeight={false}
      showSlideInfo={false}
      preventEventOnTouchMove={true}
      >
      <div className="item" id="Home"><Home/></div>
      <div className="item" id="About"><About/></div>
      <div className="item" id="Features"><Features/></div>
      <div className="item" id="Talk"><Talk/></div>
      <div className="item" id="CountingDown"><CountingDown/></div>
      <div className="item" id="Contact"><Contact/></div>
      <div className="item" id="Contact"><Game/></div>
    </AliceCarousel>
  </div>
  );
  }
}
export default App;
