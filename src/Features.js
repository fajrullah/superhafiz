import React, { Component } from 'react';
// import tes from './images/tes.png';
import { Row, Container, Col } from 'react-bootstrap';
import material from './images/Material-DetailsProduct.png';
import materialmobile from './images/material-mobile.png';
import mata from './images/mata-DetailProduct.png';
import matamobile from './images/mata-mobile.png';
import tombol from './images/Tombol-DetailProduct.png';
import tombolmobile from './images/tombol-mobile.png';
import bg from './images/detail-background.png';
import LazyLoad from 'react-lazyload';
import { TransitionGroup } from 'react-transition-group';
import './New.css';
// import './Style.css';

// import hafiz from './images/3.png';

const ImageLoader = () => {
	return (<div>Loading ...</div>)
  }

  const Mata = () =>{
    return (
      <div>
        <img src={mata} className="mata absolute" alt="fire roket kiri"/>
        <img src={matamobile} className="mata-mobile absolute" alt="fire roket kiri"/>
        <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
        <h3 className="mata-judul-Detail absolute">Mata</h3>
        <p className="Detail-mata absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    )
  }

const Material = () =>{
  return (
    <div>
      <img src={material} className="material absolute" alt="fire roket kiri"/>
      <img src={materialmobile} className="material-mobile absolute" alt="fire roket kiri"/>
      <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
      <h3 className="material-judul-Detail absolute">Material</h3>
      <p className="Detail-material absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
  )
}
const Tombol = () => {
  return (
    <div>
      <img src={tombol} className="tombol absolute" alt="fire roket kiri"/>
      <img src={tombolmobile} className="tombol-mobile absolute" alt="fire roket kiri"/>
      <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
      <h3 className="tombol-judul-Detail absolute">Tombol</h3>
      <p className="Detail-tombol absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
  )
}

class Features extends Component{
  constructor(props) {
		super(props) 
		  this.state = {
			isLoading : true,
		  }
	  }
  static getDerivedStateFromProps(props, state) {
    if (props.isrender !== state.isLoading) {
      return {isLoading: props.isrender }
    }
  // Return null if the state hasn't changed
    return null;
  }
  componentDidMount(){
    console.log('features')
    const { isrender } = this.props
    console.log(isrender)
    this.setState({
      isLoading : isrender
     })

  }
  render() { 
    const { isLoading } = this.state
    if(isLoading){
      return <ImageLoader/>
    }
    console.log(isLoading);
    return (
      <div>
        {/* <Container> */}
        <Row className="detail_product">
          <h2 className="title_features">Detail Produk</h2>
          {/* <Row> */}
            <Col lg={4} className="hide-mobile">
                <Mata/>
            </Col>
            <Col lg={4} className="hide-mobile">
              <Material/>
            </Col>
            <Col lg={4} className="hide-mobile">
              <Tombol/>
            </Col>
            <Col sm={12} className="hide-desktop">
                <Col sm={5}>
                  <img src={mata} className="absolute" alt="fire roket kiri"/>
                </Col>
                <Col sm={7}>
                  <img src={bg} className="absolute" alt="fire roket kiri"/>
                  <h3 className="absolute">Mata</h3>
                  <p className="absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </Col>
            </Col>
            <Col sm={12} className="hide-desktop">
            <div>
              <img src={material} className="absolute" alt="fire roket kiri"/>
              <img src={bg} className="absolute" alt="fire roket kiri"/>
              <h3 className="absolute">Material</h3>
              <p className="absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            </Col>
            <Col sm={12} className="hide-desktop">
              <div>
                <img src={tombol} className="absolute" alt="fire roket kiri"/>
                <img src={bg} className="absolute" alt="fire roket kiri"/>
                <h3 className="absolute">Tombol</h3>
                <p className="absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </Col>
          {/* </Row> */}

        </Row>
        {/* </Container> */}
      </div>
    );
  }
}

export default Features;
