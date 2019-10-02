import React, { Component } from 'react';
import './App.css';
import hafiz from './images/hafiz-hi.png';
import awan_contact from './images/bg_cloud.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import firework from './images/firework.gif';
import Modal from 'react-modal';

const ImageLoader = () => {
	return (<div>Loading ...</div>)
  }
const customStyles = {
content : {
	top                   : '50%',
	left                  : '50%',
	right                 : 'auto',
	bottom                : 'auto',
	width                 : '95%',
	height                 : '90%',
	// marginRight           : '-50%',
	transform             : 'translate(-50%, -50%)'
}
};

class Contact extends Component{
	constructor(props) {
		super(props) 
		  this.state = {
			show: false,
			isLoading : true,
			modalIsOpen: false
		  }
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	  }
	static getDerivedStateFromProps(props, state) {
		if (props.isrender !== state.isLoading) {
		  return {isLoading: props.isrender }
		}
  
	  // Return null if the state hasn't changed
	  return null;
	}
	componentDidMount(){
	  const { isrender } = this.props
	  this.setState({
		isLoading : isrender
	  })
	}
	componentWillUnmount(){
		const { isrender } = this.props
	  this.setState({
		isLoading : isrender
	  })
	}

	openModal() {
		this.setState({modalIsOpen: true});
	  }
	 
	  afterOpenModal() {
		// references are now sync'd and can be accessed.
		// this.subtitle.style.color = '#f00';
	  }
	 
	  closeModal() {
		this.setState({modalIsOpen: false});
	  }

  render() {
	const { isLoading } = this.state
	// console.log(isLoading)
	if(isLoading){
		return <ImageLoader/>
	  }
    return (
    	<div className="App">
            <Container>
				<Row>
					<img src={hafiz} className="hafiz_contact absolute" alt="planet ungu di halaman talk"/>        
					<img src={firework} className="firework_contact absolute" alt="planet ungu di halaman talk"/>        
					<img src={firework} className="firework_contact1 absolute" alt="planet ungu di halaman talk"/>        
					<img src={awan_contact} className="awan_contact absolute" alt="planet ungu di halaman talk"/>        
					<p className="title_contact absolute">THANK YOU</p>
					<Col>
						<Button className="TNC_button absolute" onClick={this.openModal}>Term and Condition</Button>
						<Modal
							isOpen={this.state.modalIsOpen}
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Example Modal"
							>
						<button onClick={this.closeModal} className="modalclose">X</button>
						 <h2>Terms & Conditions</h2>
						</Modal>
						<Button className="PP_button absolute" onClick={this.openModal}>Privacy Policy</Button>
							<Modal
							isOpen={this.state.modalIsOpen}
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Example Modal"
							>
						<button onClick={this.closeModal} className="modalclose">X</button>
						 <h2>Privacy Policy</h2>
						 </Modal>
						<Button className="CU_button absolute" onClick={this.openModal}>Contact Us</Button>
						<Modal
							isOpen={this.state.modalIsOpen}
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Example Modal"
							>
						<button onClick={this.closeModal} className="modalclose">X</button>
						 <h2>Co</h2>
						 </Modal>
					</Col>
				</Row>
            </Container>
    	</div>
    );
  }
}
export default Contact;