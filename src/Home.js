import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import awan from './images/awan.png';
import planet_kiri from './images/planet-kiri.png';
import planet_kanan from './images/planet-kanan.png';
import hafiz from './images/hafiz.png';
// import baling_baling from './images/baling.png';
import baling2 from './images/baling2.png';
import center from './images/center.png';

class Home extends Component{
  render() {
    return (
      <div>
        <Container className="container">
            <Row style={{height:300+'px'}}>
              <Col>
                <img src={planet_kiri} className="planet_kiri" alt="planet kiri"/>
                <img src={awan} className="awan_front" alt="awan"/>
             </Col>
              <Col>
                <img src={awan} className="awan_back_atas" alt="awan"/>
                <img src={hafiz} className="hafiz_home" alt="hafiz"/>
                <img src={baling2} className="hafiz_baling_baling" alt="baling baling hafiz"/>
                <img src={center} className="center_baling" alt="baling baling hafiz"/>
              </Col>
              <Col>
                <img src={planet_kanan} className="planet_kanan" alt="planet kanan"/>
                <img src={awan} className="awan_back" alt="awan"/>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Home;