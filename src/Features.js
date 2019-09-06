import React, { Component } from 'react';
import './App.css';
// import tes from './images/tes.png';
import { Row, Col } from 'react-bootstrap';
import hafiz from './images/hafiz_3d.png';
import planet_ungu from './images/planet-ungu.png';
import planet_orange from './images/planet-orange.png';
import arrow from './images/arrow_features.png';
import tanya from './images/tanya_apasaja.png';
import dengarkan from './images/dengarkan_cerita.png';
import alquran from './images/alquran.png';
import pengetahuan from './images/pengetahuan_ilmiah.png';
import nyanyi from './images/nyanyi_bersama.png'; 
import belajar from './images/belajar_inggris.png';
import awan_belakang from './images/awan_belakang_features.png';
import awan_tengah from './images/awan_tengah_features.png';
import awan_depan from './images/awan_depan_features.png';

class Features extends Component{
  render() { 
    return (
      <div>
        <Row>
          <Col></Col>
          <Col>
          <h5 className="title_features App">
            features hafiz
          </h5>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <img src={tanya} className="tanya_feature" alt="planet orange counting down"/>
            <img src={alquran} className="alquran_feature" alt="planet orange counting down"/>
            <img src={planet_ungu} className="planet_ungu_feature" alt="planet orange counting down"/>
            <img src={nyanyi} className="nyanyi_feature" alt="nyanyi bersama superhafiz "/>
          </Col>
          <Col>
            <img src={arrow} className="arrow_features" alt="arrow features"/>
            <img src={hafiz} className="hafiz_feature" alt="planet orange counting down"/>
          </Col>
          <Col>
          <img src={planet_orange} className="planet_orange_feature" alt="planet orange counting down"/>
            <img src={dengarkan} className="dengarkan_feature" alt="planet orange counting down"/>
            <img src={pengetahuan} className="pengetahuan_feature" alt="planet orange counting down"/>
            <img src={belajar} className="belajar_feature" alt="planet orange counting down"/>
          </Col>
        </Row>
        <Row className="bg_awan_features">
          <img src={awan_belakang} className="awan_belakang_features" alt="cloud in page contact"/>
					<img src={awan_tengah} className="awan_belakang_features" alt="cloud in page contact"/>
					<img src={awan_depan} className="awan_belakang_features" alt="cloud in page contact"/>
        </Row>
      </div>
    );
  }
}

export default Features;
