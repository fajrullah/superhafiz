import React, { Component } from 'react';
import './App.css';
// import tes from './images/tes.png';
import { Row, Container, Col } from 'react-bootstrap';
import material from './images/Material-DetailsProduct.png';
import materialmobile from './images/material-mobile.png';
import mata from './images/mata-DetailProduct.png';
import matamobile from './images/mata-mobile.png';
import tombol from './images/Tombol-DetailProduct.png';
import tombolmobile from './images/tombol-mobile.png';
import bg from './images/detail-background.png';

// import hafiz from './images/3.png';

const ImageLoader = () => {
	return (<div>Loading ...</div>)
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
    const { isrender } = this.props
    this.setState({
      isLoading : isrender
     })
  }
  render() { 
    const { isLoading } = this.state
    if(isLoading){
      return <ImageLoader/>
    }
    return (
      <div>
        <Container>
        <Row>
          <h2 className="title_features">Detail Produk</h2>
          {/* <Row> */}
            <Col lg={4} xs={12}>
              <img src={mata} className="mata absolute" alt="fire roket kiri"/>
              <img src={matamobile} className="mata-mobile absolute" alt="fire roket kiri"/>
              <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
              <h3 className="mata-judul-Detail absolute">Mata</h3>
              <p className="Detail-mata absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
            <Col lg={4} xs={12}>
              <img src={material} className="material absolute" alt="fire roket kiri"/>
              <img src={materialmobile} className="material-mobile absolute" alt="fire roket kiri"/>
              <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
              <h3 className="material-judul-Detail absolute">Material</h3>
              <p className="Detail-material absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
            <Col lg={4} xs={12}>
              <img src={tombol} className="tombol absolute" alt="fire roket kiri"/>
              <img src={tombolmobile} className="tombol-mobile absolute" alt="fire roket kiri"/>
              <img src={bg} className="bg-detail absolute" alt="fire roket kiri"/>
              <h3 className="tombol-judul-Detail absolute">Tombol</h3>
              <p className="Detail-tombol absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
          {/* </Row> */}
          {/* <Col className="col-lg-4">
            <img src={hafiz} className="hafiz-features" alt="fire roket kiri"/>
          </Col> 

          <Col className="col-lg-8 col-xs-12">
            <Row>
              <Col className="col-lg-6 col-xs-6">
                <img src={material} className="material" alt="fire roket kiri"/>
              </Col>
              <Col className="col-lg-6 col-xs-6">
                <p class="desc_mata">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
              <Col className="col-lg-6 col-xs-6">
                <p class="desc_mata">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
              <Col className="col-lg-6 col-xs-6">
                <img src={mata} className="mata" alt="fire roket kiri"/>
              </Col>
              <Col className="col-lg-6 col-xs-6">
                <img src={tombol} className="tombol" alt="fire roket kiri"/>
              </Col>
              <Col className="col-lg-6 col-xs-6">
                <p class="desc_tombol">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
            </Row>
          </Col> */}
        </Row>
        </Container>
      </div>
    );
  }
}

export default Features;
