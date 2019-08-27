import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Home from './Home';
import About from './About';
import Features from './Features';
import Talk from './Talk';
import CountingDown from './CountingDown';
// import Contact from './Contact';
import ParticlesPage from './ParticlesPage';
// import Game from './Game';
import bg from './images/background.png';
// import bg_about from './images/bg_about1.png';
class App extends Component {

  render(){ 
    return (
    
  <div>
    <ParticlesPage></ParticlesPage>
    <Carousel  showArrows={false} showStatus={false} showThumbs={false} width='100%' useKeyboardArrows={true} infiniteLoop={true}>
    <div>      
      <div className="backgroundLayout">
        <Home/> 
      </div>
    </div>
    <div>
      <div className="backgroundAbout">
        <About/>
      </div>
    </div>
    <div>
      <div className="backgroundLayout">
        <Features/>
      </div>
    </div>
    <div>
      <div className="backgroundTalk1">
        <Talk/>
      </div>
    </div>
    <div>
      <div className="backgroundLayout">
        <CountingDown/>
      </div>
    </div>
    <div>
      <div>
        <img src={bg} alt="contact"/>
      </div>
    </div>
  </Carousel>
    {/* <AliceCarousel  
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
      className="backgroundAlice"
      >
      <div className="item backgroundHome" id="Home"><Home/></div>
      <div className="item backgroundAbout" id="About"><About/></div>
      <div className="item backgroundFeatures" id="Features"><Features/></div>
      <div className="item backgroundTalk" id="Talk"><Talk/></div>
      <div className="item backgroundCountingdown" id="CountingDown"><CountingDown/></div>
      <div className="item backgroundContact" id="Contact"><Contact/></div>
      <div className="item backgroundGame" id="Game"><Game/></div>
    </AliceCarousel> */}
  </div>
  );
  }
}
export default App;
