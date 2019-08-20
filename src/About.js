import React, { Component } from 'react';
import './App.css';
import HAFIZAI from './images/HAFIZAI.png';
// import circle from './images/circle.png';
import {  Row, Col } from 'react-bootstrap';

class About extends Component{
  render() {
    return (
    	<div className="container">
			<h1 className="App" style={{color:'white'}}>Kenalan sama Hafiz</h1>
    		<Row>
    			<Col>
    				<div>
    					{/*<img src={circle} alt="circle" style={{width:30+'%', marginTop:50+'px', marginLeft:50+'px'}} className="image-1"/>*/}
    				</div>
    				<div>
    					{/*<img src={circle} style={{width:30+'%', marginTop:50+'px', marginLeft:50+'px'}} alt="circle" className="image-1"/>*/}
    				</div>	
			    </Col>
			    <Col>
			    	<div className="App">
			    		<img src={HAFIZAI} style={{width:60+'%', marginTop:10+'px'}} alt="slide 2"/>
			    	</div>
			    	<div>
    					{/*<img src={circle} style={{width:30+'%', marginTop:50+'px', marginLeft:60+'px'}} alt="circle" className="image-1"/>*/}
    				</div>
			    </Col>
			    <Col>
			    	<div>
    					{/*<img src={circle} style={{width:30+'%', marginTop:10+'px', marginLeft:120+'px'}} alt="circle" className="image-1"/>*/}
    				</div>
    				<div>
    					{/*<img src={circle} style={{width:30+'%', marginTop:50+'px', marginRight:70+'px'}} alt="circle" className="image-1"/>*/}
    				</div>	
			    </Col>
		    </Row>
    	</div>
    );
  }
}

export default About;
