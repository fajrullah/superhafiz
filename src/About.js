import React, { Component } from 'react';
import './App.css';
// import HAFIZAI from './images/HAFIZAI.png';
// import circle from './images/circle.png';
import hafiz from './images/hafiz.png';
import baling2 from './images/baling2.png';
import center_baling2 from './images/center.png';
import planet_orange from './images/planet-orange.png';
import planet_ungu from './images/planet-ungu.png';
import awan from './images/awan.png';
import bg_awan from './images/bg_cloud.png';
import {  Row, Col } from 'react-bootstrap';

class About extends Component{
  render() {
    return (
    	<div className="container">
    		<Row>
    			<Col>
					<h3 className="hafiz_desc_tittle">SuperHafiz about</h3>
					<h4 className="hafiz_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</h4>
					<img src={awan} className="awan_about_kiri" alt="cloud in page about"/>
			    </Col>
			    <Col>
					<img src={hafiz} className="hafiz_about" alt="hafiz"/>
					<img src={baling2} className="hafiz_baling_about" alt="baling baling hafiz"/>
					<img src={center_baling2} className="center_baling2_about" alt="center baling baling hafiz"/>
			    </Col>
			    <Col>
					<img src={planet_orange} className="planet_orange_about" alt="orange planet in page about"/>
					<img src={planet_ungu} className="planet_ungu_about" alt="purple planet in page about"/>
					<img src={awan} className="awan_about_kanan" alt="cloud in page about"/>
			    </Col>
		    </Row>
			<Row className="row_bg_awan">
				<img src={bg_awan} className="bg_awan" alt="cloud in page about"/>
			</Row>
    	</div>
    );
  }
}

export default About;
