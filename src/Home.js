import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import awan from './images/awan.png';
import planet_orange_home from './images/planet-orange.png';
import planet_ungu_home from './images/planet-ungu.png';
import hafiz from './images/hafiz.png';
import baling2 from './images/baling2.png';
import center from './images/center.png';
import navigation from './images/navigation.png';
import './Style.css';

class Home extends PureComponent{
  render() {
    return (
      <div>
        <Container>
            <Row>
              <Col>
                <img src={planet_orange_home} className="planet_orange" alt="planet orange di halaman home"/>
                <img src={awan} className="left_cloud" alt="awan kiri di halaman home"/>
                <img src={awan} className="left_cloud_blur" alt="awan kiri di halaman home"/>
              </Col>
              <Col>
                <p className="title_home">#JelajahiImajinasimu</p>
                <img src={hafiz} className="hafiz_home" alt="hafiz di halaman home"/>
                <img src={baling2} className="hafiz_baling_baling" alt="baling baling hafiz di home"/>
                <img src={center} className="center_baling" alt="baling baling hafiz di halaman home"/>
                <img src={navigation} className="navigation" alt="navigation di halaman home" />
              </Col>
              <Col>
                <img src={awan} className="right_cloud_blur" alt="awan kiri di halaman home"/>
                <img src={awan} alt="awan kanan di halaman home" className="right_cloud"/>
                <img src={planet_ungu_home} className="planet_ungu" alt="planet ungu di home"/>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Home;