import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Features from './Features';
import Home from './Home';
import About from './About';
import Talk from './Talk';
import CountingDown from './CountingDown';
import Contact from './Contact';
import ParticlesPage from './ParticlesPage';
// import './Style.css';
import './New.css';


class App extends Component {
  state = {
    talkLoading : true,
    contactLoading : true,
    countingLoading : true,
    homeLoading : true,
    aboutLoading : true,
    featuresLoading :true,
    selectedItem : 0    
  }
  onChangeCarousel = (selectedItem) => {
    this.setState({
      selectedItem
    })
    if(selectedItem === 1){
      this.setState({
        aboutLoading : false,
        // featuresLoading :true,
        // talkLoading : true,
        // countingLoading : true,
        // contactLoading : true,
      })
    }
    else if(selectedItem === 2){
      this.setState({
        // aboutLoading : true,
        featuresLoading :false,
        // talkLoading : true,
        // countingLoading : true,
        // contactLoading : true,
      })
    }
    else if(selectedItem === 3){
      this.setState({
        // aboutLoading : true,
        // featuresLoading : true,
        talkLoading : false,
        // countingLoading : true,
        // contactLoading : true,
      })
    }
    else if(selectedItem === 4){
      this.setState({
        // aboutLoading : true,
        // featuresLoading : true,
        // talkLoading : true,
        countingLoading : false,
        // contactLoading : true,
      })
    }
    else if(selectedItem === 5){
      this.setState({
        // aboutLoading : true,
        // featuresLoading : true,
        // talkLoading : true,
        // countingLoading : true,
        contactLoading : false,
      })
    }
  }
  render(){ 
    const { talkLoading , contactLoading, countingLoading, aboutLoading, featuresLoading,selectedItem } = this.state
    return (
    <div>
      <ParticlesPage></ParticlesPage>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} swipeScrollTolerance={20} width='100%' useKeyboardArrows={true} transitionTime={200} infiniteLoop={true}
      onChange={this.onChangeCarousel.bind(this)} selectedItem = {selectedItem} thumbWidth ={200} emulateTouch={true} autoPlay={false}
      >
      <div>      
        <div className="backgroundLayout absolute">
          <Home/> 
        </div>
      </div>
      <div>
        <div className="backgroundAbout absolute">
          <About isrender = { aboutLoading } />
        </div>
      </div>
      <div>
        <div className="backgroundFeatures absolute">
          <Features isrender = { featuresLoading } />
        </div>
      </div>
      <div>
        <div className="backgroundTalk1 absolute">
        <Talk isrender = { talkLoading } />
        </div>
      </div>
      <div>
        <div className="backgroundCounting absolute">
          <CountingDown isrender = { countingLoading }/>
        </div>
      </div>
      <div>
        <div className="backgroundContact absolute">
            <Contact isrender = { contactLoading }/>
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
