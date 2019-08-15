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
                  text="AYO KAWAN NGOBROL BERSAMA SUPER HAFIZ DARI ALQOLAM"
                  effect="fadeOut"
                  effectChange={1.9}
                />
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
