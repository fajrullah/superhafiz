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
import img from './images/header-background.jpg';
import ParticlesPage from './ParticlesPage';
class App extends Component {
  render(){ 
  return (
    
  <div className="backgroundImage">
    <ParticlesPage></ParticlesPage>
    <AliceCarousel
      duration={400}
      mouseDragEnabled={true}
      infinite={true}
      keyboardNavigation={true}
      fadeOutAnimation={true}
      buttonsDisabled={true}>
      <div className="item" id="Home"><Home/></div>
      <div className="item" id="About"><About/></div>
      <div className="item" id="Features"><Features/></div>
      <div className="item" id="Talk"><Talk/></div>
      <div className="item" id="CountingDown"><CountingDown/></div>
      <div className="item" id="Contact"><Contact/></div>
    </AliceCarousel>
  </div>
  );
  }
}
export default App;
