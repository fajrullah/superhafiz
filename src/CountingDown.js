import React, { PureComponent } from 'react';
import './App.css';
import { Row, Col, Container,Form, Button } from 'react-bootstrap';
import bg_bumi from './images/background-bumi.png';
import hafiz_roket_before from './images/hafiz_roket_before.png';
import hafiz_roket from './images/hafiz_roket.png';
import Countdown from 'react-countdown-now';
import awan_belakang from './images/awan_belakang_roket.png';
// import awan_depan from './images/awan_tengah_roket.png';
// import awan_tengah from './images/awan_depan_roket.png';
import dust from './images/dust.png';
// import hafiz from './images/hafiz_baling.png';
// import hafiz_roket from './images/hafiz_roket.png';
// import images from './images/HAFIZAI.png';
import fire_roket from './images/fire_roket.png';
// import planet_orange from './images/planet-orange.png';
// import arus_roket from './images/arus_roket.png';

const Completionist = () => {
  return (
    <div>
      <img src={fire_roket} className="fire_roket absolute" alt="fire roket kiri"/>
      <img src={fire_roket} className="fire_roket1 absolute" alt="fire roket kiri"/>
      <img src={hafiz_roket} className="hafiz_roket absolute" alt="fire roket kiri"/>
      <img src={bg_bumi} className="bg_bumi_complete absolute" alt="fire roket kiri"/>
      <img src={dust} className="dust_awan_roket" alt="debu roket"/>
      <img src={awan_belakang} className="bg_awan_belakang_roket absolute" alt="awan di belakang roket"/>
      <h2 className="digital_after">00 : 00 : 00</h2>
    </div>
    )
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <div>
            <img src={hafiz_roket_before} className="hafiz_roket_before absolute" alt="fire roket kiri"/>
            <img src={bg_bumi} className="bg_bumi absolute" alt="fire roket kiri"/>
            <h5 className="countdown_h5">Hafiz akan datang dalam </h5><br/><h2 className="digital">{hours} : {minutes} : {seconds}</h2>
            <br/><h5 className="countdown_h5_jam">Jam Menit Detik </h5>
          </div>;
  }
};

class CountingDown extends PureComponent{
  render() {
    // console.log(Date.now())
    console.log(renderer)
    return (
    	<div>
        <Row>
          {/* <Teshafiz/> */}
          <p className="title_form absolute">ayo kawan pre order sekarang ya...</p>
          {/* <img src={awan_belakang} className="bg_awan_belakang_roket absolute" alt="awan di belakang roket"/> */}
          {/* <img src={awan_tengah} className="bg_awan_tengah_roket" alt="awan di tengah roket"/> */}
          {/* <img src={awan_depan} className="bg_awan_roket" alt="awan di depan roket"/> */}
          <Form className="form-custom absolute">
            <Row>
              <Col style={{marginBottom:20+'px'}}>
                <Form.Control placeholder='Nama Lengkap Kamu'/>
              </Col>
              <Col>
                <Form.Control placeholder='Email Kamu'/>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Form.control as="textarea" rows="3" placeholder='tulis pesan kamu ya' style={{height:'auto', minHeight:120+'px'}}/>
              </Col>
            </Row> */}
            <Row>
              <Col style={{marginTop: 20+'px'}}>
                <Button className="button button-secondary button-kirim">
                  <i className="fas fa-paper-plane"></i>
                    Kirim
                </Button>
              </Col>
            </Row>
          </Form>

          <Col className="counting-down">
            <Countdown
              date={'Sept 23, 2019 17:39:00 GMT+7'}
              renderer={renderer}
            />
          </Col>
        </Row>
       
        </div>
    );
  }
}
export default CountingDown;