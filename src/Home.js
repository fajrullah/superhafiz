import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import awan from './images/awan.png';
import planet_orange_home from './images/planet-orange.png';
import planet_ungu_home from './images/planet-ungu.png';
import hafiz from './images/hafiz.png';
import baling2 from './images/baling2.png';
import center from './images/center.png';
// import bumi from './images/bumi-muter.png';
// import bumi_layout from './images/bumi-layout.png';
// import awan3d from './images/cloud.png';

class Home extends Component{
  render() {
    return (
      <div>
        <Container style={{height:100+'%',width:100+'%'}}>
            <Row style={{height:100+'%',width:100+'%'}}>
              <Col style={{width:100+'%',height:100+'%'}}>
                <img src={planet_orange_home} className="planet_orange_home" alt="planet orange home"/>
                <img src={awan} className="awan_front" alt="awan"/>
              </Col>
              <Col style={{height: 100+'%'}}>
                {/* <img src={awan3d} className="awan_back_atas" alt="awan"/> */}
                <img src={hafiz} className="hafiz_home" alt="hafiz"/>
                <img src={baling2} className="hafiz_baling_baling" alt="baling baling hafiz"/>
                <img src={center} className="center_baling" alt="baling baling hafiz"/>
              </Col>
              <Col>
                <img src={planet_ungu_home} className="planet_ungu_home" alt="planet kanan"/>
                <img src={awan} className="awan_back" alt="awan"/>
              </Col>
            </Row>
            <Row className="row_bumi">
              {/* <img src={bumi_layout} className="bumi_muter" alt="awan"/> */}
              <div className="bumi_muter"></div>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Home;