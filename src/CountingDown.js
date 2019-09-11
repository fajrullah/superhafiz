import React, { Component } from 'react';
import './App.css';
// import images from './images/HAFIZAI.png';
import { Row, Col, Container,Form, Button } from 'react-bootstrap';
import bg_bumi from './images/background-bumi.png';
import hafiz_roket_before from './images/hafiz_roket_before.png';
import hafiz_roket from './images/hafiz_roket.png';
import Countdown from 'react-countdown-now';
// import hafiz from './images/hafiz_baling.png';
// import hafiz_roket from './images/hafiz_roket.png';
import awan_belakang from './images/awan_belakang_roket.png';
import awan_depan from './images/awan_tengah_roket.png';
import awan_tengah from './images/awan_depan_roket.png';
import dust from './images/dust.png';
// import fire_roket from './images/fire_roket.png';
// import planet_orange from './images/planet-orange.png';
// import arus_roket from './images/arus_roket.png';

const Completionist = () => {
  return (
  <div><h2 className="digital_after">00 : 00 : 00</h2></div>)
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div><h5 className="countdown_h5">Hafiz akan datang dalam </h5><br/><h2 className="digital">{hours} : {minutes} : {seconds}</h2>
    <br/><h5 className="countdown_h5_jam">Jam Menit Detik </h5>
    </div>;
  }
};

class CountingDown extends Component{

  render() {
    // console.log(Date.now())
    return (
    	<div>
        <Row>
          <p className="title_form absolute">ayo kawan pre order sekarang ya...</p>
          <img src={bg_bumi} className="bg_bumi absolute" alt="fire roket kiri"/>
          <img src={hafiz_roket} className="hafiz_roket absolute" alt="fire roket kiri"/>
          <img src={hafiz_roket_before} className="hafiz_roket_before absolute" alt="fire roket kiri"/>
          <img src={awan_belakang} className="bg_awan_belakang_roket absolute" alt="awan di belakang roket"/>
          <img src={awan_tengah} className="bg_awan_tengah_roket" alt="awan di tengah roket"/>
          <img src={awan_depan} className="bg_awan_roket" alt="awan di depan roket"/>
          <img src={dust} className="dust_awan_roket" alt="debu roket"/>
          <Form className="form-custom absolute">
            <Row>
              <Col style={{marginBottom:20+'px',}}>
                <Form.Control placeholder='Nama Lengkap Kamu'/>
              </Col>
              <Col>
                <Form.Control placeholder='Email Kamu'/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control as="textarea" rows="3" placeholder='Tulisan Pesan Kamu ya'  style={{height:'auto',minHeight:120+'px'}}/>
              </Col>
            </Row>
            <Row>
              <Col style={{marginTop: 20+'px'}}>
                <Button className="button button-secondary button-kirim"><i className="fas fa-paper-plane"></i> Kirim</Button>
              </Col>
            </Row>                            
          </Form>
          <Col style={{marginTop: 20+'%'}}>
            <Countdown
              date={'Sept 05, 2019 17:45:00 GMT+7'}
              renderer={renderer}
            />
          </Col>
        </Row>
        {/* <Container>
          <Row>
            <Col>
                <Form className="form-custom">
        					<Row>
        						<Col style={{marginBottom:20+'px',}}>
        							<Form.Control placeholder='Nama Lengkap Kamu'/>
        						</Col>
        						<Col>
        							<Form.Control placeholder='Email Kamu'/>
        						</Col>
        					</Row>
        					<Row>
        						<Col>
        							<Form.Control as="textarea" rows="3" placeholder='Tulisan Pesan Kamu ya'  style={{height:'auto',minHeight:120+'px'}}/>
        						</Col>
        					</Row>
        					<Row>
        						<Col style={{marginTop: 20+'px'}}>
        							<Button className="button button-secondary button-kirim"><i className="fas fa-paper-plane"></i> Kirim</Button>
        						</Col>
        					</Row>                            
        				</Form>
            </Col>
            <Col>
              <h1 className="hafiz_counting_tittle App">Tunggu kedatangan hafiz ya kawan</h1>
            </Col>
            <Col></Col>
          </Row>
      		<Row>
            <Col className="countdown">
		        	<Countdown
              date={'Sept 05, 2019 17:45:00 GMT+7'}
					    renderer={renderer}
  					  />
  		      </Col>
      			<Col>
              <img src={planet_orange} className="planet_orange_counting" alt="planet orange counting down"/>
              <img src={fire_roket} className="fire_roket_kiri" alt="fire roket kiri"/>
              <img src={hafiz_roket} className="hafiz_countingdown" alt="hafiz roket"/>              
              <img src={fire_roket} className="fire_roket_kanan" alt="fire roket kana"/>              
              <img src={arus_roket} className="arus_roket" alt="arus roket"/>              
              <img src={arus_roket} className="arus_roket1" alt="arus roket"/>              
  		      </Col>
            <Col></Col>
  	      </Row> */}
          {/* <Row className="bg_awan_counting">
            <img src={awan_belakang} className="bg_awan_belakang_roket" alt="awan di belakang roket"/>
            <img src={awan_tengah} className="bg_awan_tengah_roket" alt="awan di tengah roket"/>
            <img src={awan_depan} className="bg_awan_roket" alt="awan di depan roket"/>
            <img src={dust} className="dust_awan_roket" alt="debu roket"/>
          </Row> */}
        {/* </Container> */}
        </div>
    );
  }
}
export default CountingDown;