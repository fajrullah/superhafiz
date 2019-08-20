import React, { Component } from 'react';
import './App.css';
import images from './images/HAFIZAI.png';
import paperPlane from './images/paper-plane.png';
import paperPlaneLeft from './images/paper-plane-left.png';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import svg from './images/paper-plane-left.svg';

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
                         <svg id="sky_day" data-name="sky day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1295.87 600">
                            <g id="clouds-front">
                              <g id="cloud-1" className="cloud-all">
                                <path className="cls-6" d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                                {/*<path class="cls-7" d="M899.49,71.14a23.27,23.27,0,0,1,2.81,0c8.74,0,15.84,4.89,16.61,11.11a28.73,28.73,0,0,1,10.76-2c12.24,0,22.17,7.22,22.17,16.13,0,0,0,.07,0,0.1,9.18,2.27,15.78,8.58,15.78,16,0,9.36-10.42,16.94-23.28,16.94H899.49V71.14Z"/>*/}
                              </g>
                              <g id="cloud-4" className="cloud-all" data-name="bush"></g>
                            </g>
                          </svg>
                        {/*<img src={paperPlane} className="paper-plane-image1" alt="paper plane"/>*/}
        			</Col>
        			<Col >
                        <img src={paperPlaneLeft} className="paper-plane-image1" alt="paper plane Left"/>
    	    			<img src={images} style={{width:50+'%'}} alt="slide 6"/>
                        <img src={paperPlane} className="paper-plane-image" alt="paper plane"/>
    	    		</Col>
    	    	</Row>
            </Container>
    	</div>
    );
  }
}

export default Contact;
