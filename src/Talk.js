import React, { Component } from 'react';
import './App.css';
// import HAFIZAI from './images/HAFIZAI_hand.png';
import { Row, Container, Col } from 'react-bootstrap';
import bg_awan from './images/bg_cloud.png';
import planet_ungu from './images/planet-ungu.png';
import planet_orange from './images/planet-orange.png';
// import Sound from 'react-sound';
// import palaHafiz from './images/kepala-hafiz.png';
// import chat1 from './images/chat1.png';
// import chat2 from './images/chat2.png';
// import chat3 from './images/chat3.png';
// import chat4 from './images/chat4.png';

class Talk extends Component{
  render() {
    // console.log(Sound.status.PLAYING)
    return (
      <Container>
        <Row>
          <Col>
            <img src={planet_ungu} className="planet_ungu_talk" alt="purple planet in page about"/>
            <img src={planet_orange} className="planet_orange_talk" alt="orange planet in page about"/>
          </Col>
          <Col>
          <div className="talk_text">
            <h1>Halaman ngobrol bareng superhafiz</h1><br/>
            <h1>in progress</h1>
          </div>
          </Col>
          <Col>
          </Col>
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
        </Row>
        <Row className="row_bg_awan">
          <img src={bg_awan} className="bg_awan" alt="cloud in page about"/>
        </Row>
      </Container>
    );
  }
}

export default Talk;
