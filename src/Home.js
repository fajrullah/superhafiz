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
                Ngobrol Bersama SuperHafiz<br/>
                </h1>
                <Wave
                  text="AYO KAWAN NGOBROL BERSAMA SUPER HAFIZ"
                  effect="fadeOut"
                  effectChange={1.9}
                />
                <svg id="sky_day" data-name="sky day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1295.87 300">
                <g id="clouds-front">
                  <g id="cloud-1" class="cloud-all">
                    <path class="cls-6" d="M899.69,71.14a26.77,26.77,0,0,0-3,0c-8.74,0-15.84,4.89-16.61,11.11a28.73,28.73,0,0,0-10.76-2c-12.24,0-22.17,7.22-22.17,16.13,0,0,0,.07,0,0.1-9.18,2.27-15.78,8.58-15.78,16,0,9.36,10.42,16.94,23.28,16.94H899.5Z"/>
                    <path class="cls-7" d="M899.49,71.14a23.27,23.27,0,0,1,2.81,0c8.74,0,15.84,4.89,16.61,11.11a28.73,28.73,0,0,1,10.76-2c12.24,0,22.17,7.22,22.17,16.13,0,0,0,.07,0,0.1,9.18,2.27,15.78,8.58,15.78,16,0,9.36-10.42,16.94-23.28,16.94H899.49V71.14Z"/>
                  </g>
                  <g id="cloud-4" class="cloud-all" data-name="bush">
                    <path class="cls-6" d="M1151.17,173.76a12.85,12.85,0,0,0-1.91-.14c-5.81,0-10.53,4-11,9.17a15.89,15.89,0,0,0-7.15-1.68c-8.14,0-14.73,6-14.73,13.32,0,0,0,.06,0,0.09-6.1,1.88-10.49,7.09-10.49,13.23,0,7.73,6.93,14,15.48,14h30Z"/>
                    <path class="cls-7" d="M1151.08,173.75a12.8,12.8,0,0,1,1.91-.13c5.81,0,10.53,4,11,9.17a15.89,15.89,0,0,1,7.15-1.68c8.14,0,14.73,6,14.73,13.32,0,0,0,.06,0,0.09,6.1,1.88,10.49,7.09,10.49,13.23,0,7.73-6.93,14-15.48,14h-29.81Z"/>
                  </g>
                </g>
                <g id="clouds-back">
                  <g id="cloud-2" class="cloud-all" data-name="bush">
                    <path class="cls-6" d="M1075.9,143.73a25.08,25.08,0,0,0-3.06-.18c-9.21,0-16.69,5.29-17.5,12a29.61,29.61,0,0,0-11.34-2.2c-12.9,0-23.36,7.81-23.36,17.44,0,0,0,.07,0,0.11-9.67,2.46-16.63,9.28-16.63,17.33,0,10.12,11,18.31,24.53,18.31h47.67Z"/>
                    <path class="cls-7" d="M1075.8,143.72a23.49,23.49,0,0,1,3-.17c9.21,0,16.69,5.29,17.5,12a29.61,29.61,0,0,1,11.34-2.2c12.9,0,23.36,7.81,23.36,17.44,0,0,0,.07,0,0.11,9.67,2.46,16.63,9.28,16.63,17.33,0,10.12-11,18.31-24.53,18.31H1075.8V143.72Z"/>
                  </g>
                  <g id="cloud-3" class="cloud-all" data-name="bush">
                    <path class="cls-6" d="M430.87,168.15a21.33,21.33,0,0,0-2.39-.07c-6.16,0-11.15,3.82-11.7,8.68a18.49,18.49,0,0,0-7.58-1.59c-8.62,0-15.61,5.64-15.61,12.61,0,0,0,.05,0,0.08-6.46,1.78-11.12,6.71-11.12,12.52,0,7.31,7.34,13.24,16.39,13.24,4.44,0,18.37-.07,32-0.07v-45.4Z"/>
                    <path class="cls-7" d="M430.46,168.11a14.69,14.69,0,0,1,2,0c6.16,0,11.15,3.82,11.7,8.68a18.49,18.49,0,0,1,7.58-1.59c8.62,0,15.61,5.64,15.61,12.61,0,0,0,.05,0,0.08,6.46,1.78,11.12,6.71,11.12,12.52,0,7.31-7.34,13.24-16.39,13.24-4.44,0-18-.07-31.58-0.07V168.11Z"/>
                  </g>
                </g>
              </svg>
              </Col>
              <Col>
                <img src={images} style={{width:60+'%', height:'auto'}} className="hafizHome" alt="slide 1"/>
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
