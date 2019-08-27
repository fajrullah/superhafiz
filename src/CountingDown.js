import React, { Component } from 'react';
import './App.css';
import images from './images/HAFIZAI.png';
import { Row, Col, Container } from 'react-bootstrap';
import Countdown from 'react-countdown-now';
import hafiz from './images/hafiz_baling.png';

const Completionist = () => {
  return <div><h5 className="countdown_h5">Hafiz Siap Meluncur sekarang....</h5><img src={images} style={{width:60+'%'}} alt="slide 5"/></div>
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div><h5 className="countdown_h5">Hafiz akan datang dalam </h5><br/><h2 >{hours} : {minutes} : {seconds}</h2>
    <br/><h5 className="countdown_h5_jam">Jam Menit Detik </h5>
    </div>;
  }
};


class CountingDown extends Component{

  render() {
    console.log(Date.now())
    return (
    	<div className="App Container">
        <Container>
      		<Row>
      			<Col>
              <img src={hafiz} className="hafiz_countingdown" alt="hafiz"/>              
  		      </Col>
  		      <Col className="countdown">
		        	<Countdown
              date={'August 27, 2019 17:30:00 GMT+7'}
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
