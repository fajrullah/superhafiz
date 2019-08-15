import React, { Component } from 'react';
import './App.css';
import images from './images/HAFIZAI.png';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

class Contact extends Component{
  render() {
    return (
    	<div className="App">
            <Container>
        		<h1 style={{color:'white', paddingBottom:20+'px'}}>Yuk Kirim Surat Ke Hafiz Teman</h1>
        		<Row>
        			<Col>
        				<Form className="form-custom" style={{marginTop:20+'px'}}>
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
    	    			<img src={images} style={{width:50+'%'}} alt="slide 6"/>
    	    		</Col>
    	    	</Row>
            </Container>
    	</div>
    );
  }
}

export default Contact;
