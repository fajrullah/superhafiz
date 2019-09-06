import React, { Component } from 'react';
import './App.css';
import hafiz from './images/hafiz_with_envelope.png';
// import paperPlane from './images/paper-plane-icon.png';
import paperPlaneLeft from './images/paper-plane-icon.png';
import baling from './images/baling2.png';
import center_baling from './images/center.png';
import planet_ungu from './images/planet-ungu.png';
import planet_orange from './images/planet-orange.png';
import awan_depan from './images/awan_tengah.png';
import awan_tengah from './images/awan_depan.png';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

class Contact extends Component{
  render() {
    return (
    	<div className="App">
            <Container>
				<Row>
        			<h1 className="title">yuk kirim surat ke hafiz teman</h1>
				</Row>
        		<Row>
        			<Col>
					<img src={planet_ungu} className="planet_ungu_contact" alt="planet ungu contact"/>
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
                        {/*<img src={paperPlane} className="paper-plane-image1" alt="paper plane"/>*/}
        			</Col>
        			<Col >
						<img src={planet_orange} className="planet_orange_contact" alt="planet orange contact"/>
                        <img src={paperPlaneLeft} className="paper-plane-image1" alt="paper plane Left"/>
						<img src={paperPlaneLeft} className="paper-plane-image2" alt="paper plane Left"/>
    	    			<img src={hafiz} className="hafiz-contact" alt="hafiz contact"/>
                        {/* <img src={paperPlane} className="paper-plane-image" alt="paper plane"/> */}
						<img src={baling} className="baling-contact" alt="baling contact"/>
						<img src={center_baling} className="center_baling-contact" alt="center baling contact"/>
    	    		</Col>
    	    	</Row>
				<Row className="bg_awan_contact">
					<img src={awan_depan} className="bg_awan" alt="cloud in page contact"/>
					<img src={awan_tengah} className="bg_awan_tengah" alt="cloud in page contact"/>
				</Row>
            </Container>
    	</div>
    );
  }
}
export default Contact;
