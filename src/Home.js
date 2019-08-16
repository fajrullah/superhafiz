import React, { Component } from 'react';
import './App.css';
// import images from './images/HAFIZAI.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Wave } from "react-animated-text";
import {OBJModel} from 'react-3d-viewer';
import images from './images/HAFIZAI.png';
import animasi from './images/Juice_Scene.obj';

class Home extends Component{
  render() {
    return (
      <div>
        <Container className="container">
            <Row>
              <Col xs={6}>
                <h1 style={{fontSize:50+'px ', color:'#fff'}}>Ayo Kawan<br/>
                Ngobrol Bersama<br/>
                </h1>
                <Wave
                  text="AYO KAWAN NGOBROL BERSAMA SUPER HAFIZ"
                  effect="fadeOut"
                  effectChange={1.9}
                />
                <svg id="sky_day" data-name="sky day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1295.87 804.79">
                <g id="clouds-front">
                  <g id="cloud-1" class="cloud-all">
                    <path class="cls-6" d="M899.69,71.14a26.77,26.77,0,0,0-3,0c-8.74,0-15.84,4.89-16.61,11.11a28.73,28.73,0,0,0-10.76-2c-12.24,0-22.17,7.22-22.17,16.13,0,0,0,.07,0,0.1-9.18,2.27-15.78,8.58-15.78,16,0,9.36,10.42,16.94,23.28,16.94H899.5Z"/>
                    <path class="cls-7" d="M899.49,71.14a23.27,23.27,0,0,1,2.81,0c8.74,0,15.84,4.89,16.61,11.11a28.73,28.73,0,0,1,10.76-2c12.24,0,22.17,7.22,22.17,16.13,0,0,0,.07,0,0.1,9.18,2.27,15.78,8.58,15.78,16,0,9.36-10.42,16.94-23.28,16.94H899.49V71.14Z"/>
                  </g>
                </g>
                </svg>
              </Col>
              <Col>
                <img src={images} style={{width:60+'%', height:'auto'}} alt="slide 1"/>
                {/*<OBJModel src={animasi} texPath="" width='500'/>*/}
              </Col>
            </Row>
            <Row>
              <Button className="" href="./Talk.js">Ngobrol Sekarang</Button>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
