import React, { Component } from 'react';
import './App.css';
import tes from './images/tes.png';
import { Row, Col } from 'react-bootstrap';

class Features extends Component{
  render() {
    return (
    	<div  className="App">
	         <h1 style={{color:'white'}}>Kelebihan Hafiz</h1>
          	<Row>
              <Col>
          		<img src={tes} style={{width:40+'%'}} alt="slide 3"/>
              </Col>
          	</Row>
	    </div>
    );
  }
}

export default Features;
