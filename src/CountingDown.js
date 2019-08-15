import React, { Component } from 'react';
import './App.css';
import images from './images/HAFIZAI.png';
import { Row, Col, Container } from 'react-bootstrap';
import Countdown from 'react-countdown-now';

const Completionist = () => {
  return <div><h5 style={{color:'white'}}>Hafiz Siap Meluncur sekarang....</h5><img src={images} style={{width:60+'%'}} alt="slide 5"/></div>
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div><h5 style={{color:'white'}}>Hafiz akan datang dalam </h5><br/><h2>{hours} Jam : {minutes} Menit : {seconds} Detik</h2></div>;
  }
};


class CountingDown extends Component{
  render() {
    return (
    	<div className="App Container">
        <Container>
    		<h1 style={{color:'white'}}>Tunggu Kedatangan Hafiz Ya Teman</h1>
      		<Row>
      			<Col>
               <img src={images} style={{width:60+'%'}} alt="slide 5"/>
  		      </Col>
  		      <Col className="countdown">
		        	<Countdown
					    date={Date.now() + 500000}
					    renderer={renderer}
  					  />
  		        </Col>
  	        </Row>
          </Container>
        </div>
    );
  }
}

export default CountingDown;
