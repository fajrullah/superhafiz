import React, { Component } from 'react';
import './App.css';
// import hafiz from './images/hafiz.png';
// import baling2 from './images/baling2.png';
// import center_baling2 from './images/center.png';
// import planet_orange from './images/planet-orange.png';
// import planet_ungu from './images/planet-ungu.png';
// import awan from './images/awan.png';
// import bg_awan from './images/bg_cloud.png';
// import {  Row, Col, Button } from 'react-bootstrap';
// import background from './images/backgroundabout2.png';
// import hafiz from './images/hafiz_new.JPG';
// import hafizslide1 from './images/IMG_7703.JPG';
// import hafizslide2 from './images/IMG_7702.JPG';
// import hafizslide3 from './images/IMG_7704.JPG';

class About extends Component{
	constructor(props) {
		super(props); 
		this.state = {
			alert: "ini di klik"
		}
	  }
  	render() {
	  this.setState = {
		  alert: "testing"
		}
		// const imageClick = () => {
		// 	alert(this.setState.alert)
	  	// } 
    	return (
    	<div>
			<h5>About slide</h5>
    		{/* <Row> */}
    			{/* <Col> */}
					{/* <img src={hafizslide1} className="hafiz_about" alt="awan home"/>
					<img src={hafizslide2} className="hafiz_about1" alt="awan home"/>
					<img src={hafizslide3} className="hafiz_about2" alt="awan home"/>
					<Button onClick={() => imageClick()} className="buttontest">klik ini</Button> */}
					{/* <h4 className="descriptionabout">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</h4> */}
						{/* <h4 className="descriptionabout">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
							and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</h4>					
						<Button onClick={() => imageClick()} className="buttontest">klik ini</Button> */}
			    {/* </Col> */}
				{/* <img src={background} className="backgroundabout2"/> */}
		    {/* </Row> */}
			{/* <Row> */}
				{/* <img src={background} className="backgroundabout2"/> */}
			{/* </Row> */}
    	</div>
    );
  }
}
export default About;