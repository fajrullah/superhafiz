import React, { Component } from 'react';
import './App.css';
import images from './images/HAFIZAI.png';
import { Row, Col, Container } from 'react-bootstrap';
import Countdown from 'react-countdown-now';

const Completionist = () => {
  return <div><h5 style={{color:'white', paddingTop: 20+'%'}}>Hafiz Siap Meluncur sekarang....</h5><img src={images} style={{width:60+'%'}} alt="slide 5"/></div>
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div><h5 style={{color:'white',paddingTop: 20+'%'}}>Hafiz akan datang dalam </h5><br/><h2 >{hours} : {minutes} : {seconds}</h2>
    <br/><h5 style={{color:'white'}}>Jam Menit Detik </h5>
    </div>;
  }
};


class CountingDown extends Component{

  render() {
    console.log(Date.now())
    return (
    	<div className="App Container">
        <Container>
    		<h1 style={{color:'white'}}>Tunggu Kedatangan Hafiz Ya Teman</h1>
      		<Row>
      			<Col>
               <img src={images} style={{width:60+'%'}} alt="slide 5"/>
  		      </Col>
            {/*date={Date.now() + 500000}*/}
  		      <Col className="countdown">
		        	<Countdown
              date={'August 20, 2019 12:00:00 GMT+7'}
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
