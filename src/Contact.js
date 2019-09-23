import React, { Component } from 'react';
import './App.css';
import hafiz from './images/FOR-GIF.gif';
import planet_orange_contact from './images/planet-orange.png';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

class Contact extends Component{
  render() {
    return (
    	<div className="App">
            <Container>
				<Row>
					<img src={planet_orange_contact} className="planet_orange_contact" alt="planet orange di halaman home"/>
					<img src={hafiz} className="hafiz_contact" alt="planet ungu di halaman talk"/>        
					<p className="title_contact">Terimakasih kawan atas kunjungannya</p>
					<Col>
						<Button className="TNC_button" onClick={'term'}>Term and Condition</Button>
						<Button className="PP_button" onClick={'pp'}>Privacy Policy</Button>
						<Button className="CU_button" onClick={'cu'}>Contact Us</Button>
					</Col>
				</Row>
            </Container>
    	</div>
    );
  }
}
export default Contact;