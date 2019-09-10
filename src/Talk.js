import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {  Row, Col } from 'react-bootstrap';
import planet_ungu from './images/planet-ungu.png';
import planet_orange from './images/planet-orange.png';
import awan_depan from './images/awan_tengah.png';
import awan_tengah from './images/awan_depan.png';
import kepala_hafiz from './images/kepala_hafiz.png';
import kepala_user from './images/kepala-user.png';
import balon_user from './images/dialog-user.png';
import balon_user1 from './images/dialog-user-long.png';
import balon_hafiz from './images/dialog-hafiz-long.png';
import balon_hafiz1 from './images/dialog-hafiz.png';
import hafiz from './images/hafiz_3d.png';
// import Sound from 'react-sound';

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
        <Row>
          {/* <Sound
            url="./SoundEffect.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}/> */}
            {/* <img src={button} className="button_talk" alt="orange planet in page about" onClick={() => imageClick()} style={{"pointer-events": "all"}}/> */}
          <Col>
            {/* <img src={planet_ungu} className="planet_ungu" alt="planet ungu di halaman talk"/> */}
          </Col>
          <Col>
            <img src={hafiz} className="hafiz_talk" alt="planet ungu di halaman talk"/>
          </Col>
          <Col className="column">
            <img src={kepala_hafiz} className="head_hafiz absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_hafiz} className="head_hafiz1 absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_hafiz} className="head_hafiz2 absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_hafiz} className="head_hafiz3 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_hafiz} className="balon_hafiz absolute" alt="planet orange di halaman talk"/>
            <img src={balon_hafiz1} className="balon_hafiz1 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_hafiz1} className="balon_hafiz2 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_hafiz} className="balon_hafiz3 absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_user} className="head_user absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_user} className="head_user1 absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_user} className="head_user2 absolute" alt="planet orange di halaman talk"/>
            <img src={kepala_user} className="head_user3 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_user} className="balon_user absolute" alt="planet orange di halaman talk"/>
            <img src={balon_user1} className="balon_user1 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_user} className="balon_user2 absolute" alt="planet orange di halaman talk"/>
            <img src={balon_user1} className="balon_user3 absolute" alt="planet orange di halaman talk"/>
            {/* <img src={planet_orange} className="planet_orange" alt="planet orange di halaman talk"/> */}
          </Col>
        </Row>
        <Row className="bg_awan_talk">
          <img src={awan_depan} className="bg_awan" alt="cloud in page contact"/>
					<img src={awan_tengah} className="bg_awan_tengah" alt="cloud in page contact"/>
        </Row>
      </Container>
    );
  }
}
export default Talk;