import Particles from 'react-particles-js';
import React, { Component } from 'react';
import './App.css';

class ParticlesPage extends Component{
  render() {
    return (
    	<Particles
    		className="particleStyle"
		    params={{
			    "particles": {
			        "number": {
			            "value": 300,
			            "density": {
			                "enable": false
			            }
			        },
			        "size": {
			            "value": 3,
			            "random": true,
			            "anim": {
			                "speed": 1,
			                "size_min": 0.3
			            }
			        },
			        "line_linked": {
			            "enable": false
			        },
			        "move": {
			            "random": true,
			            "speed": 1,
			            "direction": "top",
			            "out_mode": "out"
			        }
			    },
			    "interactivity": {
			        "events": {
			            "onhover": {
			                "enable": true,
			                "mode": "bubble"
			            },
			            "onclick": {
			                "enable": true,
			                "mode": "repulse"
			            }
			        },
			        "modes": {
			            "bubble": {
			                "distance": 250,
			                "duration": 2,
			                "size": 0,
			                "opacity": 0.5
			            },
			            "repulse": {
			                "distance": 400,
			                "duration": 4
			            }
			        }
			    }
			}} />
    );
  }
}

export default ParticlesPage;
