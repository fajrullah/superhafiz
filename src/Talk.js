import React, { Component } from 'react';
import './App.css';
import HAFIZAI from './images/HAFIZAI_hand.png';
import { Row, Container, Button, Col } from 'react-bootstrap';
import Sound from 'react-sound';
import palaHafiz from './images/palaHafiz.png';
import chat1 from './images/chat1.png';
import chat2 from './images/chat2.png';
import chat3 from './images/chat3.png';
import chat4 from './images/chat4.png';

class Talk extends Component{
  render() {
    console.log(Sound.status.PLAYING)
    return (
      <Container>
        <Row className="App">
          <Col><h4 style={{color:'white',fontSize:30+'px'}}>Ngobrol Sama Hafiz Yuk Teman</h4></Col>  
        </Row>
        <Row>
        
          {/*<Sound
            url="./SoundEffect.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
          <Col className="ripple-wrapper">
            <div className="request-loader">
              <span>
                <img src={HAFIZAI} style={{width:90+'%'}} alt="slide 4"/>
              </span>
            </div>
          </Col>
          <Col style={{textAlign:'right', color:'#fff', marginTop:10 + '%'}}>
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
          </Col>  
        </Row>
      </Container>
    );
  }
}

export default Talk;
