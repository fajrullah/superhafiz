import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
// import planet_ungu from './images/planet-ungu.png';
// import planet_orange from './images/planet-orange.png';
// import awan_depan from './images/awan_tengah.png';
// import awan_tengah from './images/awan_depan.png';
// import hafiz from './images/hafiz_3d.png';
// import button from './images/button_hafiz.png';
// import hand from './images/hand.png';
// import hafiznew from './images/hafiz_new.png';
// import bg_awan from './images/bg_cloud.png';
// import HAFIZAI from './images/HAFIZAI_hand.png';
// import Sound from 'react-sound';
// import palaHafiz from './images/kepala-hafiz.png';
// import chat1 from './images/chat1.png';
// import chat2 from './images/chat2.png';
// import chat3 from './images/chat3.png';
// import chat4 from './images/chat4.png';

class Talk extends Component{
  // constructor(props) {
  //   super(props); 
  // }
  
  render() {
    // console.log(Sound.status.PLAYING)
    // const imageClick = () => {
    //   console.log('Click');
    // } 
    return (
      <Container>
        {/* <Row className="row_title">
          <Col></Col>
          <Col>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <img src={hafiznew} className="hafiz_talk" alt="orange planet in page about"/>
            <img src={button} className="button_talk" alt="orange planet in page about" onClick={() => imageClick()} style={{"pointer-events": "all"}}/>
            <img src={hand} className="hand_talk" alt="orange planet in page about" />
          </Col>
          <Col>
          <div className="talk_text">
            
          </div>
          </Col>
          <Col>
          </Col> */}
          {/* <Sound
            url="./SoundEffect.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}/> */}
          {/* <Col className="ripple-wrapper">
            <div className="request-loader">
              <span>
                <img src={HAFIZAI} style={{width:97+'%'}} alt="slide 4"/>
              </span>
            </div>
          </Col> */}
          {/* <Col style={{textAlign:'right', color:'#fff', marginTop:10 + '%'}}>
            <img src={chat1} style={{width:30+'%', height:'auto'}} alt="chat 1" className="textHafiz"/>
            <img src={palaHafiz} style={{width:10+'%', height:'auto'}} alt="chat 1" className="palaHafiz"/>
            <br/>
            <div>
              <img src={palaHafiz} style={{width:10+'%', height:'auto'}} alt="chat 1" className="palaHafiz2"/>
              <img src={chat2} style={{width:30+'%', height:'auto'}} alt="chat 2" className="textHafiz2"/>
            </div>
            <br/>
            <div>
              <img src={chat3} style={{width:30+'%', height:'auto'}} alt="chat 3" className="textHafiz3"/>
              <img src={palaHafiz} style={{width:10+'%', height:'auto'}} alt="chat 1" className="palaHafiz3"/>
            </div>
            <br/>

            <img src={palaHafiz} style={{width:10+'%', height:'auto'}} alt="chat 1" className="palaHafiz4"/>
            <img src={chat4} style={{width:30+'%', height:'auto'}} alt="chat 4" className="textHafiz4"/><br/>
          </Col>   */}
        {/* </Row> */}
        {/* <Row className="bg_awan_talk">
					<img src={awan_depan} className="bg_awan" alt="cloud in page contact"/>
					<img src={awan_tengah} className="bg_awan_tengah" alt="cloud in page contact"/>
				</Row> */}
      </Container>
    );
  }
}
export default Talk;